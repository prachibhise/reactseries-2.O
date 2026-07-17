import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>Frontend Project Development</h1>

        <h2>& Deployment Basics</h2>

        <p>
          Learn how modern frontend applications are developed,
          designed, and deployed using React.
        </p>

        <div className="hero-btns">
          <Link to="/projects">
            <button>Explore Projects</button>
          </Link>

          <Link to="/development">
            <button className="outline-btn">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
          alt="Frontend"
        />
      </div>

    </section>
  );
}

export default Home;