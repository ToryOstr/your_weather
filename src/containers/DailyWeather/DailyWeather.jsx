import DaillyWeatherCard from "../../components/DailyWeatherCard/DailyWeatherCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import styles from "./dailyWeather.module.css";
import "swiper/css";
import "swiper/css/navigation";

export default function DailyWeather(dataWeather) {

  const swiperRef = useRef(null);

  const slideToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slideToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiperButtonNext",
          prevEl: ".swiperButtonPrev",
        }}
        spaceBetween={10}
        slidesPerView={3}
      >
        {dataWeather &&
          dataWeather.data.daily.map((day, index) => {
            return (
              <SwiperSlide key={index}>
                <DaillyWeatherCard data={day} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div
        className={`${styles.swiperButtonPrev} swiperButtonPrev`}
        onClick={slideToPrev}
      ></div>
      <div
        className={`${styles.swiperButtonNext} swiperButtonNext`}
        onClick={slideToNext}
      ></div>
    </div>
  );
}
