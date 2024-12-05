import data from './data.json'

import type { HistoricalEvent, TimePeriod } from 'shared/types/Periods';

export async function fetchPeriodsData(): Promise<TimePeriod[]> {
  return new Promise((resolve) => {
    setTimeout(() => {   
      resolve(data.periodsData);
    }, 1000);
  });
}

export async function fetchEventsData(activePeriod: number): Promise<HistoricalEvent[]> {
  return new Promise((resolve) => {
    setTimeout(() => { 
      const events = 
        data.eventsData.find(histEvent => histEvent.periodId === activePeriod)
          .periodEvents  
      resolve(events);
    }, 1000);
  });
}