import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Sidebar from './components/Sidebar.tsx';
import { BrowserRouter } from 'react-router-dom';
import NotificationBar from './components/NotificationBar.tsx';
import Profile from './components/Profile.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div
      className="grid grid-cols-12 grid-rows-8 font-gilroy antialiased"
      style={{ height: '100vh', width: '100vw' }} // Ensure full viewport size
    >
      <div className="col-span-3 row-span-8">
        <Sidebar />
      </div>
      <div className="col-span-6 col-start-4 row-start-1">
        <NotificationBar />
      </div>
      <div className="col-span-6 row-span-7 col-start-4 row-start-2">
        <App />
      </div>
      <div className="col-span-3 row-span-8 col-start-10">
        <Profile
          name="Maietry Prajapati"
          role="Admin"
          isVerified={true}
        />
      </div>
    </div>
  </BrowserRouter>
);