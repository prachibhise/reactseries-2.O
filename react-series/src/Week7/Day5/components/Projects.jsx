import { useState } from "react";

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Weather App",
      tech: "React",
      description: "Live weather updates using API."
    },
    {
      id: 2,
      title: "Movie Explorer",
      tech: "React",
      description: "Search movies using an API."
    },
    {
      id: 3,
      title: "Portfolio Website",
      tech: "HTML",
      description: "Personal portfolio with responsive design."
    },
    {
      id: 4,
      title: "Calculator",
      tech: "JavaScript",
      description: "Simple calculator using JavaScript."
    },
    {
      id: 5,
      title: "Shopping Cart",
      tech: "React",
      description: "Add, remove and update cart items."
    },
    {
      id: 6,
      title: "Landing Page",
      tech: "CSS",
      description: "Responsive landing page with animations."
    }
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProjects = projectData.filter((project) => {
    const matchSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || project.tech === category;

    return matchSearch && matchCategory;
  });

  return (
    <section className="projects">

      <h1>Our Projects</h1>

      <input
        type="text"
        placeholder="Search Project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="filter-buttons">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("React")}>React</button>
        <button onClick={() => setCategory("HTML")}>HTML</button>
        <button onClick={() => setCategory("CSS")}>CSS</button>
        <button onClick={() => setCategory("JavaScript")}>
          JavaScript
        </button>
      </div>

      <div className="project-container">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>

            <span>{project.tech}</span>

            <p>{project.description}</p>

            <button>View Project</button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;