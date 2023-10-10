import styles from './main.module.css';


export default function Main({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
};