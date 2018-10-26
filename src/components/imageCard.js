import React from 'react';
import './styles.css';
import Navigation from './navigation';
const ImageCard = (props) => {
    return ( 
        <div className="card-container">
        <Navigation previous={props.previous}  next={props.next} />
        <div>{props.text}</div>
        <img className="card-image" src={props.img}/>
        
        </div>
     );
}
 
export default ImageCard;