import { createContext, useState } from 'react';

import type { FC, ReactNode } from 'react';

type ActivePeriodContextType = {
  activePeriodId: number | null;
  setActivePeriodId: (periodId: number) => void;
};

export const ActivePeriodContext = createContext<ActivePeriodContextType | undefined>(
  undefined
);


export const ActivePeriodProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activePeriodId, setActivePeriodId] = useState<number | null>(6);

  return (
    <ActivePeriodContext.Provider value={{ activePeriodId, setActivePeriodId }}>
      {children}
    </ActivePeriodContext.Provider>
  );
};
