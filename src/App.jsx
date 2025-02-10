import React, { useEffect, useState } from "react";
import NewsCard from "./component/NewsCard";
import Header from "./container/Header";
import Footer from "./container/footer";
import "./App.css";




const apiKey = `4c87cf5b20aa465193a81b7c79c3ff42`;
const url = `https://newsapi.org/v2/everything?q=`;

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("India");
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchNews(query);
  }, [query]);

  async function fetchNews(params) {
    const response = await fetch(`${url}${params}&apiKey=${apiKey}`);
    const data = await response.json();
    setArticles(data.articles || []);
  }

  function handleSearch(query) {
    if (query) setQuery(query);
  }

  function handleCategoryClick(category) {
    setQuery(category);
  }

  return (  
      
      <div>
        <Header onSearch={handleSearch} onCategoryClick={handleCategoryClick} user ={user} />
        <div className="cardContainer bg-neutral">
          {articles.length > 0 ? (
            articles.map((article, index) =>
              article.urlToImage ? (
                <NewsCard key={index} article={article} />
              ) : null
            )
          ) : (
            <p>No news available</p>
          )}
        </div>
        <Footer />
      </div>
  )
}

export default App;
