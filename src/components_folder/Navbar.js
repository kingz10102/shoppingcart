import React from 'react';
// connecting redux with Navbar component buttons
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getActions';
import { Link } from 'react-router-dom';

function Navbar (props){
    return (
        <header>
            <div className="overlay"></div>
            <nav>
            <h2>Sneaker King</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sneakers">Sneakers</Link></li>
                <li className="shopCart"><Link to="/cart">Cart</Link></li>
            </ul>
            </nav>
        </header>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumbers})(Navbar);