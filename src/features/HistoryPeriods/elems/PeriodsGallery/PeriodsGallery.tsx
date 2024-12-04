import { useCallback, useMemo, useState } from 'react';

import { Numbers } from './elems/Numbers/Numbers';
import { CircleWithPoints } from './elems/Circle/Circle';
import { Controls } from './elems/Controls/Controls';
import styles from './PeriodsGallery.module.scss';

import type { FC, HTMLAttributes } from 'react';
import type { TimePeriod } from 'shared/types/Periods';


interface PeriodsGalleryProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  periods: TimePeriod[]
}


export const PeriodsGallery: FC<PeriodsGalleryProps> = ({ periods }) => {
  const [activePeriod, setActivePeriod] = useState(periods[periods.length-1])

  const activePoint = useMemo(() => {
    return { idx: activePeriod.periodId, field: activePeriod.field }
  }, [activePeriod])

  const handleChangeActivePeriod = useCallback((periodIndex: number) => {
    const newActivePeriod = periods.find(period => period.periodId === periodIndex);
    setActivePeriod(newActivePeriod)
  }, [periods])
  
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <CircleWithPoints numberOfPoints={periods.length} activePoint={activePoint} onChangeActivePoint={handleChangeActivePeriod} />
      </div>
      <Numbers interval={activePeriod.timePeriod} />
      <Controls periodsAmount={periods.length} initialActiveIndex={activePeriod.periodId} onChangePeriod={handleChangeActivePeriod} />
    </div>
  );
};
