import {useState} from 'react';
import UseEffect from './UseEffect';
function UseEffectContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <UseEffect />}
        </>
    )
}

export default UseEffectContainer;