import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-teal-500 p-6 flex items-center justify-center">
      <div className="bg-white bg-opacity-95 w-full max-w-md p-6 rounded-lg shadow-lg border border-teal-400">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">Current Weather & Flood Alerts in Bangalore</h2>
        
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        {weather ? (
          <div className="space-y-6">
            <div className="text-center bg-teal-100 p-4 rounded-lg shadow-md border border-teal-300">
              <p className="text-gray-800 text-lg font-semibold">Temperature: <span className="text-teal-700">{weather.current.temp_c}°C</span></p>
              <p className="text-gray-600 text-sm">Condition: <span className="text-teal-700">{weather.current.condition.text}</span></p>
            </div>
            <div className="flex justify-around bg-gray-100 p-4 rounded-lg shadow-inner space-x-4">
              <div className="text-center">
                <p className="text-sm text-gray-700 font-medium">Humidity</p>
                <p className="text-lg text-teal-700">{weather.current.humidity}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-700 font-medium">Wind Speed</p>
                <p className="text-lg text-teal-700">{weather.current.wind_kph} kph</p>
              </div>
            </div>
            <div className="text-sm text-center text-gray-600 mt-2">
              Last updated: {new Date(weather.current.last_updated).toLocaleTimeString()}
            </div>
          </div>
        ) : (
          <p className="text-gray-700 text-center mt-4">Loading weather and flood alert data...</p>
        )}
      </div>
    </div>
  );
}

export default Weather;