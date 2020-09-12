import { Avatar, Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { IconType } from 'react-icons';
import { FaSearch } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';
import { useStateValue } from '../../StateContextProvider';
import { CustomTheme, theme } from '../../theme/muiTheme';
import { headerOptionIcons, headerRightIcons } from '../../utils';

export interface HeaderProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  header: {
    padding: `${theme.spacing(2)}px ${theme.spacing(2.5)}px`,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    backgroundColor: theme.palette.primary.light,
    zIndex: 100,
    top: 0,
    boxShadow: `0px 5px 8px -9px ${theme.palette.primary.dark}`,
  },
  headerLeft: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  headerCenter: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  headerRight: {
    display: 'flex',
  },
  headerInput: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[400],
    padding: theme.spacing(1.2),
    marginLeft: theme.spacing(1.2),
    borderRadius: 999,
  },
  headerOption: {
    display: 'flex',
    alignItems: 'center',
    padding: `${theme.spacing(0)}px ${theme.spacing(3.75)}px`,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey[400],
      borderRadius: theme.spacing(1.2),
      alignItems: 'center',
      padding: `${theme.spacing(0)}px ${theme.spacing(3.75)}px`,
      borderBottom: 'none',
    },
    '&:active': {
      borderBottom: `4px solid ${theme.palette.primary.main}`,
    },
  },
  headerInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  inputField: {
    border: 'none',
    borderColor: 'transparent',
    outlineWidth: 0,
    backgroundColor: 'transparent',
    paddingLeft: theme.spacing(1.2),
    height: theme.spacing(3),
    fontSize: 18,
  },
  middleIcon: {
    color: theme.palette.grey[300],
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&:active': {
      color: theme.palette.primary.main,
    },
  },
  userName: {
    marginLeft: theme.spacing(1.2),
  },
}));

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  return (
    <Box className={classes.header}>
      <Box className={classes.headerLeft}>
        <SiFacebook size={theme.spacing(5)} color={theme.palette.primary.main} />
        <Box className={classes.headerInput}>
          <FaSearch />
          <input placeholder='Search Facebook' className={classes.inputField} type='text' />
        </Box>
      </Box>
      <Box className={classes.headerCenter}>
        {headerOptionIcons.map((Icon: IconType, index: number) => (
          <Box className={classes.headerOption} key={index}>
            <Icon className={classes.middleIcon} size={theme.spacing(4)} />
          </Box>
        ))}
      </Box>
      <Box className={classes.headerRight}>
        <Box className={classes.headerInfo}>
          <Avatar src={user.photoURL} />
          <Typography className={classes.userName} variant='h5'>
            {user.displayName}
          </Typography>
        </Box>
        {headerRightIcons.map((Icon: IconType, index: number) => (
          <IconButton key={index}>
            <Icon size={theme.spacing(3)} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export { Header };
