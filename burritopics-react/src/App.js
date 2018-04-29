import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PicsPage from './PicsPage.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      currPage: 'index'
    };
  }

  picsGo() {
    return new PicsPage().render(document.getElementById('app-root'));
  }

  render() {
    return (
      <div className="app-main">
        <header className="header">
        <div className="title">
            <h1>
                <img src="~/images/arrowed.gif" />
                BurritoPics.Com!!1
                <img src="~/images/arrowed1.gif" />
            </h1>
            <div className="EmberTitle">
                <img src="~/images/now-in-dotnetcore.png" alt="Now In .net core!!1" />
            </div>
            <h4>
              <a href="#" onClick={this.picsGo}>Pics</a> | 
              <a href="#" onClick={this.picsGo}>History</a> | 
              <a href="#" onClick={this.picsGo}>Order Burrito (Pic)</a> | 
              <a href="#" onClick={this.picsGo}>Register</a> | 
              <a href="#" onClick={this.picsGo}>Submit Pic</a> | 
              <a href="#" onClick={this.picsGo}>About Us</a> | 
              <a href="#" onClick={this.picsGo}>Contact Us</a>
            </h4>
            <img src="~/images/divider_pulse.gif" />
        </div>
    </header>
    <div className="clear">
    </div>
    <div className="container body-content" id="app-root">
        {this.picsGo}
    </div>
    <div className="clear">
    </div>
    <footer className="footer">
        <img src="~/images/dividerblue.gif" />
        <br />
        <br />
        <img src="~/images/counter-design.gif" title="Efficient stats" alt="Efficient stats" border="0" />
        <br />
        <audio controls="" autoplay="" loop="">
            <source src="~/sound/mexican-hat-dance.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </footer>
  </div>
    );
  }
}

export default App;
