import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import ReactGa from 'react-ga';
import { AppProvider } from './AppProvider';
import { Header } from './components';
import { Feed, Login, Widget } from './screens';
import { Sidebar } from './screens/Sidebar/Sidebar';
import { useStateValue } from './StateContextProvider';
import { CustomTheme } from './theme/muiTheme';
import { initialState, reducer } from './utils';

export interface AppProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  app: {},
  appBody: {
    display: 'flex',
  },
}));

const App: React.FC<AppProps> = () => {
  const classes = useStyles();
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TOKEN as string);
      ReactGa.pageview('/');
    }
  }, []);

  return (
    <AppProvider initialState={initialState} reducer={reducer}>
      <Box className={classes.app}>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <Box className={classes.appBody}>
              <Sidebar />
              <Feed />
              <Widget />
            </Box>
          </>
        )}
      </Box>
    </AppProvider>
  );
};

export { App };
