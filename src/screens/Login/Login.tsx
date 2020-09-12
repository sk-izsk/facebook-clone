import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { SiFacebook } from 'react-icons/si';
import { auth, googleAuthProvider } from '../../api';
import { useStateValue } from '../../StateContextProvider';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { actionTypes } from '../../utils';

export interface LoginProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  login: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loginLogo: {
    flex: 3,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  fbText: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  fbLogo: {},
  btn: {
    height: 50,
    width: 200,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    fontSize: 20,
    borderRadius: 50,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  buttonContainer: {
    flex: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Login: React.FC<LoginProps> = () => {
  const classes = useStyles();
  const [state, dispatch] = useStateValue();
  const signIn = async () => {
    try {
      const result: firebase.auth.UserCredential = await auth.signInWithPopup(googleAuthProvider);
      dispatch({ type: actionTypes.SET_USER, user: result.user });
      console.log('this is result', result.user);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Box className={classes.login}>
      <Box className={classes.loginLogo}>
        <SiFacebook className={classes.fbLogo} size={theme.spacing(15)} color={theme.palette.primary.main} />
        <Typography className={classes.fbText} variant='h2'>
          Facebook
        </Typography>
      </Box>
      <Box className={classes.buttonContainer}>
        <Button className={classes.btn} type='submit' onClick={signIn}>
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export { Login };
