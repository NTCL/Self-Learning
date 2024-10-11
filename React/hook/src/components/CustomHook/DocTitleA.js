import {useState} from 'react';
import useDocTitle from '../../hooks/useDocTitle';

const DocTitleA = () => { 
    const [count, setCount] = useState(0);
    useDocTitle(count); 

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
};

export default DocTitleA;