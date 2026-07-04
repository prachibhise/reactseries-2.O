function Projects() {

  const projects = [
    {
      title: "Weather App",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500"
    },
    {
      title: "Portfolio",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
    },
    {
      title: "Todo App",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500"
    }
  ];

  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="project-container">

        {projects.map((project, index) => (

          <div className="card" key={index}>

            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <button>View Project</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
