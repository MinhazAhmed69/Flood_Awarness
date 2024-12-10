import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=flood&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );

        console.log('News API Response:', response.data);

        if (response.data.articles) {
          setNewsArticles(response.data.articles);
        } else {
          setError('No news articles found.');
        }
      } catch (err) {
        console.error('Error fetching news data', err);
        setError('Failed to load news articles');
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 bg-gradient-to-br from-blue-100 to-teal-200 rounded-lg shadow-lg">
      {/* Section Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6 animate-bounce">Latest News on Flood Alerts</h2>
      
      {/* Error Message */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* News Grid */}
      {newsArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg hover:shadow-xl rounded-lg transition-shadow transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-700 text-sm"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-700 text-center mt-6">Loading news...</div>
      )}
    </div>
  );
}

export default News;