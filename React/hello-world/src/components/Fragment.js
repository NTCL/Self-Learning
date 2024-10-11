import React from 'react';

const Fragment = () => {
    const elements = [
        {
            id : 1,
            name : 'a'
        },
        {
            id : 2,
            name : 'b'
        },
        {
            id : 3,
            name : 'c'
        }
    ];
    const list = elements.map(element => 
        <React.Fragment key={element.id}>
            <p>{element.id}</p>
            <p>{element.name}</p>
        </React.Fragment>
    );
    return (
        <>
            <>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
            </>
            <>
                {list}
            </>
        </>
    );
};

export default Fragment;