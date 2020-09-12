import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { MdAccountCircle, MdChatBubbleOutline, MdExpandMore, MdNearMe, MdThumbUp } from 'react-icons/md';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface PostProps {
  profilePic?: string;
  image: string;
  userName?: string;
  timeStamp?: any;
  message?: string;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  post: {
    width: '100%',
    marginTop: theme.spacing(2),
    borderRadius: 15,
    backgroundColor: theme.palette.primary.light,
    boxShadow: `0px 5px 7px -7px ${theme.palette.primary.dark}`,
  },
  postTop: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  postAvatar: {
    marginRight: theme.spacing(1.25),
  },
  postTopInfo: {},
  userName: {
    fontSize: 'medium',
  },
  timeStamp: {
    fontSize: 'small',
    color: theme.palette.grey[300],
  },
  postBottom: {
    marginTop: theme.spacing(1.25),
    marginBottom: theme.spacing(1.25),
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
  },
  postImage: {},
  message: {},
  image: {
    width: '100%',
  },
  postOptions: {
    paddingTop: theme.spacing(1.25),
    borderTop: `1px solid ${theme.palette.grey[100]}`,
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: 'medium',
    color: theme.palette.grey[300],
    cursor: 'pointer',
    padding: theme.spacing(2),
  },
  postOption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0.625),
    flex: 1,
    '&:hover': {
      backgroundColor: theme.palette.grey[400],
      borderRadius: 10,
    },
  },
  optionText: {
    marginLeft: theme.spacing(1.25),
  },
}));

const Post: React.FC<PostProps> = ({ profilePic, image, userName, timeStamp, message }) => {
  const classes = useStyles();

  return (
    <Box className={classes.post}>
      <Box className={classes.postTop}>
        <Avatar src={profilePic} className={classes.postAvatar} />
        <Box className={classes.postTopInfo}>
          <Typography className={classes.userName}>{userName}</Typography>
          <Typography className={classes.timeStamp}> {new Date(timeStamp?.toDate()).toLocaleTimeString()} </Typography>
        </Box>
      </Box>
      <Box className={classes.postBottom}>
        <Typography className={classes.message}>{message}</Typography>
      </Box>
      <Box className={classes.postImage}>
        {image.length > 0 && <img className={classes.image} src={image} alt='' />}
      </Box>
      <Box className={classes.postOptions}>
        <Box className={classes.postOption}>
          <MdThumbUp size={theme.spacing(3)} />
          <Typography className={classes.optionText}>Like</Typography>
        </Box>
        <Box className={classes.postOption}>
          <MdChatBubbleOutline size={theme.spacing(3)} />
          <Typography className={classes.optionText}>Comment</Typography>
        </Box>
        <Box className={classes.postOption}>
          <MdNearMe size={theme.spacing(3)} />
          <Typography className={classes.optionText}>Share</Typography>
        </Box>
        <Box className={classes.postOption}>
          <MdAccountCircle size={theme.spacing(3)} />
          <MdExpandMore size={theme.spacing(3)} />
        </Box>
      </Box>
    </Box>
  );
};

export { Post };
