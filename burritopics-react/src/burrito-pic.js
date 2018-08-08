import React, { Component } from 'react';

class BurritoPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

    render() {
        return (
          <div className="BurritoImage">
              <img src={this.props.file} alt={this.props.name} />
              <p className="BurritoTitle">{this.props.name}</p>
          </div>
        );
    }
}

export default BurritoPic;