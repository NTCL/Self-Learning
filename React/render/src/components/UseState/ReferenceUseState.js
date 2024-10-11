import {useState} from 'react';

const ReferenceUseState = () => {
    const [object, setObject] = useState({
        a : 1,
        b : 2
    });
    const [array, setArray] = useState([
        1,
        2
    ]);

    const changeObject = () => {
        const newObject = {...object};
        newObject.a = 3;
        newObject.b = 4;
        setObject(newObject);
    };

    const changeArray = () => {
        const newArray = [...array];
        newArray.push(array[array.length - 1] + 1);
        setArray(newArray);
    };

    console.log('ReferenceUseState Render ' + object.a + ' ' + array.length);

    return (
        <>
            <button onClick={changeObject}>Change Object</button>
            <div>a : {object.a}</div>
            <div>b : {object.b}</div>
            <button onClick={changeArray}>Change Array</button>
            {array.map(num => <div key={num}>{num}</div>)}
        </>
    );

};

export default ReferenceUseState;