import React, { useState } from 'react';
import axios from 'axios';
import './ClothLog.css'

const ClothLog = () => {
  const [temperature, setTemperature] = useState(''); // 사용자가 입력하는 온도
  const [weather, setWeather] = useState(''); // 사용자가 입력하는 날씨
  const [clothes, setClothes] = useState(''); // 사용자가 입력하는 옷
  const [error, setError] = useState(null);

  // 로그 버튼 클릭 시 날씨 정보, 온도, 옷을 서버로 전송
  const handleLog = async () => {
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' '); // 현재 날짜
    
    try {
      const response = await axios.post('http://localhost:3306/weather_log', {
        date: currentDate,
        weather,
        temperature,
        clothes,
      });

      alert('날씨 기록이 저장되었습니다!');
    } catch (error) {
      console.error('날씨 기록 저장 실패:', error);
      alert('날씨 기록 저장에 실패했습니다.');
    }
  };

  return (
    <div className='logContainer'>
    <div>
      <h1>착용 기록하기</h1>
      {error && <p>{error}</p>}
      <div>
        <label>날씨: </label>
        <input
          type="text"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
          placeholder="예: 맑음, 비, 흐림 등"
        />
      </div>
      <div>
        <label>온도: </label>
        <input
          type="text"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="예: 25°C"
        />
      </div>
      <div>
        <label>착용한 옷: </label>
        <input
          type="text"
          value={clothes}
          onChange={(e) => setClothes(e.target.value)}
          placeholder="예: 티셔츠, 청바지 등"
        />
      </div>
      <button onClick={handleLog}>로그 기록하기</button>
    </div>
    </div>
  );
};

export default ClothLog;
