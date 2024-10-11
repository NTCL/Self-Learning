import React from 'react';

const ChildC = props => {
    const {callback, children} = props;
    console.log('Render ' + children);
    return (
        <button onClick={callback}>
            {children}
        </button>
    );
}

export default React.memo(ChildC);