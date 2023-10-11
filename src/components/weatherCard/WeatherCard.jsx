import styles from "./weatherCard.module.css";

import clearSkyD from "./weatherIcon/01d.png";
import clearSkyN from "./weatherIcon/01n.png";

import fewClD from "./weatherIcon/02d.png";
import fewClN from "./weatherIcon/02n.png";

import scatteredClD from "./weatherIcon/03d.png";
import scatteredClN from "./weatherIcon/03n.png";

import brokenClD from "./weatherIcon/04d.png";
import brokenClN from "./weatherIcon/04n.png";

import showerRainD from "./weatherIcon/09d.png";
import showerRainN from "./weatherIcon/09n.png";

import rainD from "./weatherIcon/10d.png";
import rainN from "./weatherIcon/10n.png";

import thunderstormD from "./weatherIcon/11d.png";
import thunderstormN from "./weatherIcon/11n.png";

import snowD from "./weatherIcon/13d.png";
import snowN from "./weatherIcon/13n.png";

import mistD from "./weatherIcon/50d.png";
import mistN from "./weatherIcon/50n.png";

export default function WeatherCard(dataWeather) {
  let icons = {
    "01d": clearSkyD,
    "01n": clearSkyN,
    "02d": fewClD,
    "02n": fewClN,
    "03d": scatteredClD,
    "03n": scatteredClN,
    "04d": brokenClD,
    "04n": brokenClN,
    "09d": showerRainD,
    "09n": showerRainN,
    "10d": rainD,
    "10n": rainN,
    "11d": thunderstormD,
    "11n": thunderstormN,
    "13d": snowD,
    "13n": snowN,
    "50d": mistD,
    "50n": mistN,
  };

  console.log(dataWeather);
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.cityName}>{dataWeather.data.city}</p>
        <p className={styles.description}>
          {dataWeather.data.current.weather[0].description}
        </p>
        <p className={styles.temp}>
          {Math.round(dataWeather.data.current.temp)}°С
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.weatherImg} src={clearSkyD} alt="weather" />
        <div className={styles.details}></div>
      </div>
    </div>
  );
}
