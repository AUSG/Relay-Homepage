import React from "react";
// import logosvg from '../images/logo-white.svg';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <div className="header">
    <div className="doc_header flex-none px-16">
      <h1 className="doc_title">
        <a href="/" className="link_logo">
          <img src="/images/logo-white.svg" alt="AUSG" className="img_logo" />
        </a>
      </h1>
      <div className="flex flex-row text-black space-x-16">
        <a href="/blog" className="py-4 hover:no-underline">
          Blog
        </a>
        <a href="/people" className="py-4 hover:no-underline">
          People
        </a>
        <a href="/contact" className="py-4 hover:no-underline">
          Contact
        </a>
      </div>
    </div>
  </div>
);

export default Header;
