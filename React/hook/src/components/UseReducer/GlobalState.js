import React, {useReducer} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const Context = React.createContext();

const initialState = 0;
const reducer = (currentState, action) => {
    switch(action.type) {
        case 'increment' :
            return currentState + action.value;
        case 'decrement' :
            return currentState - action.value;
        case 'reset' :
            return initialState;
        default :
            return currentState;
    }
};

const GlobalState = () => {
    const [newState, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <Context.Provider value={{state : newState, dispatch : dispatch}}>
                <div>Global State : {newState}</div>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </Context.Provider>
        </>
    );
};

export default GlobalState;