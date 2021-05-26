import React from "react";
// import logosvg from '../images/logo-white.svg';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <div className="header">
    <div className="doc_header">
      <h1 className="doc_title">
        <a href="/" className="link_logo">
          <img src="/images/logo-white.svg" alt="AUSG" className="img_logo" />
        </a>
      </h1>
    </div>
  </div>
);

export default Header;
