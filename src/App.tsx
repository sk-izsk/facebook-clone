import React from 'react';
import { AppProvider } from './AppProvider';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <AppProvider>hello</AppProvider>;
};

export { App };
