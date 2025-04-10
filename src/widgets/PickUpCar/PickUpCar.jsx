import { useState, useEffect } from "react";
import styles from "./PickUpCar.module.css";

export default function PickUpCar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className="">
        <div className={styles.title}>Бесплатно подберём автомобиль</div>
        <div className={styles.pickUpCarText}>
          Предложим лучшие варианты,
          <br />
          по вашим параметрам
        </div>
      </div>
      <img
        src={
          isMobile
            ? "src/assets/images/cars/CarLinkMobile.png"
            : "src/assets/images/cars/CarLink.png"
        }
        alt=""
        className={styles.car}
      />
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          Подобрать
          <img
            src="src/assets/icons/ArrowRightPickUp.svg"
            alt=""
            className={styles.arrowRight}
          />
        </button>
      </div>
    </div>
  );
}
