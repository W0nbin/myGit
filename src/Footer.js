import React from 'react';

const Footer = () => {
  return (
    <footer>
        <div className="section">
          <b>Developer</b>
          <ul>
            <li><a className="link-secondary">누구누구</a></li>
          </ul>
        </div>
        <div className="section">
          <b>Service</b>
          <ul>
            <li><a className="link-secondary">010-xxxx-xxxx</a></li>
          </ul>
        </div>
        <div className="section">
          <b>Manage</b>
          <ul>
            <li><a className="link-secondary" href="./loginadmin.html">관리자 페이지</a></li>
          </ul>
        </div>
      </footer>
  );
};

export default Footer;