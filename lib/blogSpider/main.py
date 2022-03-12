from asyncio import run as async_run

from io_service import io_service
from parsing_service import parsing_service


async def main():
    blogs = io_service.read_blog_list()
    posts = await parsing_service.parse(blogs)
    io_service.write_posts(posts)


if __name__ == "__main__":
    async_run(main())
