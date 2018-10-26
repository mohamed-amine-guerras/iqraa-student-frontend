import React from 'react';
import Navigation from './navigation';
import './styles.css'

const QuestionCard = (props) => {
    return ( 
        <div className="card-container" >
            <Navigation previous={props.previous} next={props.next}/>
            <div className="card">
                <span className="number">{props.number}.</span> <span>{props.question}</span>
                <div className="buttons-container">
                    <button className="button"><i className="fa fa-minus"></i> NO ANWSER</button>
                    <button className="button"><i className="fa fa-thumbs-down"></i> FALSE</button>
                    <button className="button"><i className="fa fa-thumbs-up"></i> CORRECT</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default QuestionCard;