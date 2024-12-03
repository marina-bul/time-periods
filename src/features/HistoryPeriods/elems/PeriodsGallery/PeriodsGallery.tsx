import { Numbers } from 'app/Numbers/Numbers';

import { CircleWithPoints } from './elems/Circle/Circle';
import { Controls } from './elems/Controls/Controls';
import styles from './PeriodsGallery.module.scss';

import type { FC } from 'react';
import type { TimePeriod } from 'shared/types/Periods';


interface PeriodsGalleryProps {
  className?: string;
  periods: TimePeriod[]
}


export const PeriodsGallery: FC<PeriodsGalleryProps> = ({ periods }) => {
  console.log(periods);
  
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <CircleWithPoints />
      </div>
      <Numbers />
      <Controls />
    </div>
  );
};
