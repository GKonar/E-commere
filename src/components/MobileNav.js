import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Icon from '../components/Icon';

import styled from 'styled-components';

import hipSquare from '../assets/images/hip-square.png';

const useStyles = makeStyles({
  list: {
    width: 250,
    height: '100%',
    backgroundImage: `url(${hipSquare})`,
    "& a": {
      textDecoration: 'none',
      color: 'inherit'
    }
  },
  fullList: {
    width: 'auto',
  },
});

const Logo = styled.span`
  font-weight: 600;
  margin-left: ${({ theme }) => theme.margin.medium};

  a {
    display:flex; 
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`

const LogoText = styled.span`
  margin-right: 2px;
  letter-spacing: 1px;
`

function MobileNav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Logo>
          <Link to='/'>
            <LogoText>hand</LogoText>
            <Icon icon={'WOOL'} color='#F59486' size={30} />
            <LogoText>crafted</LogoText>
          </Link>
        </Logo>
        <br />
        <Link to="/for-him">
          <ListItem button key={'ForHim'}>
            <ListItemText primary={'For Him'} />
          </ListItem>
        </Link>
        <Link to="/for-her">
          <ListItem button key={'ForHer'}>
            <ListItemText primary={'For Her'} />
          </ListItem>
        </Link>
        <Link to="/for-home">
          <ListItem button key={'ForHome'}>
            <ListItemText primary={'For Home'} />
          </ListItem>
        </Link>
        <Link to="/toys">
          <ListItem button key={'Toys'}>
            <ListItemText primary={'Toys'} />
          </ListItem>
        </Link>
        <Link to="/shop">
          <ListItem button key={'Shop'}>
            <ListItemText primary={'Shop'} />
          </ListItem>
        </Link>
        <Link to="/contact">
          <ListItem button key={'Contact'}>
            <ListItemText primary={'Contact'} />
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem button key={'About'}>
            <ListItemText primary={'About'} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>Nav</Button>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}

export default MobileNav;

            // <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
