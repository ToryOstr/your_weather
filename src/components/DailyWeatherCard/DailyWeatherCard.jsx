import styles from "./dailyWeatherCard.module.css";

export default function DaillyWeatherCard(day) {
  console.log(day);
  if (day) {

    let date = new Date(day.data.dt * 1000);
    let formatDate = date.toLocaleDateString();
    return (
      <div className={styles.container}>
        <p>{formatDate}</p>
        <p>Min {Math.round(day.data.temp.min)}°С</p>
        <p>Max {Math.round(day.data.temp.max)}°С</p>
      </div>
    );
  }
}
