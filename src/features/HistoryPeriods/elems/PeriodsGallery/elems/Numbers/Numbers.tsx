import { useAnimatedInterval } from 'shared/hooks/useAnimatedInterval';

import styles from './Numbers.module.scss';

import type { FC, HTMLAttributes } from 'react';
import type { TimeInterval } from 'shared/types/Periods';


interface NumbersProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  interval: TimeInterval
}

export const Numbers: FC<NumbersProps> = ({ interval }) => {

  const { start, end } = useAnimatedInterval(interval)
  
  return (
    <div className={styles.container}>
      <span className={styles.startNumber}>{start}</span>
      <span className={styles.endNumber}>{end}</span>
    </div>
  );
};