import React, {useState} from 'react';
import {MemoizedChildA} from './Child';

export const Context = React.createContext();
const Provider = Context.Provider;

const Parent = ({children}) => {
    const [count, setCount] = useState(0);

    console.log('ContextParent Render ' + count);

    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <Provider value={count}>
                <MemoizedChildA />
            </Provider>
            <Provider value={count}>
                {children}
            </Provider>
        </>
    );

};

export default Parent;