import { useContext } from 'react';
import { ActivePeriodContext } from 'app/providers/ActivePeriodProvider';

export const useActivePeriod = () => {
  const context = useContext(ActivePeriodContext);
  if (!context) {
    throw new Error(
      'useActivePeriod должен использоваться внутри ActivePeriodProvider'
    );
  }
  return context;
};