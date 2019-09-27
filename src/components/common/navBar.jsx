import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import categoriesActions from '../../redux/actions/categories.action'
import '../../styles/css/navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.props.categoriesActions()
        this.state = {}
    }
    mapCategories(categories) {
                const categoryArray = categories.map(category => (
                <li><a href="#contact">{category.name}</a></li>
            ))
            return categoryArray
    }
    render() {
        const { categories } = this.props
        let categoriesArray
        console.log(categories);
        if (categories !== undefined) {
           categoriesArray = categories
        }
        return (
            <div className="topnav" id="myTopnav">
                <Link to="/" id='brand'>SHOPMATE</Link>
                <div className='menu'>
                    <div className='search-field'>
                        <form className='search_form'>
                            <input className='search' type='text' placeholder='search shop mate' />
                            <button className='search-btn' type='submit' value='search'>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>
                    {categoriesArray.length >0 ? this.mapCategories(categoriesArray): ''}
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    categories: state.categories
})

export default connect(
    mapStateToProps, { categoriesActions })(NavBar);