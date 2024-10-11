import {useState} from 'react';
import Child from './Child';

const Parent = () => {
    const [stateA, setStateA] = useState(0);
    const [stateB, setStateB] = useState(0);

    console.log('Parent Render ' + stateA + ' ' + stateB);

    return (
        <div>
            <button onClick={() => setStateA(s => s + 1)}>State A - {stateA}</button>
            <button onClick={() => setStateB(s => s + 1)}>State B - {stateB}</button>
            <Child stateA={stateA}/>
        </div>
    );

};

export default Parent;