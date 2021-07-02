import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#1D1F4F',
      color: '#FFFFFF',
      padding: theme.spacing(2.5, 3, 2),
    },
    title: {
      fontSize: 14,
      paddingLeft: theme.spacing(1.25),
    },
  })
);