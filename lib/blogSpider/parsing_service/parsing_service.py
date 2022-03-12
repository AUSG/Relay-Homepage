from typing import List, Optional

import asyncio
import aiohttp
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET

from classes import Blog, Post, ScrapResult


# Each parser
#  XML -> [0] : item tag name, [1] : firstItem index
#  not XML -> [0] : titleSelector, [1] : prefaceSelector (preface == subtitle)
PARSERS = {
    "VELOG": ["h2:nth-of-type(1)", "p:nth-of-type(1)"],
    "MEDIUM": [
        "section > *:first-child",
        "section > *:not(:nth-child(1)):not(figure):not(img)",
    ],
    "TISTORY1": [".list .title a", ".list .summary"],
    "TISTORY2": [".content_list strong", ".content_list .txt_thumb"],
    "TISTORY3": [".list_content strong", ".list_content .txt_post"],
    "ETC1": ["#page li a", ""],
    "ETC2": [
        '[class^="Feed-module--feed__item-title-link--"]',
        '[class^="Feed-module--feed__item-description--"]',
    ],
    "ETC3": ["header h2", "section"],
    "XML1": ["item", 0],
    "XML2": ["item", 1],
}


async def _crawl_xml(blogType, url) -> Optional[ScrapResult]:
    async with aiohttp.ClientSession() as sess:
        async with sess.get(
            url,
            compress=False,
            headers={"user-agent": "Mozilla/5.0", "accept-encoding": "utf-8"},
        ) as res:
            text = await res.text("utf-8")

    try:
        tag, firstItemIdx = PARSERS[blogType.name]
        node = ET.fromstring(text)
        firstItem = list(node.iter(tag=tag))[firstItemIdx]
        title = firstItem.find("title").text
        preface = BeautifulSoup(firstItem.find("description").text, "html.parser").text

        if preface is None:
            preface = ""

        title = title.strip()
        preface = preface.strip()

        if len(title) == 0:
            raise Exception("No title")

        return ScrapResult(title=title, preface=preface)

    except Exception as e:
        print(f"[crawlXml] error occured: {e} (at {url})")
        return None


async def _crawl_html(blogType, url) -> Optional[ScrapResult]:
    async with aiohttp.ClientSession() as sess:
        async with sess.get(url, headers={"user-agent": "Mozilla/5.0"}) as res:
            text = await res.text()

    soup = BeautifulSoup(text, "lxml")
    try:
        titleSelector, prefaceSelector = PARSERS[blogType.name]

        title = soup.select(titleSelector)[0].text  # select: return array
        # preface가 없는 경우는 예외 처리
        preface = (
            soup.select(prefaceSelector)[0].text if len(prefaceSelector) > 0 else ""
        )
        if preface is None:
            preface = ""

        title = title.strip()
        preface = preface.strip()

        if len(title) == 0:
            raise Exception("No title")

        return ScrapResult(title=title, preface=preface)

    except Exception as e:
        print(f"[crawlHtml] error occured (maybe no post at all?): {e} (at {url})")
        return None


async def _create_post(blog: Blog) -> Post:
    if blog.is_type_xml():
        scrap_result = await _crawl_xml(blog.blog_type, blog.parsing_url)
    else:
        scrap_result = await _crawl_html(blog.blog_type, blog.parsing_url)

    if scrap_result is None:
        return None

    return Post(
        title=scrap_result.title,
        preface=scrap_result.preface,
        url=blog.homepage_url,
        author=blog.author
    )


async def parse(blogs: List[Blog]) -> List[Post]:
    futures = [asyncio.ensure_future(_create_post(blog)) for blog in blogs]

    posts = await asyncio.gather(*futures)
    posts = [post for post in posts if post is not None]
    return posts
