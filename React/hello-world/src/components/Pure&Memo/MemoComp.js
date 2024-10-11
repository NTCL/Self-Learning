import React from 'react';

const MemoComp = () => {
    console.log('MEMO COMP RENDER');
    return (
        <div>
            <h1>Memo Component</h1>
        </div>
    );
};

export default React.memo(MemoComp);