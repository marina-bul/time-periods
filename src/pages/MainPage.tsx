import { GallerySlider } from 'shared/ui/GallerySlider/GallerySlider';
import { PeriodsGallery } from 'features/PeriodsGallery/PeriodsGallery';

import styles from './MainPage.module.scss';


export const MainPage = () => {

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Исторические <br /> даты</h1>
      <PeriodsGallery />
      <GallerySlider />
    </div>
  );
};
