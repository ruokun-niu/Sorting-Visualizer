import React from 'react';
import './SortingVisualizer.css';
import {mergeSortoriginal} from '../sortingAlgorithms/sortingAlgorithms.js';


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
        for (let i = 0; i < 310/*NUMBER_OF_ARRAY_BARS*/; i++) {
          array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {
        const javaSciptSortedArray = this.state.array.slice().sort();
        const sortedArray = this.mergeSort(this.state.array);

    }

    
    render() {
        const {array} = this.state;
        //style = {{height: `${value}px`}}> 
        //height = number of value pixels
        return (
            <div className='array-container'>
            {array.map((value, idx) => (
                <div className="array-bar" key={idx} 
                style = {{height: `${value}px`}}> 
                  </div>
              ))}
            <button onClick={() =>this.resetArray()}> Generate New Array  </button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            </div>
        );
    }
}


function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function testEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }
}