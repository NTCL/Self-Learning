import React, {useContext} from 'react';
import {Context} from './Parent.js';

const ChildA = () => {
    console.log('ContextChild A Render');
    return (
        <>
            <div>
                Child A
            </div>
            <ChildB />
        </>
    );

};

export const MemoizedChildA = React.memo(ChildA);

const ChildB = () => {
    const context = useContext(Context);
    console.log('ContextChild B Render');
    return (
        <>
            <div>
                Child B : {context}
            </div>
            <ChildC />
        </>
    );

};

const ChildC = () => {
    console.log('ContextChild C Render');
    return (
        <div>
            Child C
        </div>
    );

};

export default ChildA;