import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CustomNextButton, CustomPrevButton } from './elems/CustomButtons/CustomButtons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './GallerySlider.module.scss'

import type { FC, ReactElement } from 'react';

interface SliderProps {
  className?: string;
  slides: ReactElement[]
}


export const GallerySlider: FC<SliderProps> = ({ slides }) => {
  return (
    <>
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPrevButton />
      <CustomNextButton />
    </>
      
  );
};

