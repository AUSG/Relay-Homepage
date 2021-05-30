import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <div className="header m-header">
      <div className="doc_header flex-none px-16">
        <h1 className="doc_title">
          <Link href="/">
            <a className="link_logo">
              <img
                src="/images/logo-white.svg"
                alt="AUSG"
                className="img_logo"
              />
            </a>
          </Link>
        </h1>
        <Space />
        <Nav>
          <Link href="/blog" as="/blog">
            <NavItem active={router.pathname.indexOf('/blog') === 0}>BLOG</NavItem>
          </Link>
          <Link href="/people" as="/people">
            <NavItem active={router.pathname.indexOf('/people') === 0}>PEOPLE</NavItem>
          </Link>
          <Link href="/contact" as="/contact">
            <NavItem active={router.pathname.indexOf('/contact') === 0}>CONTACT</NavItem>
          </Link>
        </Nav>
      </div>
    </div>
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
  ${(props) => props.active && css`
    color: #212529;
    font-weight: 500;
  `}
`;

export default Header;
