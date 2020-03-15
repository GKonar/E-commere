import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Logo from './Logo';

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
        <Logo />
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
