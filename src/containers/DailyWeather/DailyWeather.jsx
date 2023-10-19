import DaillyWeatherCard from "../../components/DailyWeatherCard/DailyWeatherCard";
import styles from "./dailyWeather.module.css";

export default function DailyWeather(dataWeather) {
  return (
    <div className={styles.container}>
      {dataWeather &&
        dataWeather.data.daily.map((day) => {
          return (
            <DaillyWeatherCard data={day} />
          )
        })}
    </div>
  );
}
