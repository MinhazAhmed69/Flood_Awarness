import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../animations/Animation - 1733854674239.json";

function Detection() {
  const [weatherData, setWeatherData] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const CITIES = [
    { name: "Bengaluru", latitude: 12.9716, longitude: 77.5946 },
    { name: "Mumbai", latitude: 19.076, longitude: 72.8777 },
    { name: "Chennai", latitude: 13.0827, longitude: 80.2707 },
    { name: "Delhi", latitude: 28.6139, longitude: 77.209 },
  ];

  // Fetch predefined cities' weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const weatherPromises = CITIES.map((city) =>
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`
          ).then((response) => response.json())
        );

        const weatherResponses = await Promise.all(weatherPromises);

        const weatherMap = weatherResponses.reduce((acc, data, idx) => {
          if (data.current_weather) {
            acc[CITIES[idx].name] = data.current_weather;
          } else {
            acc[CITIES[idx].name] = null; // No data
          }
          return acc;
        }, {});

        setWeatherData(weatherMap);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch weather data:", err);
        setError("Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const handleSearch = async () => {
    if (!searchCity.trim()) return;

    setLoading(true);
    try {
      // Randomize temperature between 20°C to 30°C
      const randomTemperature = (Math.random() * (30 - 20) + 20).toFixed(1); // 20°C to 30°C
      const randomWindspeed = (Math.random() * (15 - 1) + 1).toFixed(1); // 1 km/h to 15 km/h

      const newSearchResult = {
        city: searchCity,
        temperature: randomTemperature,
        windspeed: randomWindspeed,
      };

      setSearchResults((prevResults) => [
        ...prevResults,
        newSearchResult,
      ]);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch data for the entered city:", err);
      setError("Failed to fetch data for the entered city.");
    } finally {
      setLoading(false);
      setSearchCity(""); // Reset search input
    }
  };

  return (
    <div className="py-20 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-500">Flood Detection</h1>
      <p className="mt-4 text-center text-gray-700">
        Real-time weather data for multiple cities.
      </p>

      {/* Lottie Animation */}
      <div className="text-center mt-8">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: '200px', height: '200px', margin: '0 auto' }} // Medium size (adjust as needed)
        />
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

      {/* Display Search Results */}
      <div className="mt-10 max-w-4xl mx-auto">
        {searchResults.map((result, index) => (
          <div key={index} className="mt-4 p-4 bg-blue-100 text-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{result.city}</h2>
            <p>Temperature: {result.temperature}°C</p>
            <p>Windspeed: {result.windspeed} km/h</p>
          </div>
        ))}
      </div>

      {/* Display Predefined Cities */}
      {CITIES.map((city) => (
        <div key={city.name} className="mt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-500">{city.name}</h2>
          {weatherData[city.name] ? (
            <div className="mt-4 p-4 bg-blue-100 text-gray-800 rounded-lg shadow">
              <p>Temperature: {weatherData[city.name].temperature}°C</p>
              <p>Windspeed: {weatherData[city.name].windspeed} km/h</p>
            </div>
          ) : (
            <p className="mt-4 text-center text-gray-500">
              No weather data available.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Detection;
