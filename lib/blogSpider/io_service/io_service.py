import csv
import json
from typing import List

from pydantic import ValidationError

from classes import Blog, Post


def read_blogs() -> List[Blog]:
    blogs = []
    with open("./blogList.csv", newline="") as f:
        lines = csv.reader(f, delimiter=",")
        for line in lines:
            data = {
                'parsing_url': line[0],
                'author': line[1],
                'blog_type': line[2],
                'homepage_url': line[0]
            }
            if len(line) == 4:
                data['homepage_url'] = line[3]

            try:
                blog = Blog.parse_obj(data)
            except ValidationError as e:
                print(f"error in line : {line}")
            else:
                blogs.append(blog)

    return blogs


def write_posts(payload: List[Post]) -> None:
    dicted_posts = [post.dict() for post in payload]
    payload = {"posts": dicted_posts}

    with open("./newestPosts.json", "w", encoding="utf-8") as f:
        f.write(json.dumps(payload, ensure_ascii=False))
