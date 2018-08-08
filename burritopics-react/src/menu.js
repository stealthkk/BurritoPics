import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import PicsPage from './pics-page.js';
import Construction from './construction.js';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someKey: 'someVal'
    };
    //this.renderMainArea(<PicsPage />);
  }

    renderMainArea(dest) {
      return ReactDOM.render(dest, document.getElementById('mainArea'));
    }

    render() {
        return (
            <h4>
              <Button className="btn btn-danger" onClick={() => this.renderMainArea(<PicsPage />)}>Pics</Button> 
              <Button className="btn btn-danger" onClick={() => this.renderMainArea(<Construction />)}>History</Button> 
              <Button className="btn btn-danger" onClick={() => this.renderMainArea(<Construction />)}>Order Burrito (Pic)</Button> 
              <Button className="btn btn-danger" onClick={() => this.renderMainArea(<Construction />)}>Register</Button> 
              <Button className="btn btn-danger" onClick={() => this.renderMainArea(<Construction />)}>Submit Pic</Button> 
              <Button className="btn btn-danger" onClick={() => this.renderMainArea(<Construction />)}>About Us</Button> 
              <Button className="btn btn-danger" onClick={() => this.renderMainArea(<Construction />)}>Contact Us</Button>
            </h4>
        );
    }
}

export default Menu;