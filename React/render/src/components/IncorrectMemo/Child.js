import React from 'react';

const Child = ({children, name, state}) => {
    console.log('Child ' + name + ' Render');
    return (
        <div>
            {children} {state}
        </div>
    );

};

export default React.memo(Child);