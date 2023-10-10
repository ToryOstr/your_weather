import styles from "./weatherCard.module.css";
import sun from "../Logo/sun.png";
export default function WeatherCard() {

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.cityName}>Romny, UA</p>
        <p className={styles.description}>Sunny</p>
        <p className={styles.temp}>28°С</p>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.weatherImg} src={sun} alt="Sun" />
        <div className={styles.details}></div>
      </div>
    </div>
  );
}
