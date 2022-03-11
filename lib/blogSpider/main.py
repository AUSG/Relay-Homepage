from asyncio import run as async_run

from parsingService import parsingService
from ioService import ioService


async def main():
    blogs = ioService.readBlogList()
    posts = await parsingService.parse(blogs)
    ioService.writePostList(posts)


if __name__ == "__main__":
    async_run(main())
