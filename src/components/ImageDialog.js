import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:first-child': {
      paddingTop: theme.spacing(1),
    }
  },
}))(MuiDialogContent);
function ImageDialog({ imageSrc, toggle, setToggle }) {
  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={toggle} TransitionComponent={Transition}>
        <DialogContent>
          <img src={imageSrc} alt="product" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ImageDialog;


