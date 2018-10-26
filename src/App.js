import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReadingCard from './components/readingCard';
import ImageCard from './components/imageCard';
import QuestionCard from './components/questionCard';
import img from './components/Group 40.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/" exact render={props => <ReadingCard alphabet previous={"/alphabet"} next={"/paragraph"}   text={"A  B  J  S  P  Z  E  P  E   M  L  K  W\nR  L  C  Q  W  C  A  Q  S  D   F  P  I\nX  D  N  V  N  E  A  P  J   S  W  S  O\nN  U  B  S  P  A  B  V  E   V  L   U  W \nS  L  O  Q  D C  A  A  S  D   F  P  I"}/> }/>
        <Route path="/alphabet" render={props => <ReadingCard alphabet previous={"/alphabet"} next={"/paragraph"} text={"A  B  J  S  P  Z  E  P  E   M  L  K  W\nR  L  C  Q  W  C  A  Q  S  D   F  P  I\nX  D  N  V  N  E  A  P  J   S  W  S  O\nN  U  B  S  P  A  B  V  E   V  L   U  W \nS  L  O  Q  D C  A  A  S  D   F  P  I"}/> }/>
        <Route path="/paragraph" render={props => <ReadingCard previous={"/alphabet"} next={"/question-time"} text={"It would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language."}/> }/>
        <Route path="/question-time" render={props => <ImageCard text={"Question Time!"} img={img} previous={"/paragraph"} next={"/question"} /> }/>
        <Route path="/question" render={props => <QuestionCard question={"More common words. If several languages coalesce?  "} number={'1'}  previous={"/question-time"} next={"/question"} /> }/>
        </div>
      </Router>
      
    );
  }
}

export default App;
