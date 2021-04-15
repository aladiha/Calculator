
import React from 'react';
import './cube.css';


const Cube = props => {
    let backgroundColor = "gray";
    if (props.type === "right")
        backgroundColor = "orange";

    return <div onClick={() => props.add(props.name)} className="cube" style={{backgroundColor: backgroundColor}}> 
        {props.name}
    </div>
}

export default Cube;