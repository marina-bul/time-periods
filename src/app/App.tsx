import { MainPage } from 'pages/MainPage';

import { ActivePeriodProvider } from './providers/ActivePeriodProvider';
import './styles/index.scss';


export const App = () => {

  return (
    <ActivePeriodProvider>
      <div className="app">
        <MainPage />
      </div>
    </ActivePeriodProvider>

  );
};
