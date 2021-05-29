import asyncio
from parsingService import parsingService
from ioService import ioService


async def main():
    blogs = ioService.readBlogList()
    posts = await parsingService.parse(blogs)
    ioService.writePostList(posts)


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
