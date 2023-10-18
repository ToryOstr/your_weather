import OtherParametrCard from "../OtherParameterCard/OtherParameterCard";
import styles from "./weatherCard.module.css";
import arrow from "./weatherIcon/arrow.png";

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
  
  const windDirection = function (deg) {

    let dynamicStyleImg = {
      width: "20px",
      height: "20px",
      transform: `rotate(${deg}deg)`,
    };

    if ((deg > 337.5 && deg <= 360) || (deg >= 0 && deg <= 22.5)) {
      return (
        <>
          <span style={{ marginRight: "10px" }}>North</span>
          <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        </>
      );
    }

    if (deg > 22.5 && deg <= 67.5) {
      return (
        <>
          <span style={{ marginRight: "10px" }}>North-East</span>
          <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        </>
      );
    }

    if (deg > 67.5 && deg <= 112.5) {
      return (
        <>
          <span style={{ marginRight: "10px" }}>East</span>
          <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        </>
      );
    }

    if (deg > 112.5 && deg <= 157.5) {
      return (
        <>
          <span style={{ marginRight: "10px" }}>South East</span>
          <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        </>
      );
    }

    if (deg > 157.5 && deg <= 202.5) {
      return (
        <>
          <span style={{ marginRight: "10px" }}>South</span>
          <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        </>
      );
    }

    if (deg > 202.5 && deg <= 247.5) {
      return (
        <>
          <span style={{ marginRight: "10px" }}>South-West</span>
          <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        </>
      );
    }

    if (deg > 247.5 && deg <= 292.5) {
      return (
        <>
          <span style={{ marginRight: "10px" }}>West</span>
          <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        </>
      );
    }

    if (deg > 292.5 && deg <= 337.5) {
      return (
        <>
          <span style={{ marginRight: "10px" }}>North-West</span>
          <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        </>
      );
    }
  };

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
            img={windDirection(dataWeather.data.current.wind_deg)}
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
