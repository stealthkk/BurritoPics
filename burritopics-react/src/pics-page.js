import React, { Component } from 'react';
import BurritoPic from './burrito-pic.js'

class PicsPage extends Component {
    render() {
        return (
        <section id="burritoList" className="BurritoPics1 align-center">
            <h3>
                We got pics of burritos!!
            </h3>
            <p>Pics are now clickable!!1</p>
            <div className="row">
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito1.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito2.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito3.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito4.jpeg" name="A burrito!!1" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito5.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito6.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito7.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito8.jpeg" name="A burrito!!1" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito9.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito10.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito11.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito12.jpeg" name="A burrito!!1" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito13.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito14.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito15.jpeg" name="A burrito!!1" />
                </div>
                <div className="col-md-3 col-sm-3">
                    <BurritoPic file="images/burritos/burrito16.jpeg" name="A burrito!!1" />
                </div>
            </div>
        </section>
        );
    }
}

export default PicsPage;