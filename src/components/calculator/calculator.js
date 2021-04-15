
import React from 'react';
import Cube from './cubes/cube';
import './calculator.css';

const Calculator = props => {

    return <div className="calculator">
        <div className="previewer"></div>
        <Cube name="7"/><Cube name="8"/><Cube name="9"/><Cube name="/" type="right"/>
        <Cube name="4"/><Cube name="5"/><Cube name="6"/><Cube name="x" type="right"/>
        <Cube name="1"/><Cube name="2"/><Cube name="3"/><Cube name="+" type="right"/>
        <Cube name="."/><Cube name="0"/><Cube name="="/><Cube name="-" type="right"/>
        <div className="clear">Clear</div>
    </div>
}

export default Calculator;
