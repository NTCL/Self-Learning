import React, {useContext} from 'react';
import {Context} from './GlobalState';

const ComponentF = () => {
    const {state, dispatch} = useContext(Context);
    return (
        <>
            <div>Component F : {state}</div>
            <button onClick={() => dispatch({type : 'increment', value : 2})}>
                Increment 2
            </button>
            <button onClick={() => dispatch({type : 'decrement', value : 2})}>
                Decrement 2
            </button>
            <button onClick={() => dispatch({type : 'increment', value : 5})}>
                Increment 5
            </button>
            <button onClick={() => dispatch({type : 'increment', value : 5})}>
                Decrement 5
            </button>
            <div>
                <button onClick={() => dispatch({type : 'reset'})}>
                    Reset
                </button>
            </div>
        </>
    );
};

export default ComponentF;