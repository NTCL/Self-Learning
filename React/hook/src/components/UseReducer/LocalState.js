import {useReducer} from 'react';

const initialStateA = 0;
const reducerA = (currentState, action) => {
    switch(action.type) {
        case 'increment' :
            return currentState + action.value;
        case 'decrement' :
            return currentState - action.value;
        case 'reset' :
            return initialStateA;
        default :
            return currentState;
    }
};

const initialStateB = {
    countA : 0,
    countB : 0
};
const reducerB = (currentState, action) => {
    switch(action.type) {
        case 'incrementA' :
            return {
                ...currentState,
                countA : currentState.countA + action.value
            };
        case 'decrementA' :
            return {
                ...currentState,
                countA : currentState.countA - action.value
            };
        case 'incrementB' :
            return {
                ...currentState,
                countB : currentState.countB + action.value
            };
        case 'decrementB' :
            return {
                ...currentState,
                countB : currentState.countB - action.value
            };
        case 'reset' :
            return initialStateB;
        default :
            return currentState;
    }
};

function LocalState() {

    const[newStateAA, dispatchAA] = useReducer(reducerA, initialStateA);
    const[newStateAB, dispatchAB] = useReducer(reducerA, initialStateA);
    const[newStateB, dispatchB] = useReducer(reducerB, initialStateB);
    return (
        <>
            <div>State A Count A = {newStateAA}</div>
            <button onClick={() => dispatchAA({type : 'increment', value : 2})}>
                Increment 2
            </button>
            <button onClick={() => dispatchAA({type : 'decrement', value : 2})}>
                Decrement 2
            </button>
            <button onClick={() => dispatchAA({type : 'increment', value : 5})}>
                Increment 5
            </button>
            <button onClick={() => dispatchAA({type : 'increment', value : 5})}>
                Decrement 5
            </button>
            <div>
                <button onClick={() => dispatchAA({type : 'reset'})}>
                    Reset
                </button>
            </div>

            <div>State A Count B = {newStateAB}</div>
            <button onClick={() => dispatchAB({type : 'increment', value : 2})}>
                Increment 2
            </button>
            <button onClick={() => dispatchAB({type : 'decrement', value : 2})}>
                Decrement 2
            </button>
            <button onClick={() => dispatchAB({type : 'increment', value : 5})}>
                Increment 5
            </button>
            <button onClick={() => dispatchAB({type : 'increment', value : 5})}>
                Decrement 5
            </button>
            <div>
                <button onClick={() => dispatchAB({type : 'reset'})}>
                    Reset
                </button>
            </div>

            <div>State B Count A = {newStateB.countA}</div>
            <button onClick={() => dispatchB({type : 'incrementA', value : 2})}>
                Increment 2
            </button>
            <button onClick={() => dispatchB({type : 'decrementA', value : 2})}>
                Decrement 2
            </button>
            <button onClick={() => dispatchB({type : 'incrementA', value : 5})}>
                Increment 5
            </button>
            <button onClick={() => dispatchB({type : 'decrementA', value : 5})}>
                Decrement 5
            </button>

            <div>State B Count B = {newStateB.countB}</div>
            <button onClick={() => dispatchB({type : 'incrementB', value : 2})}>
                Increment 2
            </button>
            <button onClick={() => dispatchB({type : 'decrementB', value : 2})}>
                Decrement 2
            </button>
            <button onClick={() => dispatchB({type : 'incrementB', value : 5})}>
                Increment 5
            </button>
            <button onClick={() => dispatchB({type : 'decrementB', value : 5})}>
                Decrement 5
            </button>

            <div>
                <button onClick={() => dispatchB({type : 'reset'})}>Reset</button>
            </div>
        </>
    );
}
export default LocalState;