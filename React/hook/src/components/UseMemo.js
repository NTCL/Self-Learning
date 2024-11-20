import {useState, useMemo} from 'react';

const UseMemo = () => {
    const [stateA, setStateA] = useState(0);
    const [stateB, setStateB] = useState(0);

    const incrementStateA = () => {
        setStateA(prevState => prevState + 1);
    };

    const incrementStateB = () => {
        setStateB(prevState => prevState + 1);
    };

    // use the cached result if there is no change in ‘stateA’
    const isEvenA = useMemo(() => {
        console.log('CALL isEvenA TO CALCULATE THE RESULT');
        let i = 0;
        while (i < 2000000000) i ++
        return stateA % 2 == 0;
    }, [stateA]);

    // always call isEvenB to calculate the result
    const isEvenB = useMemo(() => {
        console.log('CALL isEvenB TO CALCULATE THE RESULT');
        let i = 0;
        while (i < 2000000000) i ++
        return stateB % 2 == 0;
    });

    return (
        <>
            <div>
                <button onClick={incrementStateA}>State A - {stateA}</button>
                <span>{isEvenA ? ' Even' : ' Odd'}</span>
            </div>
            <div>
                <button onClick={incrementStateB}>State B - {stateB}</button>
                <span>{isEvenB ? ' Even' : ' Odd'}</span>
            </div>
        </>
    );
};

export default UseMemo;