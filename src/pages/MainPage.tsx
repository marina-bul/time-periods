import { Numbers } from "../app/Numbers/Numbers";
import styles from "./MainPage.module.scss";


export const MainPage = () => {

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Исторические даты</h1>
      <Numbers />
    </div>
  );
};
