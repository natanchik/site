/* eslint-disable import/default */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

import '@/styles/index.scss';

// eslint-disable-next-line import/no-named-as-default-member
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
