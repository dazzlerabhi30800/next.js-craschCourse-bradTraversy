import Link from "next/link";

const fetchCourses = async () => {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
};

const Courses = async () => {
  const courses = await fetchCourses();
  console.log(courses);
  return (
    <div className="courses--wrapper">
      {courses.map((course, index) => (
        <div key={course.id} className="course card">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <Link target="_blank" href={course.link}>
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
