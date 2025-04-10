import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./CarSwiper.module.css";

import CarCard from "../CarCard/CarCard";

const CarSwiper = () => {
  const swiperRef = useRef(null);

  const handleWheel = (e) => {
    if (swiperRef.current && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0) {
        swiperRef.current.swiper.slideNext();
      } else {
        swiperRef.current.swiper.slidePrev();
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Похожие автомобили</div>
        <div className={styles.navigation}>
          <button
            className={styles.buttonSwiper}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <img
              src="src/assets/icons/ArrowSwiper.svg"
              alt="Стрелка влево"
              className={styles.arrowSwiperLeft}
            />
          </button>
          <button
            className={styles.buttonSwiper}
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <img src="src/assets/icons/ArrowSwiper.svg" alt="Стрелка вправо" />
          </button>
        </div>
      </div>
      <div onWheel={handleWheel}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={"auto"}
          navigation={{
            prevEl: `.${styles.button}`,
            nextEl: `.${styles.button}`,
          }}
          speed={1200}
          freeMode={{
            enabled: true,
            momentumRatio: 0.1,
            momentumBounce: false,
            sticky: false,
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.1,
            releaseOnEdges: true,
          }}
          breakpoints={{
            500: {
              spaceBetween: 16,
            },
            0: {
              spaceBetween: 8,
            },
          }}
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <CarCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarSwiper;
