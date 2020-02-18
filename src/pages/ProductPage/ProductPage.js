import React from 'react'

function ProductPage(props) {
  let product = props.products.find(product => product.id === props.match.params.id);

  return (
    <div>
      HELLO FROM PRODUCT PAGE {props.match.params.id}
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductPage
