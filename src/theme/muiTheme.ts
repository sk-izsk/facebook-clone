import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core';
import { makeBorder } from './border';

const colors = {
  white: 'white',
  blue: '#1877f2',
  boxShadow: 'rgba(0,0,0,0.75)',
  gray: '#eff2f5',
  secondaryGray: 'gray',
};

export interface CustomTheme extends Theme {
  border: typeof makeBorder;
}

let muiTheme: Theme = createMuiTheme({
  palette: {
    background: {
      default: '#F8F9F9',
    },
    // error: {
    //   // light: colors.redLight,
    //   // main: colors.red,
    // },
    // info: {
    //   // main: colors.darkBlue,
    // },
    primary: {
      main: colors.blue,
      light: colors.white,
      dark: colors.boxShadow,
    },
    // secondary: {
    //   // main: colors.primaryPink,
    //   // light: colors.secondaryPink,
    // },
    // success: {
    //   contrastText: colors.white,
    //   main: colors.pink,
    //   light: colors.green,
    // },
    // text: {
    //   primary: '#4A4A4A',
    //   secondary: colors.darkBlue,
    // },
    // warning: {
    //   contrastText: colors.white,
    //   main: colors.yellow,
    //   light: colors.lighterYellow,
    // },
    grey: {
      400: colors.gray,
      300: colors.secondaryGray,
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
