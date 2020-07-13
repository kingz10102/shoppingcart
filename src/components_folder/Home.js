import React, {useState} from 'react';
import jordan270 from '../images/jordan270.jpg';
import lebron17 from '../images/lebron17.jpg';
import airmax90 from '../images/airmax90.jpg';
import kyrie6n7 from '../images/kyrie6n7.jpg';
import foamposite from '../images/foamposite.jpg';
// connecting redux with home component buttons
import { connect } from 'react-redux';
import { addBasket } from '../actions/addActions'

const Home = (props) => {
    console.log(props);
    return(
    <div className='wrapper'>
        <div className="image">
            <img src={jordan270} alt="jordan black sneakers" width="200" /> 
            <h3>Jordan Mars 270</h3>
            <h3>$270.00</h3>
            {/* props.addBasket adds a on click action to adding to basket from addActions file  */}
            <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
        </div>
        <div className="image">
            <img src={lebron17} alt="lebron blk/red sneakers" width="200" /> 
            <h3>Lebron 17</h3>
            <h3>$170.00</h3>
            <a onClick={props.addBasket} className="addToCart cart2" href="#">Add to Cart</a>
        </div>
        <div className="image">
        <img src={airmax90} alt="muliticolor nike sneakers" width="200" /> 
        <h3>Air Max 90</h3>
        <h3>$100.00</h3>
        <a onClick={props.addBasket} className="addToCart cart3" href="#">Add to Cart</a>
    </div>
    <div className="image">
            <img src={kyrie6n7} alt="white/orange kyrie sneakers" width="200" /> 
            <h3>"Kyrie 6 N7</h3>
            <h3>$190.00</h3>
            <a onClick={props.addBasket} className="addToCart cart4" href="#">Add to Cart</a>
        </div>
    < div className="image">
            <img src={foamposite} alt="dark blue nike sneakers" width="200" /> 
            <h3>Nike Air Foamposite Pro</h3>
            <h3>$230.00</h3>
            <a onClick={props.addBasket} className="addToCart cart4" href="#">Add to Cart</a>
        </div>
    </div>
)
}

export default connect(null, {addBasket})(Home);