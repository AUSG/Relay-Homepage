import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
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
            <NavItem>BLOG</NavItem>
          </Link>
          <Link href="/people" as="/people">
            <NavItem>PEOPLE</NavItem>
          </Link>
          <Link href="/contact" as="/contact">
            <NavItem>CONTACT</NavItem>
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

const NavItem = styled.a`
  font-size: 0.875rem;
  color: #212529;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export default Header;
