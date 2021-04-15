
import React, { useState } from 'react';
import Cube from './cubes/cube';
import './calculator.css';

const Calculator = props => {
    const [exp,setExp] = useState('');
    const [status, setStatus] = useState(false);

    const clearExp = () => {
        setExp('');
        setStatus(false);
    }

    const addToExpression = (el) => {
        if(status === true){
            console.log('gi');
            setExp('');
            setStatus(false);
            return;
        }
        if(el === '+' || el === '-' || el === 'x' || el === '/')
            setExp(exp + ' ' + el + ' ');
        else
            setExp(exp + el);
    }

    const calculate = (n1, n2, exp) => {
        switch(exp){
            case '+':
                return n1 + n2;
            case '-':
                return n1 - n2;
            case 'x':
                return n1 * n2;
            case '/':
                return n1 / n2;
            default:
                return;
        }
    }

    const calculateExp = (el) => {
        const my_list = exp.split(' ');
        if(my_list.length < 3) return;
        let result = 0;
        let numbers = [];
        let exps = [];
        
        for (const item of my_list){
            if(item === '+' || item === '-' || item === 'x' || item === '/'){
                exps.push(item);
            }else if(item.includes('.')){
                numbers.push(parseFloat(item));
            }else {
                numbers.push(parseInt(item));
            }
        }
        console.log(numbers);
        console.log(exps);
        
        if(numbers.length-1 !== exps.length) return;
        let n1 = numbers.shift();
        console.log(n1);
        let n2 = numbers.shift();
        console.log(n2);
        let ex = exps.shift();
        console.log(ex);
        result = calculate(n1,n2,ex);
        console.log(result);
        console.log(numbers);
        while(numbers.length > 0){
            ex = exps.shift();
            n1 = numbers.shift();
            result = calculate(result, n1, ex);
        }
        setExp(result.toString());
        setStatus(true);
    }

    return <div className="body">
    <h1>Calculator</h1>
        <div className="calculator">
            <div className="previewer">{exp}</div>
            <Cube add={addToExpression} name="7"/><Cube add={addToExpression} name="8"/><Cube add={addToExpression} name="9"/><Cube add={addToExpression} name="/" type="right"/>
            <Cube add={addToExpression} name="4"/><Cube add={addToExpression} name="5"/><Cube add={addToExpression} name="6"/><Cube add={addToExpression} name="x" type="right"/>
            <Cube add={addToExpression} name="1"/><Cube add={addToExpression} name="2"/><Cube add={addToExpression} name="3"/><Cube add={addToExpression} name="+" type="right"/>
            <Cube add={addToExpression} name="."/><Cube add={addToExpression} name="0"/><Cube add={calculateExp} name="="/><Cube add={addToExpression} name="-" type="right"/>
            <div className="clear" onClick={clearExp}>Clear</div>
        </div>
    </div>
}

export default Calculator;
