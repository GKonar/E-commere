import React from 'react';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
import Logo from '../Logo';
import { sizes } from '../../helpers/sizes';
import ShopsList from '../Navbar/ShopsList';
import ExpansionShopsList from './ExpansionShopsList';

const Container = styled.div`
  padding-top: ${({ theme }) => theme.padding.large};
  background-color: #fff8f7;
`

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;

  ${sizes.mobileL} {
    width: 80%;
  }
`

const ShopsDesktop = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-around;
  padding: ${({ theme }) => theme.padding.medium};

  ${sizes.laptopS} {
    display: none;
  }
`

const ShopsMobile = styled.div`
  display: none;
    div {
      background-color: #fff8f7;
      box-shadow: none;
    }
  
  ${sizes.laptopS} {
    display: block;
  }
`

const Copy = styled.div`
  padding: ${({ theme }) => theme.padding.medium} 0;
  display: flex;
  justify-content: space-between;
  
  ${sizes.tablet} {
    justify-content: center;
  }
`

const LogoWrapper = styled.span`
  display: flex;
  ${sizes.tablet} {
    display: none;
  }
`

const CopyText = styled.span`
  font-weight: 500;
  letter-spacing: '1px';
`

function Footer() {
  return (
    <Container>
      <Wrapper>
        <ShopsDesktop>
          <ShopsList />
        </ShopsDesktop>
        <ShopsMobile>
          <ExpansionShopsList />
        </ShopsMobile>
        <Divider />
        <Copy>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <CopyText style={{ fontWeight: 500, letterSpacing: '1px' }}>&copy; 2020 handcrafted</CopyText>
        </Copy>
      </Wrapper>
    </Container>
  )
}

export default Footer

