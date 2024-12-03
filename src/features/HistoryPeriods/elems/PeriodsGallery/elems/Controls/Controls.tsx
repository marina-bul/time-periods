import cn from 'clsx';
import ArrowRight from 'shared/ui/icons/arrow-right.svg'

import styles from './Controls.module.scss';


export const Controls = () => {

  return (
    <div className={styles.container}>
      <span className={styles.label}>06/06</span>     
      <div className={styles.buttons}>
        <button className={cn(styles.btn, styles.prevBtn, { [styles.disabled]: false })}>
          <span><ArrowRight className={styles.icon} /></span>
        </button>
        <button className={cn(styles.btn, styles.nextBtn)} disabled>
          <span><ArrowRight className={styles.icon} /></span>
        </button>
      </div> 
    </div>
  );
};