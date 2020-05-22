import React from 'react';

// function Greet() {
//     return <h1> Hello Dulani</h1>
// }

const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name} Age {props.age} </h1>
            {props.children}
        </div>
    )
}


export default Greet

