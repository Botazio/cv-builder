import ScrollToTop from 'common/components/molecules/scroll-to-top/scroll-to-top';
import LegalPage from 'modules/pages/legal/legal-page';
import NotFound from 'modules/pages/not-found/not-found';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { store } from 'state/store';
import DownloadPage from './modules/pages/builder/download/download-page';
import ExperiencePage from './modules/pages/builder/experience/experience-page';
import PersonalPage from './modules/pages/builder/personal/personal-page';
import TemplatePage from './modules/pages/builder/template/template-page';
import Home from './modules/pages/home/home';
import './styles/globals.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="builder">
            <Route path="personal" element={<PersonalPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="template" element={<TemplatePage />} />
            <Route path="download" element={<DownloadPage />} />
          </Route>
          <Route path="legal">
            <Route path="privacy-cookies-policy" element={<LegalPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
