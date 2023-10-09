import React from "react";
import img from "./sun.png";
import styles from "./logo.module.css";
export default function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.imgLogo} src={img} alt="sun"></img>
      <span className={styles.logoTxt}> Your Weather</span>
    </div>
  );
}
