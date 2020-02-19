import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';

const Container = styled.span`
  margin: 0 3rem 0 auto;
  transition: .3s;
  a {
    color: inherit;
  }
  &:hover {
    transform: scale(1.1);
  }
`

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Basket() {
  return (
    <Container>
      <Link to='/basket'>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={7} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Link>
    </Container>
  )
}

export default Basket;
