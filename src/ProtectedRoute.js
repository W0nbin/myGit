import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('userNickname'); // 닉네임을 통해 로그인 여부 확인

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
