import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import PicsPage from './pics-page.js';
import Construction from './construction.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someKey: 'someVal'
    };
  }

  renderMainArea(dest) {
    return ReactDOM.render(dest, document.getElementById('mainArea'));
  }

  render() {
    return (
      <div className="app-main">
        <header className="header">
        <div className="title">
            <h1>
                <img src="images/arrowed.gif" alt="" />
                BurritoPics.Com!!1
                <img src="images/arrowed1.gif" alt="" />
            </h1>
            <div className="EmberTitle">
                <img src="images/now-in-ember.png" alt="Now In .net core!!1" />
            </div>
            <h4>
              <button onClick={() => this.renderMainArea(<PicsPage />)}>Pics</button> | 
              <button onClick={() => this.renderMainArea(<Construction />)}>History</button> | 
              <button onClick={() => this.renderMainArea(<Construction />)}>Order Burrito (Pic)</button> | 
              <button onClick={() => this.renderMainArea(<Construction />)}>Register</button> | 
              <button onClick={() => this.renderMainArea(<Construction />)}>Submit Pic</button> | 
              <button onClick={() => this.renderMainArea(<Construction />)}>About Us</button> | 
              <button onClick={() => this.renderMainArea(<Construction />)}>Contact Us</button>
            </h4>
            <img src="images/divider_pulse.gif" alt="" />
        </div>
    </header>
    <div className="clear"></div>
    <div className="container body-content" id="mainArea"></div>
    <div className="clear"></div>
    <footer className="footer">
        <img src="images/dividerblue.gif" alt="" />
        <br />
        <br />
        <img src="images/counter-design.gif" title="Efficient stats" alt="Efficient stats" border="0" />
        <br />
        <audio controls="false" autoPlay="true" loop="true">
            <source src="sound/mexican-hat-dance.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </footer>
  </div>
    );
  }
}

export default App;
