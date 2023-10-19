import DaillyWeatherCard from "../../components/DailyWeatherCard/DailyWeatherCard";
import styles from "./dailyWeather.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function DailyWeather(dataWeather) {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
      >
        {dataWeather &&
          dataWeather.data.daily.map((day) => {
            return (
              <SwiperSlide>
                <DaillyWeatherCard data={day} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
