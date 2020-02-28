import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import Product from '../../components/Product';
import ProductsHeader from '../../components/ProductsHeader';

// import hipSquare from '../../assets/images/hip-square.png';
import dotGrid from '../../assets/images/dot-grid.png';

const Container = styled.div`
  width: 100%; 
  height: 100%;
  a {
    color: inherit;
  } 
`
const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${dotGrid})`,
    flexGrow: 1,
    padding: "1rem 1rem",
    marginTop: '',
  },
}));


function ToysPage({ products }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <ProductsHeader>Toys</ProductsHeader>
        <Grid container spacing={4}>
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
      </Container>
    </div>
  )
}

export default ToysPage
