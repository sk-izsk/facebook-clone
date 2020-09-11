import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { BiStoreAlt } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { FiFlag } from 'react-icons/fi';
import { GiMedicalPack } from 'react-icons/gi';
import { MdExpandMore, MdVideoLibrary } from 'react-icons/md';
import { SiMessenger } from 'react-icons/si';
import { SidebarRow } from '../../components';
import { CustomTheme, theme } from '../../theme/muiTheme';

export interface SidebarProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  sidebar: {
    padding: `${theme.spacing(3)}px ${theme.spacing(1.2)}px`,
    flex: 0.33,
  },
}));

const Sidebar: React.FC<SidebarProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.sidebar}>
      <SidebarRow title='Zeeshan' src={undefined} />

      <SidebarRow
        title='Covid-19 information center'
        Icon={<GiMedicalPack size={theme.spacing(3)} color={theme.palette.primary.main} />}
      />
      <SidebarRow title='Pages' Icon={<FiFlag size={theme.spacing(3)} color={theme.palette.primary.main} />} />
      <SidebarRow title='Friends' Icon={<FaUserFriends size={theme.spacing(3)} color={theme.palette.primary.main} />} />
      <SidebarRow title='Messenger' Icon={<SiMessenger size={theme.spacing(3)} color={theme.palette.primary.main} />} />
      <SidebarRow
        title='Marketplace'
        Icon={<BiStoreAlt size={theme.spacing(3)} color={theme.palette.primary.main} />}
      />
      <SidebarRow title='Videos' Icon={<MdVideoLibrary size={theme.spacing(3)} color={theme.palette.primary.main} />} />
      <SidebarRow
        title='Marketplace'
        Icon={<MdExpandMore size={theme.spacing(3)} color={theme.palette.primary.main} />}
      />
    </Box>
  );
};

export { Sidebar };
