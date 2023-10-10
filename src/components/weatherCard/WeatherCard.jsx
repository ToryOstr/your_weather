import styles from "./weatherCard.module.css";

export default function WeatherCard() {
  return (
    <div className={styles.container}>
      <p className={styles.cityName}>Romny, UA</p>

    </div>
  )
};