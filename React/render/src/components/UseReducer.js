import {useReducer} from 'react';

const initialState = 0;
const reducer = (currentState, action) => {
    switch(action) {
        case 'increment' : return currentState + 1;
        case 'decrement' : return currentState - 1;
        case 'reset' : return initialState;
        default : return currentState;
    }
};
const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    console.log('UseReducer Render ' + count);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );

};

export default UseReducer;