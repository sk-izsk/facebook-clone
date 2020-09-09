import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { theme } from './theme/muiTheme';

export interface AppProviderProps {}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { AppProvider };
