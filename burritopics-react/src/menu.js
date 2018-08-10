import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Menu extends Component {

    render() {
        return (
            <h4>
              <Button className="btn btn-danger" onClick={() => this.props.changePage('PicsPage')}>Pics</Button>&nbsp;
              <Button className="btn btn-secondary" onClick={() => this.props.changePage('Construction')}>History</Button>&nbsp;
              <Button className="btn btn-primary" onClick={() => this.props.changePage('Construction')}>Order Burrito (Pic)</Button>&nbsp;
              <Button className="btn btn-success" onClick={() => this.props.changePage('Construction')}>Register</Button>&nbsp;
              <Button className="btn btn-warning" onClick={() => this.props.changePage('Construction')}>Submit Pic</Button>&nbsp;
              <Button className="btn btn-info" onClick={() => this.props.changePage('Construction')}>About Us</Button>&nbsp;
              <Button className="btn btn-dark" onClick={() => this.props.changePage('Construction')}>Contact Us</Button>
            </h4>
        );
    }
}

export default Menu;
