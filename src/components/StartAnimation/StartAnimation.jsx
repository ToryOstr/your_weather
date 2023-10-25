import React, { useState, useEffect } from "react";
import { icons } from "../WeatherIcon/WeatherIcon";
import styles from "./startAnimation.module.css"
export default function StartAnimation() {

  const images = [];
  
  for (let key in icons) {
    images.push(icons[key])
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1
          ? 0
          : getRandomInt(images.length)
      );
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.animationContainer}>
      <img className={styles.animationImg} src={images[currentImageIndex]} alt="weather image" />
    </div>
  );
}


