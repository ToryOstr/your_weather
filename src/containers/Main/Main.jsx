import styles from "./main.module.css";
import { daysOfWeek } from "../../components/DailyWeatherCard/DailyWeatherCard";

let currantDate = new Date();
const dayOfWeek = currantDate.getDay();

let formatDate = `${
  daysOfWeek[dayOfWeek].full
} ${currantDate.toLocaleDateString()}`;

export default function Main({ children }) {
  return (
    <div className={styles.container}>
      <span className={styles.currantDate}>{formatDate}</span>
      {children}
    </div>
  );
}
