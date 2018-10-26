import React from 'react';
import './styles.css';
import Navigation from './navigation';
const ReadingCard = (props) => {
    return ( 
        <div className="card-container">
            <Navigation previous={props.previous} next={props.next}/>
            <div  className={props.alphabet?"alphabet":"card"} >
            {props.alphabet?props.text.split('  ').join('\xa0\xa0'):props.text}
            </div>
        </div>
        
     );
}
 
export default ReadingCard;