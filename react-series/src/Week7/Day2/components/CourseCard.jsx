import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="card">
    <img src={course.image} />

    <h2>{course.title}</h2>

    <p> {course.instructor}</p>

    <p>{course.rating}</p>

    <p>{course.duration}</p>

    <button>View Details</button>
</div>
  );
}

export default CourseCard;