import { useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <span className={styles.text}>Oops! Something went wrong.</span>
      <div>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </div>
  );
}
