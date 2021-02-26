import './Body.css';
import React from 'react'
import { PropTypes } from "prop-types";
import Product from './Products';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProducts: false,
    };
  }

  makeProductsVisible() {
    this.setState({ showProducts: true });
  }

  render() {
    const { cover, title, description, products } = this.props;
    const { showProducts } = this.state;

    return <main className="Body">
      <img src={cover} alt='cover' />
      <h1>{title}</h1>
      <h2>{description}</h2>
      <div className="productsContainer">
      <button onClick={() => this.makeProductsVisible()}>Show products</button>
        <Product products={products} />
      </div>
    </main>
  }
}

Body.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  products: PropTypes.object.isRequired,
};

export default Body