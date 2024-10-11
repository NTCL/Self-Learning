import React from 'react';

const ChildA = () => {
    console.log('Render Child A');
    return <h1>Child A</h1>;
};

export default React.memo(ChildA);
