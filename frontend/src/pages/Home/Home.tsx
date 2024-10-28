import { Header } from "@/shared/components/Header/Header";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contant}>
        <h1 className={styles.title}>Home Page</h1>
        <Link to="/chat">Go to Chat</Link>
      </div>
    </div>
  );
}
