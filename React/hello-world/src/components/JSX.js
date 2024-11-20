import React from 'react';

/*
return (
    <div id="div id" class="div class">
        <h1>JSX</h1>
    </div>
);
*/

const JSX = () => React.createElement(
    'div', 
    {
        id : 'div id',
        className : 'div class'
    },
    React.createElement(
        'h1',
        null, 
        'JSX'
    )
);
export default JSX;