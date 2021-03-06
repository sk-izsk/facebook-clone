import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core';
import { makeBorder } from './border';

const colors = {
  white: 'white',
  blue: '#1877f2',
  boxShadow: 'rgba(0,0,0,0.75)',
  gray: '#eff2f5',
  secondaryGray: '##808080	',
  lightGray: 'lightgray',
  red: '#ff0000',
  green: 'green',
  orange: 'orange',
};

export interface CustomTheme extends Theme {
  border: typeof makeBorder;
}

let muiTheme: Theme = createMuiTheme({
  palette: {
    background: {
      default: '#f1f2f5',
    },
    primary: {
      main: colors.blue,
      light: colors.white,
      dark: colors.boxShadow,
    },
    secondary: {
      main: colors.red,
      dark: colors.orange,
      light: colors.green,
    },
    grey: {
      400: colors.gray,
      300: colors.secondaryGray,
      100: colors.lightGray,
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: colors.white,
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 'normal',
    },
    h6: {
      fontWeight: 'normal',
    },
  },
});

muiTheme.shadows[24] = '0px 3px 10px rgba(0, 0, 0, 0.08)';

const theme: CustomTheme = {
  ...responsiveFontSizes(muiTheme),
  border: makeBorder,
};

export { theme };
