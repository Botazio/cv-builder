import { AppProps } from 'next/app';
import { FormProvider } from '../providers/form-provider';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default App;