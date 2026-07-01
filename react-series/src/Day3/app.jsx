import "./app.css";
import Day3 from "./components/Coursecard";

function app() {

  const courses = [
    {
      title: "HTML & CSS",
      trainer: "John",
      duration: "4 Weeks",
      image: "https://img.magnific.com/free-vector/flat-international-day-education-illustration_23-2149923592.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      title: "JavaScript",
      trainer: "Emma",
      duration: "6 Weeks",
      image: "https://img.magnific.com/free-vector/maths-online-course-economics-university-department-internet-classes-accounting-lessons-bookkeeping-mathematics-textbooks-digital-archive_335657-3441.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      title: "React JS",
      trainer: "David",
      duration: "8 Weeks",
      image: "https://www.tripleica.com/_next/image?url=https%3A%2F%2Fbucket.tripleica.com%2FCs_course_duration_4c223cc3a7.jpg&w=2048&q=75&dpl=dpl_EVtMCY9DEJwTvWguL5XSsSwVgMaZ"
    },
    {
      title: "Node JS",
      trainer: "Sophia",
      duration: "7 Weeks",
      image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg"
    },
    {
      title: "Java",
      trainer: "Sophia",
      duration: "5 Weeks",
      image: "https://img.magnific.com/free-vector/secretary-online-service-platform-receptionist-answering-calls-assisting-with-document-online-course-isolated-flat-vector-illustration_613284-1730.jpg?semt=ais_hybrid&w=740&q=80"
    }
  ];

  return (
    <div className="container">

      <h1>Course Listing Platform</h1>

      <div className="course-container">

        {courses.map((course, index) => (
          <Day3
            key={index}
            image={course.image}
            title={course.title}
            trainer={course.trainer}
            duration={course.duration}
          />
        ))}

      </div>

    </div>
  );
}

export default app;