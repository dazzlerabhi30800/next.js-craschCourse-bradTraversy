"use client";
import { useState, useEffect } from "react";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";
import styles from "./page.module.css";
import Loading from "./loading";

export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  return (
    <div className={styles.mainPage}>
      <h1 style={{ margin: "8px 0" }}>Welcome to Abhishek Choudhary Courses</h1>
      <CourseSearch
        getSearchResults={(results) => setCourses(results)}
        setLoading={setLoading}
      />
      {loading && <Loading />}
      <Courses courses={courses} />
    </div>
  );
}
