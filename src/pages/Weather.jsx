import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lottie from "lottie-react";
import animationData from '../animations/Animation - 1733829926830.json';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Bangalore`
        );

        console.log('WeatherAPI response:', response.data);

        setWeather(response.data);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError('Failed to load weather data');
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-[#e0f7fa] p-6 flex items-center justify-center"> {/* Pale Blue Background */}
      {/* Main Weather Card */}
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg border border-gray-400">
        
        {/* Lottie Animation - Positioned Above Text Content */}
        <div className="w-full flex justify-center mb-4">
          <div className="w-48 h-48 md:w-64 md:h-64">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>

        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center text-[#333333] mb-4">
          Current Weather & Flood Alerts in Bangalore
        </h2>

        {/* Error Display */}
        {error && (
          <p className="text-red-600 text-center mb-4">
            {error}
          </p>
        )}

        {/* Weather Data Display */}
        {weather ? (
          <div className="space-y-6">
            {/* Weather Info Box */}
            <div className="text-center bg-[#f0f8ff] p-4 rounded-lg shadow-md border border-[#666666]">
              <p className="text-[#333333] text-lg font-semibold">
                Temperature: <span className="text-[#555555]">{weather.current.temp_c}°C</span>
              </p>
              <p className="text-[#666666] text-sm">
                Condition: <span className="text-[#555555]">{weather.current.condition.text}</span>
              </p>
            </div>

            {/* Humidity & Wind Info Section */}
            <div className="flex justify-around bg-[#f5f5f5] p-4 rounded-lg shadow-inner border border-[#666666] space-x-4">
              <div className="text-center">
                <p className="text-sm text-[#555555] font-medium">Humidity</p>
                <p className="text-lg text-[#333333]">{weather.current.humidity}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#555555] font-medium">Wind Speed</p>
                <p className="text-lg text-[#333333]">{weather.current.wind_kph} kph</p>
              </div>
            </div>

            {/* Last Updated Info */}
            <div className="text-sm text-center text-[#666666] mt-2">
              Last updated: {new Date(weather.current.last_updated).toLocaleTimeString()}
            </div>
          </div>
        ) : (
          <p className="text-[#555555] text-center mt-4">Loading weather and flood alert data...</p>
        )}
      </div>
    </div>
  );
}

export default Weather;