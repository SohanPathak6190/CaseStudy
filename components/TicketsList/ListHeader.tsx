import { VFC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './ListHeader.styles';

const ListHeader: VFC = () => {
  const classes = useStyles();
  return (
    <Grid data-testid="listHeader" container className={classes.root}>
      <Grid item sm={2}>
        <Typography className={classes.text}>ID</Typography>
      </Grid>
      <Grid item sm={3}>
        <Typography className={classes.text}>Requested by</Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography className={classes.text}>Create date</Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography className={classes.text}>Due date</Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography className={classes.text}>Status</Typography>
      </Grid>
    </Grid>
  );
};

export { ListHeader };
