import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';

import { sizes } from '../helpers/sizes';

const Container = styled.span`
  margin: 0 3rem 0 auto;
  transition: .3s;
  z-index: 10;
  a {
    color: inherit;
  }
  &:hover {
    transform: scale(1.1);
  }

  ${sizes.laptopS} {
    margin: 0 2rem;
  }
`

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -1,
    top: 27,
    border: `2px solid ${theme.palette.background.paper}`,
    borderRadius: '50%',
    padding: '12px 9px',
  },
}))(Badge);

function Basket({ numOfBasketItems }) {
  return (
    <Container>
      <Link to='/basket'>
        <IconButton aria-label="cart">
          {/* MaterialUI badge accepts string */}
          <StyledBadge badgeContent={numOfBasketItems + ''} color="secondary">
            <ShoppingCartIcon fontSize="large" />
          </StyledBadge>
        </IconButton>
      </Link>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    basketItems: state.basketItems,
    numOfBasketItems: state.numOfBasketItems
  }
}

export default connect(mapStateToProps)(Basket);
