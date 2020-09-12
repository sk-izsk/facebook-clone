import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fireBaseDb } from '../../api';
import { MessageSender, Post, StoryReel } from '../../components';
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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fireBaseDb
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapShot: any) => setPosts(snapShot.docs.map((doc: any) => ({ id: doc.id, data: doc.data() }))));
  }, []);

  return (
    <Box className={classes.feed}>
      <StoryReel />
      <MessageSender />
      {posts.map((post: any) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timeStamp={post.data.timestamp}
          userName={post.data.username}
          image={post.data.image}
        />
      ))}
    </Box>
  );
};

export { Feed };
