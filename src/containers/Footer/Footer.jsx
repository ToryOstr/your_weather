import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.inform}>Create with:</p>
      <div className={styles.linksContainer}>
        <a
          target="_blank" rel="noopener noreferrer" href="https://rapidapi.com/wirefreethought/api/geodb-cities"
          className={styles.companyLink}
        >
          <div className={styles.imgContainer}>
            <img
              className={styles.companyLogo}
              src="https://rapidapi-prod-apis.s3.amazonaws.com/186d1031-a2d8-4710-b518-5180819d9f9e.png"
              alt="GeoDB Cities"
            />
          </div>
          <span>GeoDB</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://openweathermap.org" className={styles.companyLink}>
          <div className={`${styles.openWeatherLink}`}>
            <img
              className={styles.companyLogo}
              src="https://seeklogo.com/images/O/openweather-logo-3CE20F48B5-seeklogo.com.png"
              alt="OpenWeather"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
