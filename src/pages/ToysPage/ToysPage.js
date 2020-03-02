import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import Product from '../../components/Product';
import ProductsHeader from '../../components/ProductsHeader';

import dotGrid from '../../assets/images/dot-grid.png';

import { fetchPageItems } from '../../store/actions/actions'

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


function ToysPage({ products, onFetchPageItems }) {
  const classes = useStyles();

  useEffect(() => {
    onFetchPageItems('toys');
    // eslint-disable-next-line
  }, [])

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

const mapStateToProps = state => {
  return {
    products: state.toys
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchPageItems: (page) => dispatch(fetchPageItems(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToysPage);

