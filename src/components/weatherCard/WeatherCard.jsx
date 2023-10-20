import OtherParametrCard from "../OtherParameterCard/OtherParameterCard";
import WindDirection from "../WindDirection/WindDirection";
import styles from "./weatherCard.module.css";
import { icons } from "../WeatherIcon/WeatherIcon";

export default function WeatherCard(dataWeather) {
  console.log(dataWeather);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.cityName}>{dataWeather.data.city}</h2>
        <p className={styles.description}>
          {dataWeather.data.current.weather[0].description}
        </p>
        <p className={styles.temp}>
          {Math.round(dataWeather.data.current.temp)}°С
        </p>
        <p className={styles.tempFeels}>
          feels like&nbsp;
          {Math.round(dataWeather.data.current.feels_like)}°С
        </p>

        <h3 className={styles.otherParameters}>Other parameters:</h3>

        <div className={styles.parametrs}>
          <OtherParametrCard
            parameterName={"Wind"}
            value={dataWeather.data.current.wind_speed}
            metric={"m/s"}
            img={WindDirection(dataWeather.data.current.wind_deg)}
          />

          <OtherParametrCard
            parameterName={"Humidity"}
            value={dataWeather.data.current.humidity}
            metric={"%"}
          />

          <OtherParametrCard
            parameterName={"Pressure"}
            value={dataWeather.data.current.pressure}
            metric={"hPa"}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.weatherImg}
          src={icons[dataWeather.data.current.weather[0].icon]}
          alt="weather"
        />
        <div className={styles.details}></div>
      </div>
    </div>
  );
}
