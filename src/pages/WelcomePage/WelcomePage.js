import React from 'react';
import { Link } from 'react-router-dom';

import LazyLoad from 'react-lazy-load';

import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import BigDescription from '../../components/BigDescription';

import hipSquare from '../../assets/images/hip-square.png';
import dotGrid from '../../assets/images/dot-grid.png';

import Product from '../../components/Product';
import ProductsHeader from '../../components/ProductsHeader';

const Container = styled.div`
  background-image: url(${hipSquare});
  width: 100%; 
  a {
    color: inherit;
  } 
`

const HeaderProductContainer = styled.div`
  border-radius: 0;
  position: relative;
  overflow: hidden;
`

const NewestProducts = styled.div`
  background-image: url(${dotGrid});
  margin-top: ${({ theme }) => theme.margin.medium};
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "0 1rem",
    margin: '0',
  },
}));

function WelcomePage({ products }) {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <HeaderProductContainer>
              <LazyLoad
                debounce={false}
                offsetVertical={500}
              >
                <Image src="https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="my-img" />
              </LazyLoad>
              <BigDescription
                header="Awesome toys"
                description="For small and big"
                top="10%"
                setBackground
              />
            </HeaderProductContainer>
          </Grid>
          <Grid item xs={12} sm={4}>
            <HeaderProductContainer>
              <LazyLoad
                debounce={false}
                offsetVertical={500}
              >
                <Image src="https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg?cs=srgb&dl=rectangular-white-and-black-wooden-display-rack-beside-green-2826787.jpg&fm=jpg" alt="my-img" />
              </LazyLoad>
              <BigDescription
                right="150px"
                top="30%"
                header="Decorations"
                description="Uniqe detailing for Your home"
                setBackground
              />
            </HeaderProductContainer>
          </Grid>
        </Grid>
      </div>
      <NewestProducts>
        <ProductsHeader>Newest Products</ProductsHeader>
        <Grid container spacing={3}>
          {
            products.map(product => (
              <Grid key={product.id} item xs={12} sm={4}>
                <Link to={`/product/${product.id}`}>
                  <Product
                    name={product.name}
                    price={product.price}
                    image={product.images[0]} />
                </Link>
              </Grid>
            ))
          }
        </Grid>
      </NewestProducts>
    </Container >
  )
}

export default WelcomePage;