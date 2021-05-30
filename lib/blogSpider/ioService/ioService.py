import csv
import toml
import json

from classes import Blog


def readBlogList():
    blogs = []
    with open("./blogList.csv", newline="") as f:
        lines = csv.reader(f, delimiter=",")
        for line in lines:
            try:
                if len(line) == 4:  # 파싱할 URL과 홈페이지 URL이 다를 경우 (ex. RSS)
                    blogs.append(Blog(line[0], line[1], line[2], line[3]))
                else:
                    blogs.append(Blog(line[0], line[1], line[2], line[0]))
            except Exception as e:
                print(f"error in line : {line}")

    return blogs


def writePostList(posts):
    dictedPosts = [post.__dict__ for post in posts]
    postsDict = {"posts": dictedPosts}

    with open("./newestPosts.json", "w", encoding="utf-8") as f:
        f.write(json.dumps(postsDict, ensure_ascii=False))
