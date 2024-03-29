import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import productActions from '../redux/actions/product.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import image from '../styles/images/h.jpg'
import '../styles/css/productCard.css'



class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 12
        }
        this.props.productActions()
    }
    handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };
    mapProducts(products) {
        const elements = products;
        const { currentPage, productsPerPage } = this.state;

        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProduct = elements.slice(
            indexOfFirstProduct,
            indexOfLastProduct,
        );
        const productElements = currentProduct.map(item => (
            <div className='card' key={item.id}>
                <img className='product-image' src={image} alt={item.name} />
                <div className='product-details'>
                    <p>{item.name}</p>
                    <span className='product-description'>{item.description.substring(0, 100)}...</span>
                    <p className='action'><span className='price-strike'>{item.price * 2}</span><span className='current-price'>${item.price}</span><span>
                        <button className='cart-btn'><FontAwesomeIcon icon={faCartPlus} /></button></span></p>
                </div>
            </div>
        ))
        return productElements;
    }
    render() {
        const { products } = this.props.products;
        if (products !== undefined) {

            const pageNumbers = [];
            for (
                let i = 1;
                i <= Math.ceil(products.length / this.state.productsPerPage);
                i += 1
            ) {
                pageNumbers.push(i);
            }

            const renderPageNumbers = pageNumbers.map(number => {
                return (
                    <a
                        key={number}
                        id={number}
                        href="javascript:;"
                        onClick={this.handleClick}
                    >
                        {number}
                    </a>
                );
            });



            return (
                <Fragment>
                    <div className='cardholder'>
                        {this.mapProducts(products)}
                    </div>
                    <div className="paginate-section">
                        <div className="center">
                            <div className="pagination">{renderPageNumbers}</div>
                        </div>
                    </div>
                </Fragment>
            );
        }
        return (
            <div></div>
        )
    }
} const mapStateToProps = state => ({
    products: state.products
})
export default connect(
    mapStateToProps,
    { productActions }
)(ProductPage);
