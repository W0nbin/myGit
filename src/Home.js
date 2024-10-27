import React, {useState} from "react";
import { Link } from "react-router-dom";
import App from "./App";



export const Home = ({weatherData, outfitRecommendation}) => {
  

  return (
    <div className="card-container">
        {weatherData ? (
          <div>
            <div className="top">
              <img src="https://cdn-icons-png.flaticon.com/128/535/535239.png" className="top-image" width="40" alt="weather icon" />
              <b className="top-location">현재 위치의 날씨</b>
            </div>
            <div className="line1">
              <b>위치:</b> <b className="line1_2">{weatherData.name}</b>
            </div>
            <div className="line1">
              <b>온도:</b> <b className="line1_2">{weatherData.main.temp}°C</b>
            </div>
            <div className="line1">
              <b>날씨:</b> <b className="line1_2">{weatherData.weather[0].description}</b>
            </div>
            {outfitRecommendation && (
              <div>
                <h2>오늘의 추천 의상</h2>
                <p>상의: {outfitRecommendation.tops.join(', ')}</p>
                <p>하의: {outfitRecommendation.bottoms.join(', ')}</p>
                <p>외투: {outfitRecommendation.outerwear.length > 0 ? outfitRecommendation.outerwear.join(', ') : '외투가 필요 없습니다.'}</p>
              </div>
            )}
          </div>
        ) : (
          <p>날씨 정보를 불러오는 중...</p>
        )}
      </div>
  );
};