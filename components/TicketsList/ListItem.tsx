import { VFC } from 'react';
import { Chip, Grid, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Ticket, TicketStatus } from '../../shared/types';
import { format } from 'date-fns';
import useStyles from './ListItem.styles';

const formatToDate = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy');
};

const ListItem: VFC<Ticket> = ({ id, user, status, createdAt, dueDate, onRemoveTicket }) => {
  const classes = useStyles();

  const createdAtFormatted = formatToDate(createdAt);
  const dueDateFormatted = formatToDate(dueDate);

  const isMobile = useMediaQuery(useTheme().breakpoints.down('xs'));
  const isStatusClosed = status === TicketStatus.CLOSED;

  const deleteHandler = () => {
    onRemoveTicket(id);
  };

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.mobileGrid} item sm={2} xs={6}>
        {isMobile && <Typography className={classes.label}>ID</Typography>}
        <Typography className={classes.text}>{id}</Typography>
      </Grid>
      <Grid className={classes.mobileGrid} item sm={3} xs={6}>
        {isMobile && <Typography className={classes.label}>Requested by</Typography>}
        <Typography className={classes.text}>{`${user.firstName} ${user.lastName}`}</Typography>
      </Grid>
      <Grid className={classes.mobileGrid} item sm={2} xs={6}>
        {isMobile && <Typography className={classes.label}>Create Date</Typography>}
        <Typography className={classes.text}>{createdAtFormatted}</Typography>
      </Grid>
      <Grid className={classes.mobileGrid} item sm={2} xs={6}>
        {isMobile && <Typography className={classes.label}>Due Date</Typography>}
        <Typography className={classes.text}>{dueDateFormatted}</Typography>
      </Grid>
      <Grid className={classes.mobileGrid} item sm={2} xs={6}>
        {isMobile && <Typography className={classes.label}>Status</Typography>}
        <Chip
          label={status}
          data-testid={`status${id}`}
          className={`${classes.status} ${isStatusClosed ? classes.closedStatus : ''}`}
        />
      </Grid>
      <Grid className={classes.mobileGrid} item sm={1} xs={6}>
        <IconButton
          data-testid={`delete${id}`}
          className={classes.listAction}
          aria-label="delete"
          onClick={deleteHandler}
        >
          <DeleteOutlinedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export { ListItem };
