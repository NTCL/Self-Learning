import {useState, useMemo, useCallback} from 'react';
import Child from './Child';

const Parent = () => {
    const [stateA, setStateA] = useState(0);
    const [stateB, setStateB] = useState(0);
    const [stateC, setStateC] = useState(0);

    const obj = {};
    const func = () => {};

    const memoizedObj = useMemo(() => obj, []);
    const memoizedFunc = useCallback(func, []);

    console.log('Parent Render ' + stateA + ' ' + stateB + ' ' + stateC);

    return (
        <div>
            <button onClick={() => setStateA(s => s + 1)}>State A - {stateA}</button>
            <button onClick={() => setStateB(s => s + 1)}>State B - {stateB}</button>
            <button onClick={() => setStateC(s => s + 1)}>State C - {stateC}</button>
            <Child state={stateA} name='A' />
            <Child state={stateB} name='B'>
                Child
            </Child>
            <Child state={stateC} name='C'>
                <strong>Child</strong>
            </Child>
            <Child obj={obj} name='D'/>
            <Child func={func} name='E'/>
            <Child obj={memoizedObj} name='F'/>
            <Child func={memoizedFunc} name='G'/>
        </div>
    );

};

export default Parent;