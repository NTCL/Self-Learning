import React from 'react';

const ChildB = props => {
    const {state, children} = props;
    console.log('Render ' + children);
    return (
        <div>{children} : {state}</div>
    );
}

export default React.memo(ChildB);