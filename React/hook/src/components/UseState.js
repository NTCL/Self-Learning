import {useState} from 'react';

function UseState() {
    const initialObject = {
        a : 0,
        b : 0
    };
    const [object, setObject] = useState(initialObject);
    const multipleIncrementA = () => {
        for(let i = 0; i < 5; i ++) {
            setObject(prevObject => {
                return {
                    ...prevObject,
                    a : prevObject.a + 1
                };
            });
        }
    };
    const multipleIncrementB = () => {
        for(let i = 0; i < 5; i ++) {
            setObject(prevObject => {
                return {
                    ...prevObject,
                    b : prevObject.b + 1
                };
            });
        }
    };

    const [array, setArray] = useState([]);
    const addItem = () => {
        setArray([...array, {
            id : array.length,
            value : Math.floor(Math.random() * 10) + 1
        }]);
    };

    return (
        <>
            <button onClick={() => setObject(initialObject)}>Reset</button>
            <div>
                a : {object.a}
                <button onClick={() => setObject({...object, a : object.a + 1})}>Increment</button>
                <button onClick={() => setObject({...object, a : object.a - 1})}>Decrement</button>
                <button onClick={multipleIncrementA}>Increment 5</button>
            </div>
            <div>
                b : {object.b}
                <button onClick={() => setObject({...object, b : object.b + 1})}>Increment</button>
                <button onClick={() => setObject({...object, b : object.b - 1})}>Decrement</button>
                <button onClick={multipleIncrementB}>Increment 5</button>
            </div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {array.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </>
    );
}
export default UseState;