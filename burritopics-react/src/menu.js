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
              <Button className="btn btn-danger" onClick={() => this.renderMainArea(<PicsPage />)}>Pics</Button>&nbsp;
              <Button className="btn btn-secondary" onClick={() => this.renderMainArea(<Construction />)}>History</Button>&nbsp;
              <Button className="btn btn-primary" onClick={() => this.renderMainArea(<Construction />)}>Order Burrito (Pic)</Button>&nbsp;
              <Button className="btn btn-success" onClick={() => this.renderMainArea(<Construction />)}>Register</Button>&nbsp;
              <Button className="btn btn-warning" onClick={() => this.renderMainArea(<Construction />)}>Submit Pic</Button>&nbsp;
              <Button className="btn btn-info" onClick={() => this.renderMainArea(<Construction />)}>About Us</Button>&nbsp;
              <Button className="btn btn-dark" onClick={() => this.renderMainArea(<Construction />)}>Contact Us</Button>
            </h4>
        );
    }
}

export default Menu;
