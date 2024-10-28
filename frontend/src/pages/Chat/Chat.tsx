import { Header } from "@/shared/components/Header/Header";
import styles from "./Chat.module.css";

export function Chat() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contant}>
        <h1>Openchat chat</h1>
      </div>
    </div>
  );
}
