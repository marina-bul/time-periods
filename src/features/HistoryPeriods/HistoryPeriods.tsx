import { PeriodsGallery } from 'features/HistoryPeriods/elems/PeriodsGallery/PeriodsGallery';
import { useEffect, useState } from 'react';
import { fetchPeriodsData, fetchEventsData } from 'shared/api/Api';
import { useActivePeriod } from 'shared/hooks/useActivePeriod';

import { EventsSlider } from './elems/EventsSlider/EventsSlider';
import styles from './HistoryPeriods.module.scss';


export const HistoryPeriods = () => {
  const [periods, setPeriods] = useState([])
  const [histEvents, setHistEvents] = useState([])
  const { activePeriodId } = useActivePeriod();
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPeriodsData();
        setPeriods(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };
    fetchData()
  }, [])

  useEffect(() => {
    setHistEvents([]);
    const fetchEvents = async () => {
      try {
        const data = await fetchEventsData(activePeriodId);
        setHistEvents(data);
      } catch (error) {
        console.error('Ошибка при загрузке событий:', error);
      }
    };
    fetchEvents()
  }, [activePeriodId])

  return (
    <section className={styles.container}>
      <PeriodsGallery periods={periods}  />
      <EventsSlider historicalEvents={histEvents} />
    </section>
  );
};