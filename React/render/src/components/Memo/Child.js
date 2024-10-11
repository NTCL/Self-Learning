import React from 'react';

const Child = () => {
    console.log('Child Render');
    return (
        <div>
            Child component
        </div>
    );

};

export default React.memo(Child);