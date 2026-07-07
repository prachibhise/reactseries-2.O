import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav", present: false },
    { id: 2, name: "Ananya", present: false },
    { id: 3, name: "Rahul", present: false },
    { id: 4, name: "Riya", present: false },
    { id: 5, name: "Karan", present: false },
  ]);

  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: status }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.present
  ).length;

  const absentCount = students.length - presentCount;

  const percentage = (
    (presentCount / students.length) *
    100
  ).toFixed(1);

  return (
    <div className="container">
      <h1>Student Attendance Tracker</h1>

      <div className="student-list">
        {students.map((student) => (
          <div className="card" key={student.id}>
            <h3>{student.name}</h3>

            <p>
              Status :
              <span
                className={
                  student.present
                    ? "present-text"
                    : "absent-text"
                }
              >
                {student.present ? " Present" : " Absent"}
              </span>
            </p>

            <div className="buttons">
              <button
                className="present-btn"
                onClick={() =>
                  markAttendance(student.id, true)
                }
              >
                Present
              </button>

              <button
                className="absent-btn"
                onClick={() =>
                  markAttendance(student.id, false)
                }
              >
                Absent
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="summary">
        <h2>Attendance Summary</h2>

        <p>Present : {presentCount}</p>

        <p> Absent : {absentCount}</p>

        <p> Attendance : {percentage}%</p>

        {percentage >= 75 ? (
          <p className="good">
            Excellent Attendance 
          </p>
        ) : (
          <p className="warning">
            Need Improvement 
          </p>
        )}
      </div>
    </div>
  );
}

export default App;