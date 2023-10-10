import WeatherCard from '../../components/weatherCard/WeatherCard';
import styles from './main.module.css';


export default function Main() {
  return (
    <div className={styles.container}>
      <WeatherCard/>
    </div>
  )
};