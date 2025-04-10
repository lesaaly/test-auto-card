import { useState, useEffect } from "react";
import styles from "./CarCard.module.css";

function CarCard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img
          src="src/assets/images/cars/carSwipe.png"
          alt="car"
          className={styles.img}
        />
        <button className={styles.likeButton}>
          <img src="src/assets/icons/Like.svg" alt="Добавить в избранное" />
        </button>
      </div>
      <div className={styles.infoContainer}>
        {isMobile ? (
          <>
            <div className={styles.price}>3 399 000₽</div>
            <div className={styles.name}>HAVAL H9</div>
            <div className={styles.year}>2022</div>
          </>
        ) : (
          <>
            <div className={styles.name}>HAVAL H9, 2022</div>
            <div className={styles.price}>3 399 000₽</div>
          </>
        )}
      </div>
    </div>
  );
}

export default CarCard;
