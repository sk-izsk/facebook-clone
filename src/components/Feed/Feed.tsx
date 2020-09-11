import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';

export interface FeedProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  feed: {},
}));

const Feed: React.FC<FeedProps> = () => {
  const classes = useStyles();
  return <Box></Box>;
};

export { Feed };
