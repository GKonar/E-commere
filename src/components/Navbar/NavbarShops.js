import React from 'react';
import styled from 'styled-components';

import hipSquare from '../../assets/images/hip-square.png';

import { sizes } from '../../helpers/sizes';

import ShopsList from './ShopsList';

const Container = styled.div`
  position: absolute;
  padding: ${({ theme }) => theme.padding.medium};
  padding-top: ${({ theme }) => theme.padding.large};
  background-image: url(${hipSquare});
  left: 0px;
  top: 45px;
  width: 100%;
  transition: .3s;

  ${sizes.laptopS} {
    display: none;
  } 
`

const ShopsWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  margin-left: 10rem;

  ${sizes.laptopL} {
    margin-left: 12rem;
  }
  
  ${sizes.tablet} {
    margin-left: 4rem;
  }
  
  ${sizes.desktopM} {
    margin-left: 11rem;
  }
`

function NavbarShops({ shopsVisible, setShopsVisible }) {
  // const [shopsVisible, setShopsVisible] = useState(false);

  return (
    <Container
      style={{
        visibility: shopsVisible ? 'visible' : 'hidden',
        opacity: shopsVisible ? 1 : 0
      }}
      onMouseEnter={() => setShopsVisible(true)}
      onMouseLeave={() => setShopsVisible(false)} >
      <ShopsWrapper>
        <ShopsList />
      </ShopsWrapper>
    </Container>
  )
}

export default NavbarShops
