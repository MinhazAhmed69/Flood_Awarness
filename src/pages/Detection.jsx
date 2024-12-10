import React, { useState, useEffect } from "react";

function Detection() {
  const [weatherData, setWeatherData] = useState({});
  const [floodNews, setFloodNews] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const WEATHER_API_KEY = process.env.REACT_APP_WEATHERSTACK_API_KEY;
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  
  // Multiple cities for which to fetch weather data
  const CITIES = ["Bengaluru", "Mumbai", "Chennai", "Delhi"];

  // Fetch weather data from WeatherStack API
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherPromises = CITIES.map(city => 
          fetch(
            `http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${city}`
          ).then(response => response.json())
        );

        const weatherResponses = await Promise.all(weatherPromises);
        
        const weatherMap = weatherResponses.reduce((acc, data, idx) => {
          acc[CITIES[idx]] = data;
          return acc;
        }, {});

        setWeatherData(weatherMap);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeatherData();
  }, [WEATHER_API_KEY]);

  // Fetch flood news data from ContextualWeb API
  useEffect(() => {
    const fetchFloodNews = async () => {
      try {
        const newsPromises = CITIES.map(() =>
          fetch(
            `https://contextualwebsearch-web-search-v1.p.rapidapi.com/api/search?q=flood&pageNumber=1&pageSize=5`,
            {
              method: "GET",
              headers: {
                "X-RapidAPI-Host": "contextualwebsearch-web-search-v1.p.rapidapi.com",
                "X-RapidAPI-Key": NEWS_API_KEY,
              },
            }
          ).then((response) => response.json())
        );

        const floodNewsResponses = await Promise.all(newsPromises);

        const newsMap = floodNewsResponses.reduce((acc, data, idx) => {
          acc[CITIES[idx]] = data.value || [];
          return acc;
        }, {});

        setFloodNews(newsMap);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFloodNews();
  }, [NEWS_API_KEY]);

  return (
    <div className="py-20 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-600">Flood Detection</h1>
      <p className="mt-4 text-center text-gray-700">
        Real-time weather and flood news monitoring for multiple cities
      </p>

      {loading && <p className="text-center text-gray-500">Loading weather data...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {CITIES.map((city) => {
        const cityWeather = weatherData[city];
        const cityNews = floodNews[city];

        return (
          <div key={city} className="mt-10 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold">{city}</h2>
            {/* Weather Data */}
            {cityWeather && cityWeather.current ? (
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                <p>Temperature: {cityWeather.current.temperature}°C</p>
                <p>Condition: {cityWeather.current.weather_descriptions.join(", ")}</p>
              </div>
            ) : (
              !loading && <p className="text-center text-gray-500">No weather data available.</p>
            )}

            {/* Flood News */}
            {cityNews && cityNews.length > 0 ? (
              <div>
                <h3 className="mt-6 font-semibold">Latest Flood News</h3>
                {cityNews.map((article, index) => (
                  <div key={index} className="mt-4 p-4 bg-white rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold">{article.title}</h4>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      Read more
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              !loading && <p className="text-center text-gray-500">No flood news available.</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Detection;
