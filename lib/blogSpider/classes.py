from enum import Enum


class BlogType(Enum):
    VELOG = 1
    MEDIUM = 2
    TISTORY1 = 101
    TISTORY2 = 102
    TISTORY3 = 103
    ETC1 = 201
    ETC2 = 202
    ETC3 = 203
    ETC4 = 204
    XML1 = 301
    XML2 = 302


class Blog:
    def __init__(self, url, author, blogType):
        self.url = url
        self.author = author
        self.blogType = BlogType[blogType]

    def __str__(self):
        return f"[Blog]\n  url: {self.url},\n  author: {self.author},\n  blogType: {self.blogType}"


class Post:
    def __init__(self, title, preface, url, author):
        self.title = title
        self.preface = preface
        self.url = url
        self.author = author

    def __str__(self):
        return f"[Post]\n  title: {self.title},\n  preface: {self.preface},\n  url: {self.url},\n  author: {self.author}"
