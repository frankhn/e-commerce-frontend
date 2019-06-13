import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/css/navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="topnav" id="myTopnav">
                <Link to="/" id='brand'>SHOPMATE</Link>
                <div className='menu'>
                <div className='search-field'>
                 <form className='search_form'>
                    <input className='search' type='text' placeholder='search shop mate'/>
                    <button className='search-btn' type='submit' value='search'>
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                </div>
                    <li><a href="#contact">Men</a></li>
                    <li><a href="#contact">Women</a></li>
                    <li><a href="#contact">Kids</a></li>
                    <li><a href="#contact">Shoes</a></li>
                    <li><a href="#contact">Brands</a></li>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default NavBar;