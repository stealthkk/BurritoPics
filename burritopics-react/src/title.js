import React, { Component } from 'react';
import Menu from './menu.js';

class Title extends Component {
    render() {
        return (
        <div className="title">
            <h1>
                <img src="images/arrowed.gif" alt="" />
                BurritoPics.Com!!1
                <img src="images/arrowed1.gif" alt="" />
            </h1>
            <div className="tag-callout">
                <img src="images/now-in-react.png" alt="Now In React.Js!!1" />
            </div>
            <Menu />
            <img src="images/divider_pulse.gif" alt="" />
        </div>
        );
    }
}

export default Title;