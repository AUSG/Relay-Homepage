from enum import Enum

from pydantic import AnyHttpUrl, BaseModel


class BlogType(str, Enum):
    VELOG = 'VELOG'
    MEDIUM = 'MEDIUM'
    TISTORY1 = 'TISTORY1'
    TISTORY2 = 'TISTORY2'
    TISTORY3 = 'TISTORY3'
    ETC1 = 'ETC1'
    ETC2 = 'ETC2'
    ETC3 = 'ETC3'
    ETC4 = 'ETC4'
    XML1 = 'XML1'
    XML2 = 'XML2'


class Blog(BaseModel):
    parsing_url: AnyHttpUrl
    author: str
    blog_type: BlogType
    homepage_url: AnyHttpUrl

    def __str__(self) -> str:
        return f"[Blog]\n  url: {self.url},\n  author: {self.author},\n  blogType: {self.blogType},\n homepageUrl: {self.homepageUrl}"

    def is_type_xml(self) -> bool:
        return 'XML' in self.blog_type.value


class ScrapResult(BaseModel):
    title: str
    preface: str


class Post(BaseModel):
    title: str
    preface: str
    url: AnyHttpUrl
    author: str

    def __str__(self) -> str:
        return f"[Post]\n  title: {self.title},\n  preface: {self.preface},\n  url: {self.url},\n  author: {self.author}"
