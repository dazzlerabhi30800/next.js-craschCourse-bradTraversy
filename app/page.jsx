// import Image from 'next/image'
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.mainPage}>
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>
        Welcome to Abhishek Choudhary Profile
      </h1>
    </div>
  );
}
