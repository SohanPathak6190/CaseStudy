import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5),
    },
    text: {
      fontWeight: theme.typography.fontWeightLight,
    },
    label: {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: theme.typography.fontWeightMedium,
    },
    status: {
      width: '101px',
      height: '19px',
      borderRadius: 4,
      fontSize: 11,
      lineHeight: '15px',
      fontWeight: theme.typography.fontWeightBold,
      color: '#FFFFFF',
      backgroundColor: '#5B994C',
    },
    closedStatus: {
      backgroundColor: '#616161',
    },
    listAction: {
      border: '#CFCFCF 1px solid',
      borderRadius: '2px',
      padding: '0',
    },
    [theme.breakpoints.down('xs')]: {
      root: {
        padding: theme.spacing(2, 3, 0),
      },
      mobileGrid: {
        minWidth: '50%',
        marginBottom: '20px',
      },
      listAction: {
        marginTop: '15px',
      },
    },
  })
);
