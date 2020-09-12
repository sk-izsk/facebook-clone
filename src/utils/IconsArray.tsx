import { IconType } from 'react-icons';
import { AiFillFlag, AiFillHome } from 'react-icons/ai';
import { BiStoreAlt } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import {
  MdExpandMore,
  MdForum,
  MdInsertEmoticon,
  MdNotificationsActive,
  MdPhotoLibrary,
  MdSubscriptions,
  MdSupervisorAccount,
  MdVideocam,
} from 'react-icons/md';
import { SiMessenger } from 'react-icons/si';

const headerOptionIcons: IconType[] = [AiFillHome, AiFillFlag, MdSubscriptions, BiStoreAlt, MdSupervisorAccount];

const headerRightIcons: IconType[] = [IoMdAdd, MdForum, SiMessenger, MdNotificationsActive, MdExpandMore];

export interface MessageSenderIcon {
  Icon: IconType;
  text: string;
}

const messageSenderIcon: MessageSenderIcon[] = [
  {
    Icon: MdVideocam,
    text: 'Live video',
  },
  {
    Icon: MdPhotoLibrary,
    text: 'Photo/Video',
  },
  {
    Icon: MdInsertEmoticon,
    text: 'Feeling/Activity',
  },
];

export interface Stories {
  image: string;
  profileSrc: string;
  title: string;
}

const stories: Stories[] = [
  {
    image: 'https://cdn140.picsart.com/327464379069201.jpg?type=webp&to=crop&r=256',
    profileSrc: 'https://cdn131.picsart.com/323779276307201.jpg?type=webp&to=crop&r=256',
    title: 'Model',
  },
  {
    image: 'https://cdn131.picsart.com/315934060092201.jpg?type=webp&to=crop&r=256',
    profileSrc: 'https://cdn131.picsart.com/323038550298201.jpg?type=webp&to=crop&r=256',
    title: 'Bearded Guy',
  },
  {
    image: 'https://cdn141.picsart.com/325429489094201.jpg?type=webp&to=crop&r=256',
    profileSrc: 'https://cdn131.picsart.com/325488229053201.jpg?type=webp&to=crop&r=256',
    title: 'Photoshop',
  },
  {
    profileSrc: 'https://www.pioneeringminds.com/wp-content/uploads/2018/10/Steve-Jobs-1440x960.jpg',
    image:
      'https://images.theconversation.com/files/693/original/aapone-20110118000290280654-file_usa_apple_steve_jobs-original.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
    title: 'Steve Jobs',
  },
  {
    profileSrc:
      'https://img.cinemablend.com/filter:scale/quill/3/3/4/1/1/5/33411540ffe2a4bacfb1824adc71db580b8c7ffd.jpg?mw=600',
    image: 'https://i.pinimg.com/736x/d6/46/8d/d6468d7441b61d051a8c675adbeec09f.jpg',
    title: 'Thanos',
  },
  {
    profileSrc:
      'https://lc-imageresizer-live-s.legocdn.com/resize/ironman_slider_ironman-photo?width=1600&imageUrl=https%3A%2F%2Fwww.lego.com%2Fr%2Fwww%2Fr%2Fportals%2F-%2Fmedia%2Fcampaigns%2Fgrownup%2Fzebra%2Fironman%2F02-intro-section%2Fironman_slider_ironman-photo.jpg',
    image:
      'https://cdna.artstation.com/p/assets/images/images/017/955/070/large/jackson-caspersz-ironman-snap.jpg?1557977565',
    title: 'Iron Man',
  },
  {
    profileSrc: 'https://pbs.twimg.com/profile_images/1204204456092397568/sKIKwz3S_400x400.jpg',
    image: 'https://images.googlycricket.net/wp-content/uploads/2017/09/Australian-Batsman-Ricky-Ponting-Wallpaper.jpg',
    title: 'Ricky Ponting',
  },
];

export { headerOptionIcons, headerRightIcons, stories, messageSenderIcon };
