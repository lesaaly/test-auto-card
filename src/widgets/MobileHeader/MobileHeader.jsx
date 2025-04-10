import { useState, useEffect } from "react";
import styles from "./MobileHeader.module.css";

export default function MobileHeader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <header className={styles.header}>
      <img src="src/assets/logos/autoexport.svg" alt="Logo" />
      <div className={styles.menu}>
        <img src="src/assets/icons/BurgerMenu.png" alt="Menu" />
      </div>
    </header>
  );
}
