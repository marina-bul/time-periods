import styles from './Numbers.module.scss';

export const Numbers = () => {
  const periodStart = 2015
  const periodEnd = 2022
  
  return (
    <div className={styles.container}>
      <span className={styles.startNumber}>{periodStart}</span>
      <span className={styles.endNumber}>{periodEnd}</span>
    </div>
  );
};