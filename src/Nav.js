import { Link } from "react-router-dom";
import React from "react";
import './Nav.css';

function Nav({ userNickname, handleLogout }) {
  return (
    <div className="navbarr">
      <div className="navbar-left">
        <Link className="navbarMenu" to={'/Home'}>Home</Link>
        <Link className="navbarMenu" to={'/BoardList'}>Log</Link>
        <Link className="navbarMenu" to={'/Upload'}>Upload</Link>
        <Link className="navbarMenu" to={'/Gallery'}>Gallery</Link>
        {userNickname ? (
          <span className="navbarMenu" onClick={handleLogout}>Logout</span> // 로그인 시 로그아웃 버튼
        ) : (
          <Link className="navbarMenu" to={'/login'}>Login</Link> // 로그아웃 상태면 로그인 버튼
        )}
      </div>
      <div className="navbar-right">
        {userNickname && (
          <span className="navbarMenu">Welcome, {userNickname}</span> // 우측에 닉네임 표시
        )}
      </div>
    </div>
  );
}

export default Nav;
