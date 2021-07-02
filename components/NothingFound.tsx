import { VFC } from 'react';
import { Box } from '@material-ui/core';

const NothingFound: VFC = () => {
  return (
    <Box py={2} px={1.5}>
      Nothing found
    </Box>
  );
};

export { NothingFound };
