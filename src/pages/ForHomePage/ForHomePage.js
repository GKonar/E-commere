import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import Product from '../../components/Product';
import ProductsHeader from '../../components/ProductsHeader';
import PageContainer from '../../components/PageContainer';

import { fetchPageItems } from '../../store/actions/actions'

function ForHomePage({ products, onFetchPageItems }) {

  useEffect(() => {
    onFetchPageItems('forHome');
    // eslint-disable-next-line
  }, [])

  return (
    <PageContainer>
      <ProductsHeader>For Home</ProductsHeader>
      <Grid container spacing={4}>
        {
          products.map(product => (
            <Grid key={product.id} item xs={12} md={12} lg={4}>
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
    </PageContainer>
  )
}

const mapStateToProps = state => {
  return {
    products: state.forHome
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchPageItems: (page) => dispatch(fetchPageItems(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForHomePage);

