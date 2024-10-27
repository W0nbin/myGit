import React, { useState } from 'react';
import './login.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState(''); // 닉네임 추가
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, nickname }), // 닉네임 포함
      });

      const data = await response.json();
      if (response.status === 200) {
        setMessage('회원가입이 성공적으로 완료되었습니다.');
      } else {
        setMessage('회원가입에 실패했습니다: ' + data.message);
      }
    } catch (error) {
      setMessage('회원가입에 실패했습니다: ' + error.message);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2>회원가입</h2>
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
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)} // 닉네임 입력 필드
          />
          <button onClick={handleRegister}>회원가입</button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Register;
