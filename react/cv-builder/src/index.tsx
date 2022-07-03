import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PersonalPage from './modules/pages/builder/personal/personal-page';
import ExperiencePage from './modules/pages/builder/experience/experience-page';
import TemplatePage from './modules/pages/builder/template/template-page';
import DownloadPage from './modules/pages/builder/download/download-page';
import App from './App';
import Home from './modules/pages/home/home';
import { Provider } from 'react-redux';
import { store } from '@state/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="builder">
              <Route path="personal" element={<PersonalPage />} />
              <Route path="experience" element={<ExperiencePage />} />
              <Route path="template" element={<TemplatePage />} />
              <Route path="download" element={<DownloadPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
