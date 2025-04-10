import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./CarGallery.module.css";

const mainImages = [
  "/src/assets/images/gallery/car-1.png",
  "/src/assets/images/gallery/car-2.png",
  "/src/assets/images/gallery/car-3.png",
  "/src/assets/images/gallery/car-4.png",
];

const thumbImages = mainImages.slice(1);

export default function CarGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.carGalleryWrapper}>
      <div className={styles.mainImageWrapper}>
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation={!isMobile}
          thumbs={!isMobile ? { swiper: thumbsSwiper } : undefined}
          className={styles.mainSwiper}
          slidesPerView={1}
          spaceBetween={8}
        >
          {mainImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`car ${index}`}
                className={styles.mainImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {!isMobile && (
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView="auto"
          watchSlidesProgress
          className={styles.thumbsSwiper}
        >
          {thumbImages.map((src, index) => (
            <SwiperSlide key={index} style={{ width: "227px" }}>
              <img
                src={src}
                alt={`thumb ${index}`}
                className={styles.thumbImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
