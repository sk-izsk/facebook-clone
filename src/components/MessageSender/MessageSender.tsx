import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import firebase from 'firebase';
import React, { useState } from 'react';
import { MdInsertEmoticon, MdPhotoLibrary, MdVideocam } from 'react-icons/md';
import { fireBaseDb } from '../../api';
import { useStateValue } from '../../StateContextProvider';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface MessageSenderProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  messageSender: {
    display: 'flex',
    marginTop: theme.spacing(3.75),
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.light,
    borderRadius: 15,
    boxShadow: `0px 5px 7px -7px ${theme.palette.primary.dark}`,
    width: '100%',
  },
  messageSenderTop: {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    padding: theme.spacing(2),
  },
  messageSenderBottom: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  messageSenderInput: {
    flex: 1,
  },
  messageSenderOption: {
    padding: theme.spacing(2.5),
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(0.625),
    color: theme.palette.grey[300],
    '&:hover': {
      borderRadius: 20,
      backgroundColor: theme.palette.grey[400],
    },
  },
  form: {
    flex: 1,
    display: 'flex',
  },
  inputField: {
    outlineWidth: 0,
    border: 'none',
    padding: `${theme.spacing(0.625)}px ${theme.spacing(2.5)}px`,
    margin: `0px ${theme.spacing(1.25)}px`,
    borderRadius: 999,
    backgroundColor: theme.palette.grey[400],
  },
  btn: {
    display: 'none',
  },
  text: {
    fontSize: 'medium',
    marginLeft: theme.spacing(1.25),
    cursor: 'pointer',
  },
}));

const MessageSender: React.FC<MessageSenderProps> = () => {
  const classes = useStyles();
  const [input, setInput] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    fireBaseDb.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
    setInput('');
    setImageUrl('');
  };
  return (
    <Box className={classes.messageSender}>
      <Box className={classes.messageSenderTop}>
        <Avatar src={user.photoURL} />
        <form className={classes.form} action=''>
          <input
            className={clsx([classes.messageSenderInput, classes.inputField])}
            type='text'
            placeholder={`What's on your mind ${user.displayName} ?`}
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          />
          <input
            className={classes.inputField}
            type='text'
            placeholder='Image URL (Optional)'
            value={imageUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)}
          />
          <button className={classes.btn} onClick={handleSubmit} type='submit'>
            Post
          </button>
        </form>
      </Box>
      <Box className={classes.messageSenderBottom}>
        <Box className={classes.messageSenderOption}>
          <MdVideocam size={theme.spacing(3)} color={theme.palette.secondary.main} />
          <Typography className={classes.text}>Live video</Typography>
        </Box>
        <Box className={classes.messageSenderOption}>
          <MdPhotoLibrary size={theme.spacing(3)} color={theme.palette.secondary.light} />
          <Typography className={classes.text}>Photo/Video</Typography>
        </Box>
        <Box className={classes.messageSenderOption}>
          <MdInsertEmoticon size={theme.spacing(3)} color={theme.palette.secondary.dark} />
          <Typography className={classes.text}>Feeling/Activity</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { MessageSender };
