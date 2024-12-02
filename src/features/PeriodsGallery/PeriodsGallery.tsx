import { Numbers } from 'app/Numbers/Numbers';

import { CircleWithPoints } from '../Circle/Circle';
import styles from './PeriodsGallery.module.scss';


export const PeriodsGallery = () => {

  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <CircleWithPoints />
      </div>
      <Numbers />
    </div>
  );
};
