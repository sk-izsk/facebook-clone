import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { MessageSender, StoryReel } from '../../components';
import { CustomTheme } from '../../theme/muiTheme';

export interface FeedProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  feed: {
    flex: 1,
    padding: `${theme.spacing(3.75)}px ${theme.spacing(18.75)}px`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Feed: React.FC<FeedProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.feed}>
      <StoryReel />
      <MessageSender />
    </Box>
  );
};

export { Feed };
