import {useContext} from 'react';
import ContextA from './ContextA';
import ContextB from './ContextB';

const ComponentC = () => {

    const contextA = useContext(ContextA);
    const contextB = useContext(ContextB);

    return (
        <>
            <div>Component C</div>
            <div>a : {contextA.a}</div>
            <div>b : {contextA.b}</div>
            <div>c : {contextB.c}</div>
            <div>d : {contextB.d}</div>
        </>
    );
};

export default ComponentC;