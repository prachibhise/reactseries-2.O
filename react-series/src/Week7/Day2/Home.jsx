import CourseCard from "./components/CourseCard";
import courses from "./components/courses";

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Learn New Skills, Build Your Future</h1>

        <p>
          Explore professional courses taught by industry experts.
        </p>

        <button>Browse Courses</button>
      </section>

      <section className="courses">

        <h1>Popular Courses</h1>

        <div className="course-grid">

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </section>
    </div>
  );
}

export default Home;