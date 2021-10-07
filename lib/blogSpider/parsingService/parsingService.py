# -*- coding: utf8 -*-
import time
import asyncio
import aiohttp
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET
import requests

from classes import Blog, BlogType, Post


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


async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text()


async def crawlXml(blogType, url):
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

        return title, preface

    except Exception as e:
        print(f"[crawlXml] error occured: {e} (at {url})")
        return None, None


async def crawlHtml(blogType, url):
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

        return title, preface

    except Exception as e:
        print(f"[crawlHtml] error occured (maybe no post at all?): {e} (at {url})")
        return None, None


async def createPost(blog):
    if "XML" in blog.blogType.name:
        title, preface = await crawlXml(blog.blogType, blog.parsingUrl)
    else:
        title, preface = await crawlHtml(blog.blogType, blog.parsingUrl)

    if title is None or preface is None:
        return None

    return Post(title, preface, blog.homepageUrl, blog.author)


async def parse(blogs):
    futures = [asyncio.ensure_future(createPost(blog)) for blog in blogs]

    posts = await asyncio.gather(*futures)
    posts = [post for post in posts if post is not None]
    return posts
