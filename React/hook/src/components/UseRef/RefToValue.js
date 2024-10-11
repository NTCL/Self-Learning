import {useState, useEffect, useRef} from 'react';

const RefToValue = () => {
    const [timer, setTimer] = useState(0);

    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);
    return (
        <>
            <div>
                Timer - {timer}
            </div>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </>
    );
};

export default RefToValue;