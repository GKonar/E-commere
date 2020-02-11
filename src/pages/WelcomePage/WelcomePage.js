import React from 'react';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Navbar from '../../components/Navbar';
import handcraftedImage from '../../assets/images/handcrafted.jpeg';


// import styled from 'styled-components';
// import img from './img/bg.gif';

// const Content = styled.div`
//     border: 1px solid #000;
//     background-image: ;
//     width: 2000px;
//     height: 2000px;

const Container = styled.div`
  /* margin: ${({ theme }) => theme.padding.medium}; */
  background-image: url(${handcraftedImage});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
`

function WelcomePage() {
  return (
    <Container>
      <Navbar />

    </Container>
  )
}

export default WelcomePage;