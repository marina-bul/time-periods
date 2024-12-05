import { useCallback, useMemo, useState } from 'react';
import { CircleWithPoints } from 'shared/ui/Circle/Circle';
import { useBreakpoints } from 'shared/hooks/useMedia';

import { Numbers } from './elems/Numbers/Numbers';
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
  const { isDesktop } = useBreakpoints()

  const activePoint = useMemo(() => {
    return { idx: activePeriod.periodId, name: activePeriod.field }
  }, [activePeriod])

  const handleChangeActivePeriod = useCallback((periodIndex: number) => {
    const newActivePeriod = periods.find(period => period.periodId === periodIndex);
    setActivePeriod(newActivePeriod)
  }, [periods])
  
  return (
    <div className={styles.intervals}>
      { isDesktop && (
        <CircleWithPoints 
          className={styles.circle}
          numberOfPoints={periods.length} 
          activePoint={activePoint} 
          onChangeActivePoint={handleChangeActivePeriod} 
        />
      ) }

      <Numbers interval={activePeriod.timePeriod} />
      <Controls 
        periodsAmount={periods.length} 
        initialActiveIndex={activePeriod.periodId} 
        onChangePeriod={handleChangeActivePeriod} 
      />
      
    </div>
  );
};
