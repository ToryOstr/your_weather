import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
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
        setDataWeather(data);
        console.log(data);
      });
  }

  return (
    <div className={styles.container}>
      <Header onhandleGetSearchData={handleGetDataSrarch} />
      <Main>
        <WeatherCard />
      </Main>
      <Footer />
    </div>
  );
}
