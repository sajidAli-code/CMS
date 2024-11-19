import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import Home from './pages/Home';


declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div>
      <Home />
    </div>
  )
}

export default App