// import Image from 'next/image'
import Courses from "./components/Courses";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.mainPage}>
      <h1 style={{ margin: "8px 0" }}>Welcome to Abhishek Choudhary Courses</h1>
      <Courses />
    </div>
  );
}
