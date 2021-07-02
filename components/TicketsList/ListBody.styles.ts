import { Theme, createStyles, makeStyles } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 'calc(100% - 49px)',
      overflowY: 'scroll',
    },
    listItem: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5),
    },
  })
);