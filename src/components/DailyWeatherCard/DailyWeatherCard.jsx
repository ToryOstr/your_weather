import styles from "./dailyWeatherCard.module.css";
import { icons } from "../WeatherIcon/WeatherIcon";
import arrow from "../WeatherIcon/weatherIcon/arrow.png";
export default function DaillyWeatherCard(day) {
  console.log(day);
  if (day) {
    let date = new Date(day.data.dt * 1000);
    const dayOfWeek = date.getDay();
    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    let formatDate = `${daysOfWeek[dayOfWeek]} ${date.toLocaleDateString()}`;
    return (
      <div className={styles.container}>
        <p className={styles.date}>{formatDate}</p>
        <div className={styles.dataContainer}>
          <div className={styles.other}>
            <p>Min: {Math.round(day.data.temp.min)}°С</p>
            <p>Max: {Math.round(day.data.temp.max)}°С</p>
          </div>
          <div className={styles.other}>
            <p>Wind:</p>
            <p>{day.data.wind_speed}m/s</p>
          </div>

          <div className={styles.imgContainer}>
            <img
              className={styles.weatherImg}
              src={icons[day.data.weather[0].icon]}
              alt="icon weather"
            />
          </div>
        </div>
      </div>
    );
  }
}
