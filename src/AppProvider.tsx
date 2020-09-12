import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { theme } from './theme/muiTheme';

export interface AppProviderProps {
  initialState?: any;
  reducer?: any;
}

const AppProvider: React.FC<AppProviderProps> = ({ initialState, reducer, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { AppProvider };
