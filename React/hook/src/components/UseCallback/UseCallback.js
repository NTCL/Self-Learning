import {useState, useCallback} from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';

const UseCallback = () => {
    const [stateA, setStateA] = useState(0);
    const [stateB, setStateB] = useState(0);
    const [stateC, setStateC] = useState(0);
    const [stateD, setStateD] = useState(0);

    // always use a new reference
    const incrementStateA = () => {
        setStateA(prevState => prevState + 1);
    };

        // always use a new reference
    const incrementStateB = useCallback(() => {
        setStateB(prevState => prevState + 1);
    });

        // use the cached reference if there is no change in ‘stateC’
    const incrementStateC = useCallback(() => { 
        setStateC(prevState => prevState + 1);
    }, [stateC]);

        // always use the cached reference
    const incrementStateD = useCallback(() => {
        setStateD(prevState => prevState + 1);
    }, []);

    return (
        <>
            <ChildA />
            <ChildB state={stateA}>State A</ChildB>
            <ChildC callback={incrementStateA}>Increment State A</ChildC>
            <ChildB state={stateB}>State B</ChildB>
            <ChildC callback={incrementStateB}>Increment State B</ChildC>
            <ChildB state={stateC}>State C</ChildB>
            <ChildC callback={incrementStateC}>Increment State C</ChildC>
            <ChildB state={stateD}>State D</ChildB>
            <ChildC callback={incrementStateD}>Increment State D</ChildC>
        </>
    );
};

export default UseCallback;

