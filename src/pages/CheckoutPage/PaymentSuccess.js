import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import successImage from '../../assets/images/walletsuccess.png';
import dotGrid from '../../assets/images/dot-grid.png';

import H1 from '../../components/H1';
import H3 from '../../components/H3';
import CustomButton from '../../components/CustomButton';

// REDUX
import { connect } from 'react-redux';
import { clearBasket } from '../../store/actions/actions';

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url(${dotGrid});
  padding: 0 ${({ theme }) => theme.padding.large};
  a {
    text-decoration: none;
    color: inherit;
  }
`

const ImageContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.margin.medium};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 70%;
`

const ButtonContainer = styled.div`
  width: 50%;
`

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PaymentSuccess({ paymentSuccess, setPaymentSuccess, onClearBasket }) {
  const handleClose = () => {
    setPaymentSuccess(false);
  };

  return (
    <Dialog fullScreen open={paymentSuccess} onClose={handleClose} TransitionComponent={Transition}>
      <PageWrapper>
        <ImageContainer>
          <Image src={successImage} />
        </ImageContainer>
        <H1>Payment Successful! Thanks!</H1>
        <H3>You have been successfully charged for this transaction.</H3>
        <H3>A receipt for this transaction has been sent to your email.</H3>
        <ButtonContainer>
          <CustomButton onClick={() => onClearBasket()}>
            <Link to='/'>Continue Shopping</Link>
          </CustomButton>
        </ButtonContainer>
      </PageWrapper>
    </Dialog>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onClearBasket: () => dispatch(clearBasket())
  }
}

export default connect(null, mapDispatchToProps)(PaymentSuccess);