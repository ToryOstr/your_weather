import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import styles from "./weatherApp.module.css";
import { API_KEY, WEATHER_API_URL } from "../../components/API";

export default function WeatherApp() {

  function handleGetDataSrarch(searchData) {
    console.log(searchData);
    dataWeather(searchData);
  }

  async function dataWeather(searchData) {
    let cityLatitude = searchData.value[0];
    let cityLongitude = searchData.value[1];

    await fetch(
      `${WEATHER_API_URL}lat=${cityLatitude}&lon=${cityLongitude}&appid=${API_KEY}`
    ).then(response => {
      response.json();
    }).then(response => {
      console.log(response);
      return response;
    }).catch(error => {
      console.log(error);
    });

  }

  return (
    <div className={styles.container}>
      <Header onhandleGetSearchData={handleGetDataSrarch} />
      <Main />
      <Footer/>
    </div>
  );
};