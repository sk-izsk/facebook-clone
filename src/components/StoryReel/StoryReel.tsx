import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';
import { Story } from '../Story/Story';

export interface StoryReelProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  storyReel: {
    display: 'flex',
  },
}));

const StoryReel: React.FC<StoryReelProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.storyReel}>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </Box>
  );
};

export { StoryReel };
