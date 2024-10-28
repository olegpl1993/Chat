import { useTheme } from "@/app/themeProvider";
import { Switch } from "@mui/joy";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        Open Chat
      </Link>
      <Switch color="primary" size="lg" checked={theme === "dark-theme"} onChange={toggleTheme} />
    </div>
  );
}
