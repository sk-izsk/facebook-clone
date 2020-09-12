import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';
import { stories } from '../../utils';
import { Stories } from '../../utils/IconsArray';
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
      {stories.map((story: Stories) => (
        <Story {...story} key={story.title} />
      ))}
    </Box>
  );
};

export { StoryReel };
