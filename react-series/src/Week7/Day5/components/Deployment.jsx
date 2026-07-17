function Development() {
  const topics = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Responsive Design",
    "Git & GitHub"
  ];

  return (
    <section className="development">

      <h1>Frontend Development Basics</h1>

      <p>
        Frontend development is the process of building the visual
        part of a website that users interact with.
      </p>

      <div className="topic-container">
        {topics.map((topic, index) => (
          <div className="topic-card" key={index}>
            <h2>{topic}</h2>

            <p>
              Learn the fundamentals of {topic} and build
              modern, responsive websites.
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Development;