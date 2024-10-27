import React, { useState, useEffect } from 'react';
import axios from 'axios';
import recommendOutfit from './Struct';
import './App.css';
import Nav from './Nav';
import { Route, Routes } from 'react-router-dom';
import Upload from './Upload';
import { Home } from './Home';
import ClothLog from './ClothLog';
import Gallery from './Gallery';
import Login from './login'; 
import Register from './Register'; 
import BoardList from './BoardList';
import BoardWrite from './BoardWrite';
import BoardDetail from './BoardDetail';
import ProtectedRoute from './ProtectedRoute'; // 보호된 라우트 컴포넌트 추가

function App() {
  const [userNickname, setUserNickname] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [outfitRecommendation, setOutfitRecommendation] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');

  // 로그인 상태 로드
  useEffect(() => {
    const savedNickname = localStorage.getItem('userNickname');
    if (savedNickname) {
      setUserNickname(savedNickname);
    }
  }, []);

  // Geolocation으로 사용자 위치 가져오기
  useEffect(() => {
    if (navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError("위치를 가져올 수 없습니다.");
        }
      );
    }
  }, []);

  // 날씨 정보 가져오기
  useEffect(() => {
    if (latitude && longitude) {
      const API_KEY = '61a2e042c2983f55d42203ac0897a332'; // OpenWeatherMap API 키
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;

      axios
        .get(url)
        .then((response) => {
          setWeatherData(response.data);
          const temp = response.data.main.temp;
          const outfit = recommendOutfit(temp);
          setOutfitRecommendation(outfit);

          const weatherMain = response.data.weather[0].main.toLowerCase();
          switch (weatherMain) {
            case 'clear':
              setBackgroundImage('https://64.media.tumblr.com/82c3faacad3d9cf03bded602985e0221/tumblr_omh938XTbk1vg9wr5o1_400.gifv');
              break;
            case 'clouds':
              setBackgroundImage('https://media.licdn.com/dms/image/v2/D4D22AQHLe7plZAbmmg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1705679520209?e=2147483647&v=beta&t=EBAovEut0mFxnR-M3ppn6vPnOSiCA3JihJ2c6lDVIuU');
              break;
            case 'rain':
              setBackgroundImage('https://cdna.artstation.com/p/assets/images/images/011/157/306/original/fernando-henrique-rainy-day.gif?1528137974');
              break;
            case 'snow':
              setBackgroundImage('https://example.com/snowy-day.jpg');
              break;
            default:
              setBackgroundImage('https://example.com/default-weather.jpg');
          }
        })
        .catch((error) => {
          setError("날씨 정보를 가져오지 못했습니다.");
        });
    }
  }, [latitude, longitude]);

  // 로그아웃 처리
  const handleLogout = () => {
    setUserNickname('');
    localStorage.removeItem('userNickname');
    alert('로그아웃 되었습니다.');
  };

  return (
    <div className="app"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}>

      <Nav userNickname={userNickname} setUserNickname={setUserNickname} handleLogout={handleLogout} />
      <Routes>
        <Route path='/Home' element={<Home weatherData={weatherData} outfitRecommendation={outfitRecommendation} />} />
        <Route path='/ClothLog' element={<ClothLog />} />
        <Route path='/Upload' element={<Upload />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path="/login" element={<Login setUserNickname={setUserNickname} />} /> 
        <Route path='/signup' element={<Register />} />
        
        {/* 보호된 라우트로 게시판 설정 */}
        <Route path='/boardList' element={<ProtectedRoute><BoardList /></ProtectedRoute>}/>
        <Route path='/write' element={<ProtectedRoute><BoardWrite /></ProtectedRoute>}/>
        <Route path='/detail/:idx' element={<ProtectedRoute><BoardDetail /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
