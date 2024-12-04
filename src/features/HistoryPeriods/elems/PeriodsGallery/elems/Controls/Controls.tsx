import { useEffect, useState } from 'react';
import cn from 'clsx';
import { transformNumber } from 'shared/utils/transformNumber';
import ArrowRight from 'shared/ui/icons/arrow-right.svg'

import styles from './Controls.module.scss';

import type { FC, HTMLAttributes } from 'react';


interface ControlsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  periodsAmount: number;
  initialActiveIndex: number
  onChangePeriod: (periodIndex: number) => void
}


export const Controls: FC<ControlsProps> = ({ periodsAmount, initialActiveIndex, onChangePeriod }) => {

  const [activePeriodIndex, setActivePeriodIndex] = useState(1)
  const isFirstPeriod = activePeriodIndex === 1;
  const isLastPeriod = activePeriodIndex === periodsAmount;

  const handleIncrementPeriod = () => {
    const newIndex = activePeriodIndex + 1;
    setActivePeriodIndex(newIndex);
    onChangePeriod(newIndex);
  }

  const handleDecrementPeriod = () => {
    const newIndex = activePeriodIndex - 1;
    setActivePeriodIndex(newIndex);
    onChangePeriod(newIndex);
  }

  useEffect(() => {
    setActivePeriodIndex(initialActiveIndex)
  }, [initialActiveIndex])

  return (
    <div className={styles.container}>
      <span className={styles.label}>
        {`${transformNumber(activePeriodIndex)}/${transformNumber(periodsAmount)}`}
      </span>     
      <div className={styles.buttons}>
        <button 
          className={cn(styles.btn, styles.prevBtn, { [styles.disabled]: isFirstPeriod })} 
          disabled={isFirstPeriod}
          onClick={handleDecrementPeriod}
        >
          <span><ArrowRight className={styles.icon} /></span>
        </button>
        <button 
          className={cn(styles.btn, styles.nextBtn, { [styles.disabled]: isLastPeriod })} 
          disabled={isLastPeriod}
          onClick={handleIncrementPeriod}
        >
          <span><ArrowRight className={styles.icon} /></span>
        </button>
      </div> 
    </div>
  );
};