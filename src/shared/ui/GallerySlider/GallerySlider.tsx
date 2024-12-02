import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CustomNextButton, CustomPrevButton } from './elems/CustomButtons/CustomButtons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './GallerySlider.module.scss'


export const GallerySlider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={80}
        slidesPerView="auto"
        grabCursor={true}
        navigation={{
          nextEl: '.custom-next-btn',
          prevEl: '.custom-prev-btn',
        }}
      >
        <SwiperSlide className={styles.slide}>
          <h5 className={styles.title}>2015</h5>
          <p className={styles.content}>
            13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h5 className={styles.title}>2016</h5>
          <p className={styles.content}>
            Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h5 className={styles.title}>2017</h5>
          <p className={styles.content}>
            Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h5 className={styles.title}>2019</h5>
          <p className={styles.content}>
            13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h5 className={styles.title}>2020</h5>
          <p className={styles.content}>
            Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11
          </p>
        </SwiperSlide>
      </Swiper>
      <CustomPrevButton />
      <CustomNextButton />
    </div>

  );
};

