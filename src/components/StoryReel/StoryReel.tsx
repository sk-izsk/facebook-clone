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
      <Story
        image='https://cdn140.picsart.com/327464379069201.jpg?type=webp&to=crop&r=256'
        profileSrc='https://cdn131.picsart.com/323779276307201.jpg?type=webp&to=crop&r=256'
        title='Model'
      />
      <Story
        image='https://cdn131.picsart.com/315934060092201.jpg?type=webp&to=crop&r=256'
        profileSrc='https://cdn131.picsart.com/323038550298201.jpg?type=webp&to=crop&r=256'
        title='Bearded Guy'
      />
      <Story
        image='https://cdn141.picsart.com/325429489094201.jpg?type=webp&to=crop&r=256'
        profileSrc='https://cdn131.picsart.com/325488229053201.jpg?type=webp&to=crop&r=256'
        title='Photoshop'
      />
      <Story
        profileSrc='https://www.pioneeringminds.com/wp-content/uploads/2018/10/Steve-Jobs-1440x960.jpg'
        image='https://images.theconversation.com/files/693/original/aapone-20110118000290280654-file_usa_apple_steve_jobs-original.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'
        title='Steve Jobs'
      />
      <Story
        profileSrc='https://img.cinemablend.com/filter:scale/quill/3/3/4/1/1/5/33411540ffe2a4bacfb1824adc71db580b8c7ffd.jpg?mw=600'
        image='https://i.pinimg.com/736x/d6/46/8d/d6468d7441b61d051a8c675adbeec09f.jpg'
        title='Thanos'
      />
      <Story
        profileSrc='https://lc-imageresizer-live-s.legocdn.com/resize/ironman_slider_ironman-photo?width=1600&imageUrl=https%3A%2F%2Fwww.lego.com%2Fr%2Fwww%2Fr%2Fportals%2F-%2Fmedia%2Fcampaigns%2Fgrownup%2Fzebra%2Fironman%2F02-intro-section%2Fironman_slider_ironman-photo.jpg'
        image='https://cdna.artstation.com/p/assets/images/images/017/955/070/large/jackson-caspersz-ironman-snap.jpg?1557977565'
        title='Iron Man'
      />
      <Story
        profileSrc='https://pbs.twimg.com/profile_images/1204204456092397568/sKIKwz3S_400x400.jpg'
        image='https://images.googlycricket.net/wp-content/uploads/2017/09/Australian-Batsman-Ricky-Ponting-Wallpaper.jpg'
        title='Ricky Ponting'
      />
    </Box>
  );
};

export { StoryReel };
