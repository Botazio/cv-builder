import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;