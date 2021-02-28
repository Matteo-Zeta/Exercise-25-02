import React from 'react'
import { PropTypes } from "prop-types";

import './Product.css';

class Product extends React.Component {
  render() {
   const {products} = this.props;
   return <div className="Card">
     <img src={products.image} alt="example item"/>
     <h3>{products.title}</h3>
     <i>{products.category}</i>
     <span>{products.description}</span>
     <div className="price-container">
     <b>{products.price} €</b>
     </div>
   </div>
  }
}
Product.propTypes = {
  products: PropTypes.object.isRequired,
};

export default Product