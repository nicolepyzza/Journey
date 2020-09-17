import React from 'react';
import './index.css';

const collectStops = [];

export default class Question7 extends React.Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    pushArray = (value) => {
        collectStops.push(value);
        console.log(collectStops);
        this.props.stopsArray(collectStops);
    }

    render() {
        // const { values } = this.props;
        return (
            <div className="row home-pg-2" id="q7">
                <form className="col-sm-12 header bg-q">
                    <h3>What types of places do you want to stop at?</h3>
                    <div className="leftalign">
                        <input id="shopping_mall" name="shopping_mall" value="shopping_mall" type="checkbox" onChange={() => this.pushArray('National Parks')} />
                        <label htmlFor="shopping_mall">Malls</label>
                        <br />
                        <input id="restaurant" name="restaurant" value="restaurant" type="checkbox" onChange={() => this.pushArray('Restaurants')} />
                        <label htmlFor="restaurant">Restaurants and bars</label>
                        <br />
                        <input id="museum" name="museum" value="museum" type="checkbox" onChange={() => this.pushArray('Museums')} />
                        <label htmlFor="museum">Museums and art exhibits</label>
                        <br />
                        <input id="cafe" name="cafe" value="cafe" type="checkbox" onChange={() => this.pushArray('Coffee')} />
                        <label htmlFor="cafe">Best coffee</label>
                        <br />
                        <input id="park" name="park" value="park" type="checkbox" onChange={() => this.pushArray('Beaches and parks')} />
                        <label htmlFor="park">Beaches and parks</label>
                        <br />
                    </div>
                </form>
                <button className="next" onClick={this.nextQuestion}><i className="fas fa-angle-right fa-2x"></i></button>
                <button className="back" onClick={this.back}><i className="fas fa-angle-left fa-2x"></i></button>
            </div>
        );
    }
}