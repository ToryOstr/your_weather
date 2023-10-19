import styles from "./dailyWeatherCard.module.css";
import { icons } from "../WeatherIcon/WeatherIcon";
import arrow from "../WeatherIcon/weatherIcon/arrow.png";
export default function DaillyWeatherCard(day) {
  console.log(day);
  if (day) {
    let date = new Date(day.data.dt * 1000);
    let formatDate = date.toLocaleDateString();
    return (
      <div className={styles.container}>
        <p className={styles.date}>{formatDate}</p>
        <div className={styles.textContainer}>
          <div>
            <p>Min: {Math.round(day.data.temp.min)}°С</p>
            <p>Max: {Math.round(day.data.temp.max)}°С</p>
          </div>
          <div>
            <p>Wind:</p>
            <p>{day.data.wind_speed}m/s</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.weatherImg}
            src={`https://openweathermap.org/img/wn/${day.data.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
      </div>
    );
  }
}
