import { useParams } from "react-router-dom";
import courses from "./components/courses";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  return (
    <div className="details">
      <h1>{course.title}</h1>

      <h3>Instructor: {course.instructor}</h3>

      <h3>Duration: {course.duration}</h3>

      <p>{course.description}</p>
    </div>
  );
}

export default CourseDetails;