import styles from "./dailyWeatherCard.module.css";
import { icons } from "../WeatherIcon/WeatherIcon";
import WindDirection from "../WindDirection/WindDirection";
import { DaysOfWeek } from "../DaysOfWeek";

export default function DaillyWeatherCard(day) {
  if (day) {
    let date = new Date(day.data.dt * 1000);
    const dayOfWeek = date.getDay();

    let formatDate = `${
      DaysOfWeek[dayOfWeek].short
    } ${date.toLocaleDateString()}`;
    return (
      <div className={styles.container}>
        <p className={styles.date}>{formatDate}</p>
        <div className={styles.dataContainer}>
          <div className={styles.other}>
            <span>Temp:</span>
            <p>Min: {Math.round(day.data.temp.min)}°С</p>
            <p>Max: {Math.round(day.data.temp.max)}°С</p>
          </div>
          <div className={styles.other}>
            <span>Wind:</span>
            <p>
              {day.data.wind_speed}m/s{" "}
            </p>
              <span className={styles.windDir}>
                {WindDirection(day.data.wind_deg)}
              </span>
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
