import { HistoryPeriods } from 'features/HistoryPeriods/HistoryPeriods';

import styles from './MainPage.module.scss';


export const MainPage = () => {

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Исторические <br /> даты</h1>
      <HistoryPeriods />
    </div>
  );
};
