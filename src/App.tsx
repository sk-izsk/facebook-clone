import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { AppProvider } from './AppProvider';
import { Header } from './components';
import { Feed } from './screens';
import { Sidebar } from './screens/Sidebar/Sidebar';
import { CustomTheme } from './theme/muiTheme';

export interface AppProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  app: {},
  appBody: {
    display: 'flex',
  },
}));

const App: React.FC<AppProps> = () => {
  const classes = useStyles();
  return (
    <AppProvider>
      <Box className={classes.app}>
        <Header />
        <Box className={classes.appBody}>
          <Sidebar />
          <Feed />
        </Box>
      </Box>
    </AppProvider>
  );
};

export { App };
