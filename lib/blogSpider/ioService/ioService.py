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
                blogs.append(Blog(line[0], line[1], line[2]))
            except Exception as e:
                print(f"error in line : {line}")

    return blogs


def writePostList(posts):
    dictedPosts = [post.__dict__ for post in posts]
    postsDict = {"posts": dictedPosts}

    with open("./newestPosts.json", "w", encoding="utf-8") as f:
        f.write(json.dumps(postsDict, ensure_ascii=False))
