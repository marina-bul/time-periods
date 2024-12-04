export interface TimePeriod {
  periodId: number;
  timePeriod: TimeInterval;
  field: string;
}

export interface TimeInterval {
  start: number;
  end: number
}

export interface HistoricalEvent {
  year: number;
  histEvent: string
}