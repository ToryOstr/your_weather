import styles from "./otherParametrCard.module.css";

export default function OtherParametrCard({
  parameterName,
  value,
  metric,
  img,
}) {
  return (
    <div className={styles.parameter}>
      <p className={styles.parameterName}>{parameterName}</p>
      <span>
        {value}&nbsp;
        {metric}
      </span>
      <div>{img}</div>
    </div>
  );
}
