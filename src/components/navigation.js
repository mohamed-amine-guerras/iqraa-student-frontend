import React from 'react';
import {Link} from 'react-router-dom';
import leftArrow from './left-arrow.png';
import rightArrow from './right-arrow.png';
const Navigation = (props) => {
    return ( 
        <div className="arrows-container">
                <Link to={props.previous}><img className="left-arrow-link" src={leftArrow}/></Link>
                <span></span>
                <Link to={props.next}><img className="right-arrow-link" src={rightArrow}/></Link>
        </div>
     );
}
 
export default Navigation;