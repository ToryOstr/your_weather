import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import StartAnimation from "../../components/StartAnimation/StartAnimation";
import Footer from "../Footer/Footer";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import DailyWeather from "../DailyWeather/DailyWeather";
import styles from "./weatherApp.module.css";

export default function WeatherApp() {
  const [dataWeather, setDataWeather] = useState(null);

  
  const API_KEY = process.env.API_KEY;

  const WEATHER_API_URL = process.env.WEATHER_API_URL;
  
  function handleGetDataSrarch(searchData) {
    const [lat, lon] = searchData.value.split(" ");
    const weatherFetch = fetch(
      `${JSON.stringify(
        WEATHER_API_URL
      )}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${JSON.stringify(
        API_KEY
      )}`
    );
      weatherFetch
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
      <div className={styles.wrap}>
        <Header onhandleGetSearchData={handleGetDataSrarch} />
        <Main>
          {dataWeather? <WeatherCard data={dataWeather}/> : <StartAnimation/>}
          {dataWeather && <DailyWeather data={dataWeather} />}
        </Main>
        <Footer />
      </div>
    </div>
  );
}
