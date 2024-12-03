export interface TimePeriod {
  periodId: number;
  timePeriod: TimeInterval;
  field: string;
}

interface TimeInterval {
  start: number;
  end: number
}

export interface HistoricalEvent {
  year: number;
  histEvent: string
}