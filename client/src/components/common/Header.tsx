import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const router = useRouter();

  // Easter egg ~ (발동 조건: 홈 화면으로 가는 로고 10 번 클릭)
  const [clickLogoCnt, setClickLogoCnt] = useState(0);

  useEffect(() => {
    if (clickLogoCnt !== 10) return;

    alert("Grab this egg. This is for you. 🥚");
  }, [clickLogoCnt]);

  const onClickHandlerForEasterEgg = (e) => {
    setClickLogoCnt(clickLogoCnt + 1);
  };

  // ~ Easter egg

  return (
    <header className="header m-header">
      <div className="doc_header md:px-7 px-4">
        <div className="flex items-center w-full max-w-screen-xl mx-auto">
          <h1 className="doc_title flex-shrink-0">
            <Link href="/">
              <a className="link_logo" onClick={onClickHandlerForEasterEgg}>
                <img
                  src="/images/logo-white.svg"
                  alt="AUSG"
                  className="md:w-28 sm:w-24 w-20"
                />
              </a>
            </Link>
          </h1>
          <Space />
          <Nav>
            <Link href="/blog" as="/blog">
              <NavItem
                className="hover:text-black"
                active={router.pathname.indexOf("/blog") === 0}
              >
                BLOG
              </NavItem>
            </Link>
            <Link href="/people" as="/people">
              <NavItem
                className="hover:text-black"
                active={router.pathname.indexOf("/people") === 0}
              >
                PEOPLE
              </NavItem>
            </Link>
            <Link href="/contact" as="/contact">
              <NavItem
                className="hover:text-black"
                active={router.pathname.indexOf("/contact") === 0}
              >
                CONTACT
              </NavItem>
            </Link>
          </Nav>
        </div>
      </div>
    </header>
  );
};

const Space = styled.div`
  flex: 1;
`;

const Nav = styled.div``;

const NavItem = styled.a<{ active?: boolean }>`
  font-size: 0.875rem;
  color: #ced4da;
  margin-left: 1rem;
  cursor: pointer;
  transition: color 200ms;

  &:hover {
    text-decoration: none;
  }
  ${(props) =>
    props.active &&
    css`
      color: #212529;
      font-weight: 500;
    `}
`;

export default Header;
