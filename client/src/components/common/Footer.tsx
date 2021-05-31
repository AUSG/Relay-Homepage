import React from "react";

const Footer: React.FC = () => (
  <footer className="doc_footer">
    <div className="wrap_comm">
      <div className="social-links">
        <a
          className="social_btn"
          title="AUSG on Youtube"
          href="https://www.youtube.com/channel/UCaN1L9bj7pCuv1PiKzx-2rQ"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          className="social_btn"
          title="AUSG on Facebook"
          href="https://www.facebook.com/ausgkr/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="social_btn"
          title="AUSG on GitHub"
          href="https://github.com/AUSG"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="social_btn"
          title="AUSG on Velog"
          href="https://velog.io/@ausg"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-vimeo-v"></i>
        </a>
      </div>

      <small className="txt_copyright">
        Copyright ©
        <a href="#none" target="_blank" rel="noreferrer" className="link_ausg">
          {" "}
          2021 AUSG.{" "}
        </a>
        All rights reserved
      </small>
    </div>
  </footer>
);

export default Footer;
