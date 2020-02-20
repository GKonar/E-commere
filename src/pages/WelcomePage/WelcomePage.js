import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import BigDescription from '../../components/BigDescription';

import handcraftedImage from '../../assets/images/handcrafted.jpeg';

import Product from '../../components/Product';

const Container = styled.div`
  background-position: center;
  background-size: cover;
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
  background-color: ${({ theme }) => theme.color.secondary};
  margin-top: ${({ theme }) => theme.margin.medium};
  overflow: hidden;
`

const ProductsHeader = styled.h1`
  text-align: center; 
  color: ${({ theme }) => theme.textColor.primary};
  margin-bottom: 0;
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
              <Image src="https://images.unsplash.com/photo-1581388223946-3015f5ecab0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="my-img" />
              <BigDescription
                header="Awesome toys"
                description="For small and big"
                top="10%"
              />
            </HeaderProductContainer>
          </Grid>
          <Grid item xs={12} sm={4}>
            <HeaderProductContainer>
              <Image src="https://images.unsplash.com/photo-1550171839-27415be90690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="my-img" />
              <BigDescription
                right="150px"
                top="45%"
                header="Rusty style"
                description="Rusty charm for Your garden"
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
                    image={product.image} />
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