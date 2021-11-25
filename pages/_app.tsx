import { AppProps } from 'next/app';
import React from 'react';
import { FormProvider } from '../providers/form-provider';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </React.StrictMode>
  );
}

export default App;