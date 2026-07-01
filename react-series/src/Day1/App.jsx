import "./App.css";


function App() {
  return (
    <div className="container">

      <h1>Self Introduction</h1>

      <div className="section">
        <h2>Introduction</h2>
        <p><strong>Name:</strong> Prachi Bhise</p>
        <p><strong>Course:</strong> React.js</p>
        <p>
          Hello! I am learning React.js to become a Frontend Developer and build
          modern websites.
        </p>
      </div>

      <div className="section">
        <h2>Learning Goals</h2>
        <ul>
          <li>Learn JSX</li>
          <li>Understand Components</li>
          <li>Build React Projects</li>
          <li>Improve JavaScript Skills</li>
        </ul>
      </div>

      <div className="section">
        <h2>Hobbies</h2>
        <ul>
          <li> Dancing</li>
          <li> Singing</li>
          <li> Listening to Music</li>
          <li> Coding</li>
        </ul>
      </div>

      <div className="section">
        <h2>Skills</h2>

        <div className="skills">
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JavaScript</div>
          <div className="card">React</div>
        </div>
      </div>

    </div>
  );
}

export default App;