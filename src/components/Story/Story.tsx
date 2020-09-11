import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';

export interface StoryProps {
  image?: any;
  profileSrc?: string;
  title?: string;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  story: {
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: 120,
    height: 200,
    boxShadow: `0px 5px 17px -7px ${theme.palette.primary.dark}`,
    borderRadius: 10,
    marginRight: theme.spacing(1.2),
    transition: 'transform 100ms ease-in',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.07)',
    },
  },
  title: {
    color: theme.palette.primary.light,
    position: 'absolute',
    bottom: theme.spacing(2.5),
    left: theme.spacing(2.5),
  },
  storyAvatar: {
    margin: theme.spacing(1.2),
    border: `5px solid ${theme.palette.primary.main}`,
  },
}));

const Story: React.FC<StoryProps> = ({ image, profileSrc, title }) => {
  const classes = useStyles();
  return (
    <Box style={{ backgroundImage: `url(${image})` }} className={classes.story}>
      <Avatar className={classes.storyAvatar} src={profileSrc} />
      <Typography className={classes.title} variant='h6'>
        {title}
      </Typography>
    </Box>
  );
};

export { Story };
