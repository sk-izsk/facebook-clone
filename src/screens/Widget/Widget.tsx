import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';

export interface WidgetProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  widgets: {},
  plugin: {
    border: 'none',
    overflow: 'hidden',
  },
}));

const Widget: React.FC<WidgetProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.widgets}>
      <iframe
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFac2Pedia-1818827908414968%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        width='340'
        height='100%'
        scrolling='no'
        frameBorder='0'
        allowTransparency={true}
        allow='encrypted-media'
        title='fb-plugin'
        className={classes.plugin}
      ></iframe>
    </Box>
  );
};

export { Widget };
