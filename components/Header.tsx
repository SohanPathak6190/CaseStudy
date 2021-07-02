import { VFC } from 'react';
import { Box, Typography } from '@material-ui/core';

import { Logo } from './Logo';
import useStyles from './Header.styles';

const Header: VFC = () => {
  const classes = useStyles();

  return (
    <Box component="header" className={classes.root} display="flex" flexDirection="row" alignItems="center">
      <Logo width="18" height="18" />
      <Typography variant="h1" className={classes.title}>
        Axiona-Tickets
      </Typography>
    </Box>
  );
};

export { Header };
