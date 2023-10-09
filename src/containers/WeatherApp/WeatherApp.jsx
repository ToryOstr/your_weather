import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import styles from "./weatherApp.module.css";

export default function WeatherApp() {

  function handleGetDataSrarch(searchData) {
    console.log(searchData);

  }
  return (
    <div className={styles.container}>
      <Header onhandleGetSearchData={handleGetDataSrarch} />
      <Main />
      <Footer/>
    </div>
  );
};