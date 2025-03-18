import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "./../helpers/Card";
import Button from "./../helpers/Button";
import staticImage1 from "./../assets/money-heist.jpg";
import staticImage2 from "./../assets/squidgame.jpg";
import staticImage3 from "./../assets/parasite.jpeg";
import staticImage4 from "./../assets/train to busan.jpg";
import staticImage5 from "./../assets/spiderman.jpg";
import staticImage6 from "./../assets/avatar.jpg";

const dummyNews = [
  { title: "Money Heist Part 5", description: "A thrilling continuation of the popular Netflix series.", image: staticImage1, url: "https://example.com/moneyheist" },
  { title: "Squid Game", description: "The survival drama that took the world by storm!", image: staticImage2, url: "https://example.com/squidgame" },
  { title: "Parasite", description: "Oscar-winning masterpiece about class struggle.", image: staticImage3, url: "https://example.com/parasite" },
  { title: "Train to Busan", description: "A gripping zombie apocalypse thriller.", image: staticImage4, url: "https://example.com/traintobusan" },
  { title: "Spider-Man No Way Home", description: "An exciting superhero adventure.", image: staticImage5, url: "https://example.com/spiderman" },
  { title: "Avatar", description: "A visually stunning sci-fi epic.", image: staticImage6, url: "https://example.com/avatar" }
];

const Home = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setNews(dummyNews);
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
  };

  return (
    
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        
        <ul className="sidebar-links">
          <li className="sidebar-item"> Home</li>
          <li className="sidebar-item"> Popular</li>
          <li className="sidebar-item"> Categories</li>
          <li className="sidebar-item"> Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
      <div className="logo">MovieBuzz</div>
        {/* Top Navigation */}
        <nav className="top-nav">
          <div className="filters">
            <button className="filter-btn" onClick={() => handleCategoryClick("Action")}>Action</button>
            <button className="filter-btn" onClick={() => handleCategoryClick("Thriller")}>Thriller</button>
            <button className="filter-btn" onClick={() => handleCategoryClick("Drama")}>Drama</button>
            <button className="filter-btn" onClick={() => handleCategoryClick("Romance")}>Romance</button>
            <button className="filter-btn" onClick={() => handleCategoryClick("Comedy")}>Comedy</button>
          </div>
          <input 
            type="text" 
            placeholder="Search movies..." 
            className="search-bar"
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </nav>

        {/* Trending & Most Watched Section */}
        <div className="content-section">
          {/* Trending Now */}
          <div className="trending-container">
            <h2 className="section-title">🔥 Trending Now</h2>
            <motion.div className="trending-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src={staticImage5} alt="Spider Man" className="trending-image" />
              <div className="trending-info">
                <p className="trending-title">Spider-Man No Way Home</p>
                <span className="rating">⭐ 9.2/10</span>
              </div>
            </motion.div>
          </div>

          {/* Most Watched */}
          <div className="most-watched-container">
            <h2 className="section-title">🎥 Most Watched</h2>
            <div className="most-watched-grid">
              {news.map((article, index) => (
                <motion.div key={index} className="most-watched-card" whileHover={{ scale: 1.05 }}>
                  <Card title={article.title} description={article.description} image={article.image} url={article.url} />
                  <Button className="watch-now">Watch Now</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;