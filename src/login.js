import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setUserNickname }) { // 닉네임 상태 관리 함수 받음
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.status === 200) {
        setUserNickname(data.user.nickname); // 닉네임 저장
        localStorage.setItem('userNickname', data.user.nickname); // localStorage에 닉네임 저장
        navigate('/'); // 로그인 성공 시 홈페이지로 이동
      } else {
        alert('로그인에 실패했습니다: ' + data.message); // 실패 시 알림
      }
    } catch (error) {
      alert('로그인에 실패했습니다: ' + error.message);
    }
  };
  
  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2>로그인</h2>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>로그인</button>
          <p>
            아이디가 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
