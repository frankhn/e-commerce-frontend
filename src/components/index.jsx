/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import NavBar from './common/navBar';
import '../styles/css/index.css'
import image from '../styles/images/hey.jpg'
import ProductCard from './common/ProductCard';
import Footer from './common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
      articlePerPage: 4,
         }
    }

    handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };
    
    render() { 
        const products = [1,2,3,4,5,6,7,51,4,54,65,76,53]
         const pageNumbers = [];
      for (
        let i = 1;
        i <= Math.ceil(products.length / this.state.articlePerPage);
        i += 1
      ) {
        pageNumbers.push(i);
      }
        const renderPageNumbers = pageNumbers.map(number => {
        return (
          <a key={number} id={number} href="javascript:;" onClick={this.handleClick} >
            {number}
          </a>
        );
      });
        return (
            <Fragment >
                <NavBar />
                <div className='HomeImage'>
                    <img id='welcomeImage' src={image} alt='home' />
                </div>
                <div className='container'>
                    <p className='homeCardTitle'>
                    <FontAwesomeIcon icon={faAlignJustify} />
                    <span className='homeCardTitle'> Featured</span>
                    </p>
                    <ProductCard />
                    <div className='pagination-div'>
                    <div className="pagination">{renderPageNumbers}</div>
                    </div>
                </div>
        </Fragment>
        );
    }
}
 
export default Index;