import { PeriodsGallery } from 'features/HistoryPeriods/elems/PeriodsGallery/PeriodsGallery';

import { EventsSlider } from './elems/EventsSlider/EventsSlider';
import styles from './HistoryPeriods.module.scss';

import type { TimePeriod } from 'shared/types/Periods';


export const HistoryPeriods = () => {

  const periodsData: TimePeriod[] = [
    {
      periodId: 1,
      timePeriod: { start: 1980, end: 1986 },
      field: 'Наука',
    },
    {
      periodId: 2, 
      timePeriod: { start: 1987, end: 1991 },
      field: 'Технологии',
    },
    {
      periodId: 3,
      timePeriod: { start: 1992, end: 1997 },
      field: 'Спорт',
    },
    {
      periodId: 4,
      timePeriod: { start: 1998, end: 2005 },
      field: 'Литература',
    },
    {
      periodId: 5,
      timePeriod: { start: 2006, end: 2014 },
      field: 'Кино',
    },
    {
      periodId: 6,
      timePeriod: { start: 2015, end: 2022 },
      field: 'Музыка',
    }
  ];

  const eventsData = [
    {
      periodId: 1,
      periodEvents: [
        { year: 1980, histEvent: 'Запуск космического корабля Союз-37' },
        { year: 1981, histEvent: 'Запуск первого многоразового космического корабля Columbia' },
        { year: 1983, histEvent: 'Открытие вируса иммунодефицита человека (ВИЧ)' },
        { year: 1984, histEvent: 'Открытие озоновой дыры над Антарктидой' },
        { year: 1986, histEvent: 'Запуск орбитальной станции «Мир»' }
      ]
    },
    {
      periodId: 2,
      periodEvents: [
        { year: 1987, histEvent: 'Создание первого антивирусного программного обеспечения' },
        { year: 1988, histEvent: 'Появление первого интернет-червя Morris' },
        { year: 1989, histEvent: 'Изобретение World Wide Web Тимом Бернерсом-Ли' },
        { year: 1990, histEvent: 'Запуск телескопа Хаббл' },
        { year: 1991, histEvent: 'Создание операционной системы Linux' }
      ]
    },
    {
      periodId: 3,
      periodEvents: [
        { year: 1992, histEvent: 'Первые Олимпийские игры после распада СССР' },
        { year: 1994, histEvent: 'Первый чемпионат мира по футболу в США' },
        { year: 1995, histEvent: 'Майкл Джордан возвращается в NBA' },
        { year: 1996, histEvent: 'Летние Олимпийские игры в Атланте' },
      ]
    },
    {
      periodId: 4,
      periodEvents: [
        { year: 1998, histEvent: 'Жозе Сарамаго получает Нобелевскую премию по литературе' },
        { year: 2000, histEvent: 'Выход первой книги о Тане Гроттер' },
        { year: 2002, histEvent: 'Публикация романа «Парфюмер» Патрика Зюскинда на русском' },
        { year: 2003, histEvent: 'Выход последней книги серии «Гарри Поттер»' },
        { year: 2005, histEvent: 'Присуждение Нобелевской премии Гарольду Пинтеру' }
      ]
    },
    {
      periodId: 5,
      periodEvents: [
        { year: 2006, histEvent: 'Выход фильма «Остров» Павла Лунгина' },
        { year: 2008, histEvent: 'Премьера фильма «Темный рыцарь»' },
        { year: 2010, histEvent: 'Выход фильма «Начало» Кристофера Нолана' },
        { year: 2012, histEvent: 'Премьера «Мстители»' },
        { year: 2014, histEvent: '«Левиафан» Звягинцева получает Золотой глобус' }
      ]
    },
    {
      periodId: 6,
      periodEvents: [
        { year: 2015, histEvent: 'Адель выпускает альбом «25»' },
        { year: 2016, histEvent: 'Боб Дилан получает Нобелевскую премию по литературе' },
        { year: 2018, histEvent: 'BTS становится первой K-pop группой на вершине Billboard 200' },
        { year: 2020, histEvent: 'Онлайн-концерты становятся новой нормой из-за пандемии' },
        { year: 2022, histEvent: 'Возвращение АВВА с новым альбомом после 40-летнего перерыва' }
      ]
    }
  ];

  return (
    <section className={styles.container}>
      <PeriodsGallery periods={periodsData}  />
      <EventsSlider historicalEvents={eventsData[0].periodEvents} />
    </section>
  );
};