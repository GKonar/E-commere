import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

// options error, warning, info, success
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
    backgroundColor: "#F59486",
    fontSize: '1rem',
    fontWeight: '600'
  }
}));

export default function CustomSnackbar({ isSnackbarOpen, setSnackbarOpen, message, variant, time }) {
  const classes = useStyles();

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={isSnackbarOpen} autoHideDuration={time} onClose={handleClose}>
        <Alert className={classes.alert} onClose={handleClose} severity={variant}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}