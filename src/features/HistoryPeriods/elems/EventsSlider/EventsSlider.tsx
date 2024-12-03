import { GallerySlider } from 'shared/ui/GallerySlider/GallerySlider';

import styles from './EventsSlider.module.scss';

import type { FC } from 'react';
import type { HistoricalEvent } from 'shared/types/Periods';

interface EventSliderProps {
  historicalEvents?: HistoricalEvent[]
}

interface EventSlideProps {
  historicalEvent: HistoricalEvent
}

const EventSlide: FC<EventSlideProps> = ({ historicalEvent }) => {
  return (
    <>
      <h5 className={styles.title}>{historicalEvent.year}</h5>
      <p className={styles.content}>
        {historicalEvent.histEvent}
      </p>
    </>
  );
}

export const EventsSlider: FC<EventSliderProps> = ({ historicalEvents = [] }) => {

  if (historicalEvents.length === 0) return

  const eventSlides = historicalEvents.map(event => (
    <EventSlide key={event.histEvent} historicalEvent={event} />
  ))
  
  return (
    <div className={styles.container}>
      <GallerySlider slides={eventSlides} />
    </div>
  );
};