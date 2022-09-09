import styles from "./Header.module.css";

import todoLogo from "../assets/Logo.svg";
import Lista from "./Lista";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={todoLogo} alt="Logotipo Ignite" />    
      </header>
    </div>
  );
}
