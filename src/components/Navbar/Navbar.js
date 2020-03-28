import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Basket from '../Basket';
import Logo from '../Logo';
import MobileNav from './MobileNav';
import Login from './Login';

import hipSquare from '../../assets/images/hip-square.png';

import { sizes } from '../../helpers/sizes';

import NavbarShops from './NavbarShops';

import Tooltip from '../../components/Tooltip';


const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-image: url(${hipSquare});
  background-repeat: repeat;
  color: ${({ theme }) => theme.textColor.primary};
  transition: all .2s;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;

  ${sizes.laptopS} {
    justify-content: space-between;
  }
`

const NavRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  display: flex;  
  position: relative; 
  margin: ${({ theme }) => theme.margin.default};

  ${sizes.laptopS} {
    display: none;
  }
`

const ListItem = styled.li`
  list-style: none;
  margin:  ${({ theme }) => theme.margin.default}; 
  position: relative;
  font-weight: 500;
  font-size: ${({ theme }) => theme.textSize.default};
  z-index: 10;
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  &::after {
    content: "";
    display: flex;
    background-color: ${({ theme }) => theme.textColor.primary};
    width: 100%;
    height: 1px;
    position: absolute;
    top: 110%;
    transform: scale(0);
    z-index: 1;
    transition: all .1s;
  }

  &:hover {
    cursor: pointer;
    &::after {
      transform: scale(1);
    }
  }
`

function Navbar() {
  const [shopsVisible, setShopsVisible] = useState(false);

  return (
    <Nav>
      <MobileNav />
      <Logo />
      <List>
        <ListItem><Link to="/for-him">For Him</Link></ListItem>
        <ListItem><Link to="/for-her">For Her</Link></ListItem>
        <ListItem><Link to="/for-home">For Home</Link></ListItem>
        <ListItem><Link to="/toys">Toys</Link></ListItem>
        <ListItem
          onMouseEnter={() => setShopsVisible(true)}
          onMouseLeave={() => setShopsVisible(false)}>
          Shops
          </ListItem>
        <ListItem><Link to="/contact">Contact</Link></ListItem>
        <ListItem><Link to="/about">About</Link></ListItem>
      </List>
      <NavRight>
        <Link to="/auth/login"><Login /></Link>
        <Basket />
      </NavRight>
      <NavbarShops
        shopsVisible={shopsVisible}
        setShopsVisible={setShopsVisible}
      />
    </Nav>
  )
}

export default Navbar
