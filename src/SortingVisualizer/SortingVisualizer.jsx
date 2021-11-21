import React from 'react';


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array:[]
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 100/*NUMBER_OF_ARRAY_BARS*/; i++) {
          array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (
            <div className='array-container'>
            {array.map((value, idx) => (
                <div className="array-bar" key={idx}>
                      {value}
                  </div>
              ))}
            </div>
        );
    }
}


function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}