import React, { useState } from "react";
import './imageAnimation.css';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  loaded: {
    animation: 'fadeInImg cubic-bezier(0.23, 1, 0.32, 1) 1',
    position: 'relative',
    opacity: 0,
    animationFillMode: 'forwards',
    animationDuration: '.2s',
    animationDelay: '0.1s',
  },
  loading: {
    opacity: 0,
    width: '100%',
    height: 'auto',
  }
}

function ImageLoader({ classes, src }) {
  const [loaded, setLoaded] = useState(false);
  let [className] = useState('');

  const onLoad = () => {
    setLoaded(true);
  };

  className = `${className} ${loaded ? classes.loaded : classes.loading}`

  return <img
    style={{ width: '100%' }}
    src={src}
    className={className}
    onLoad={onLoad}
    alt="lazy" />;
}

export default withStyles(styles)(ImageLoader);