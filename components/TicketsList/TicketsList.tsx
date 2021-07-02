import { VFC } from 'react';
import { Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { ListHeader } from './ListHeader';
import { ListBody } from './ListBody';
import useStyles from './TicketsList.styles';

const TicketsList: VFC = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(useTheme().breakpoints.down('xs'));

  return (
    <Box component="main" className={classes.root}>
      <Box className={classes.list}>
        {!isMobile && <ListHeader />}
        <ListBody />
      </Box>
    </Box>
  );
};

export { TicketsList };
