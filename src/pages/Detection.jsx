import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../animations/Animation - 1733854674239.json";

function Detection() {
  const [weatherData, setWeatherData] = useState({});
  const [floodNews, setFloodNews] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const WEATHER_API_KEY = process.env.REACT_APP_WEATHERSTACK_API_KEY;
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  const CITIES = ["Bengaluru", "Mumbai", "Chennai", "Delhi"];

  // Fetch predefined cities' weather and news
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const weatherPromises = CITIES.map((city) =>
          fetch(
            `http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${city}`
          ).then((response) => response.json())
        );

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

        const [weatherResponses, newsResponses] = await Promise.all([
          Promise.all(weatherPromises),
          Promise.all(newsPromises),
        ]);

        const weatherMap = weatherResponses.reduce((acc, data, idx) => {
          acc[CITIES[idx]] = data;
          return acc;
        }, {});

        const newsMap = newsResponses.reduce((acc, data, idx) => {
          acc[CITIES[idx]] = data.value || [];
          return acc;
        }, {});

        setWeatherData(weatherMap);
        setFloodNews(newsMap);
        setError(null);
      } catch (err) {
        setError("Failed to fetch weather or news data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [WEATHER_API_KEY, NEWS_API_KEY]);

  const handleSearch = async () => {
    if (!searchCity.trim()) return;
    setLoading(true);
    try {
      const weatherResponse = await fetch(
        `http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${searchCity}`
      ).then((response) => response.json());

      const newsResponse = await fetch(
        `https://contextualwebsearch-web-search-v1.p.rapidapi.com/api/search?q=${searchCity}+flood&pageNumber=1&pageSize=5`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "contextualwebsearch-web-search-v1.p.rapidapi.com",
            "X-RapidAPI-Key": NEWS_API_KEY,
          },
        }
      ).then((response) => response.json());

      setSearchResult({
        city: searchCity,
        weather: weatherResponse,
        news: newsResponse.value || [],
      });
      setError(null);
    } catch (err) {
      setError("Failed to fetch data for the entered city.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 bg-gray-100">
      {/* Main Title Section */}
      <h1 className="text-3xl font-bold text-center text-blue-500">Flood Detection</h1>
      <p className="mt-4 text-center text-gray-700">
        Real-time weather and flood news monitoring for multiple cities.
      </p>

      {/* Animation */}
      <div className="mt-8 flex justify-center">
        <Lottie animationData={animationData} loop={true} style={{ height: 200 }} />
      </div>

      {/* Search Section */}
      <div className="mt-10 max-w-4xl mx-auto">
        <p className="text-center text-gray-700">Can't find your city? Search:</p>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Enter city name"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="border rounded-l-lg p-2 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white rounded-r-lg px-4 hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </div>

      {loading && <p className="text-center text-gray-700">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Display Predefined Cities */}
      {CITIES.map((city) => (
        <div key={city} className="mt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-500">{city}</h2>
          {weatherData[city] && weatherData[city].current ? (
            <div className="mt-4 p-4 bg-blue-100 text-gray-800 rounded-lg shadow">
              <p>Temperature: {weatherData[city].current.temperature}°C</p>
              <p>
                Condition: {weatherData[city].current.weather_descriptions.join(", ")}
              </p>
            </div>
          ) : (
            <p className="mt-4 text-center text-gray-500">No weather data available.</p>
          )}
          {floodNews[city] && floodNews[city].length > 0 ? (
            <div className="mt-4">
              <h3 className="font-semibold text-blue-500">Flood News:</h3>
              {floodNews[city].map((article, index) => (
                <div key={index} className="mt-2 bg-blue-50 p-4 rounded shadow">
                  <h4 className="font-semibold">{article.title}</h4>
                  <p>{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-center text-gray-500">No flood news available.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Detection;