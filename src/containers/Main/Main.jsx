import styles from "./main.module.css";
import { DaysOfWeek } from "../../components/DaysOfWeek";

let currantDate = new Date();
const dayOfWeek = currantDate.getDay();

let formatDate = `${
  DaysOfWeek[dayOfWeek].full
} ${currantDate.toLocaleDateString()}`;

export default function Main({ children }) {
  return (
    <div className={styles.container}>
      <span className={styles.currantDate}>{formatDate}</span>
      {children}
    </div>
  );
}
