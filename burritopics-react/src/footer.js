import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
        <footer className="footer">
            <img src="images/dividerblue.gif" alt="" />
            <br />
            <br />
            <img src="images/counter-design.gif" title="Efficient stats" alt="Efficient stats" border="0" />
            <br />
            <audio controls={true} autoPlay={true} loop={true}>
                <source src="sound/mexican-hat-dance.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </footer>
        );
    }
}

export default Footer;