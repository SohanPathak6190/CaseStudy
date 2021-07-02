import { Box, CircularProgress } from '@material-ui/core';
import { VFC } from 'react';

const CenteredCircularProgress: VFC = () => {
  return (
    <Box
      m="auto"
      display="flex"
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      data-testid="loading-indicator"
    >
      <CircularProgress />
    </Box>
  );
};

export { CenteredCircularProgress };
