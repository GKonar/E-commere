import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 500px;
  img {
    width: 100%;
  }
`

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:first-child': {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
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
          <ImageContainer>
            <img src={imageSrc} alt="product" />
          </ImageContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ImageDialog;


