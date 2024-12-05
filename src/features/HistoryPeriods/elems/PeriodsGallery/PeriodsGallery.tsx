import { useCallback, useMemo } from 'react';
import { CircleWithPoints } from 'shared/ui/Circle/Circle';
import { useBreakpoints } from 'shared/hooks/useMedia';
import { useActivePeriod } from 'shared/hooks/useActivePeriod';

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
  if (periods.length === 0) return

  const { activePeriodId, setActivePeriodId } = useActivePeriod();

  const { isDesktop } = useBreakpoints()

  const activePoint = useMemo(() => {
    return { idx: activePeriodId, name: periods[activePeriodId-1].field }
  }, [activePeriodId])

  const handleChangeActivePeriod = useCallback((periodIndex: number) => {
    setActivePeriodId(periodIndex)
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

      <Numbers interval={periods[activePeriodId-1].timePeriod} />
      <Controls 
        periodsAmount={periods.length} 
        initialActiveIndex={periods[activePeriodId-1].periodId} 
        onChangePeriod={handleChangeActivePeriod} 
      />
      
    </div>
  );
};
