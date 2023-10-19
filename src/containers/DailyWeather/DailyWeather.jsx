import DaillyWeatherCard from "../../components/DailyWeatherCard/DailyWeatherCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./dailyWeather.module.css";
import "swiper/css";
import "swiper/css/navigation";

export default function DailyWeather(dataWeather) {
  
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation
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
    </div>
  );
}
