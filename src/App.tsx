import React from 'react';
import { AppProvider } from './AppProvider';
import { Header } from './components';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
};

export { App };
