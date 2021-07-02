import { FC, useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import axios from 'axios';

import { useTickets } from '../../hooks/useTickets';
import { CenteredCircularProgress } from '../CenteredCircularProgress';
import { NothingFound } from '../NothingFound';
import { ListItem } from './ListItem';
import useStyles from "./ListBody.styles";

type ListBodyProps = {};

const ListBody: FC<ListBodyProps> = () => {
  const classes = useStyles();
  const { isLoading, data: tickets } = useTickets();
  const [ticektsData, setTicketsData] = useState(tickets);

  useEffect(() => {
    setTicketsData(tickets);
  }, [tickets]);

  const isEmptyContent = !isLoading && !ticektsData?.length;

  const deleteHandler = (id: number) => {
    const DELETE_TICKETS_ENDPOINT = "/api/tickets/";
    axios.delete(DELETE_TICKETS_ENDPOINT + id).then((resp) => {
      setTicketsData((prevTickets) => {
        return prevTickets?.filter((ticket) => ticket.id !== resp.data.data.id);
      });
    });
  };

  return (
    <Box className={classes.root}>
      {isLoading && <CenteredCircularProgress />}
      {isEmptyContent ? (
        <NothingFound />
      ) : (
        ticektsData?.map((ticket) => <ListItem key={ticket.id} {...ticket} onRemoveTicket={deleteHandler} />)
      )}
    </Box>
  );
};

export { ListBody };
