import React, { Component } from 'react';
import './App.scss';
import Title from './title.js';
import Footer from './footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someKey: 'someVal'
    };
  }

  render() {
    return (
      <div className="app-main">
        <header className="header">
          <Title />
        </header>
        <div className="clear"></div>
        <div className="container body-content" id="mainArea"></div>
        <div className="clear"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
