import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';

export interface SidebarRowProps {
  src?: string;
  Icon?: JSX.Element;
  title?: string;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  sidebarRow: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.2),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
      borderRadius: 10,
    },
  },
  title: {
    fontWeight: 600,
    marginLeft: theme.spacing(2.5),
    fontSize: 15,
  },
}));

const SidebarRow: React.FC<SidebarRowProps> = ({ Icon, src, title }) => {
  const classes = useStyles();
  return (
    <Box className={classes.sidebarRow}>
      {src && <Avatar src={src} />}
      {Icon && Icon}
      <Typography className={classes.title} variant='h6'>
        {title}
      </Typography>
    </Box>
  );
};

export { SidebarRow };
