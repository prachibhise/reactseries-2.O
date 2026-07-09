import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const newsData = [
    {
      title: "India Wins Thrilling Cricket Match",
      category: "Sports",
      description: "Team India defeated Australia in a thrilling final over.",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80",
      link: "https://www.cricbuzz.com/",
    },
    {
      title: "Healthy Lifestyle Tips for Students",
      category: "Health",
      description: "Simple habits that improve physical and mental health.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
      link: "https://www.healthline.com/",
    },
    {
      title: "Sensex Hits New Record High",
      category: "Business",
      description: "Indian stock market reaches an all-time high today.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      link: "https://economictimes.indiatimes.com/",
    },
    {
      title: "Football League Starts This Weekend",
      category: "Sports",
      description: "Top clubs prepare for the opening match.",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c643e7485?auto=format&fit=crop&w=600&q=80",
      link: "https://www.goal.com/",
    },
    {
      title: "Yoga Benefits for Better Health",
      category: "Health",
      description: "Doctors recommend 20 minutes of yoga daily.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
      link: "https://www.medicalnewstoday.com/",
    },
    {
      title: "New Startup Raises ₹500 Crore",
      category: "Business",
      description: "Indian startup receives record funding.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=80",
      link: "https://www.forbes.com/business/",
    },
  ];

  const [news, setNews] = useState(newsData);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const filteredNews = news.filter((item) => {
    return (
      (category === "All" || item.category === category) &&
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1>Daily Buzz News</h1>
      <p>Latest Headlines Around The World</p>

      <div className="top-bar">
        <div className="buttons">
          <button onClick={() => setCategory("All")}>All</button>
          <button onClick={() => setCategory("Sports")}>Sports</button>
          <button onClick={() => setCategory("Health")}>Health</button>
          <button onClick={() => setCategory("Business")}>Business</button>
        </div>

        <input
          type="text"
          placeholder="Search News..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <h2 className="loading">Loading Headlines...</h2>
      ) : (
        <div className="news-grid">
          {filteredNews.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="content">
                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button
                  onClick={() => window.open(item.link, "_blank")}
                >
                  Read Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;