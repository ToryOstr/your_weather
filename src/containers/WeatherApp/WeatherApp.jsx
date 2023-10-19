import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import DailyWeather from "../DailyWeather/DailyWeather";
import styles from "./weatherApp.module.css";
import { API_KEY, WEATHER_API_URL } from "../../components/API";

export default function WeatherApp() {
  const [dataWeather, setDataWeather] = useState(null);

  function handleGetDataSrarch(searchData) {
    const [lat, lon] = searchData.value.split(" ");
    const weatherFetch = fetch(
      `${WEATHER_API_URL}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDataWeather({ city: searchData.label, ...data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.container}>
      <Header onhandleGetSearchData={handleGetDataSrarch} />
      <Main>
        {dataWeather && <WeatherCard data={dataWeather} />}
        {dataWeather && (
          <DailyWeather data={dataWeather} />
        )}
      </Main>
      <Footer />
    </div>
  );
}
