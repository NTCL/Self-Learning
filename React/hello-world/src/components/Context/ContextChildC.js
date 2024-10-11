import {Component} from 'react';
import {ConsumerA} from './ContextA';
import {ConsumerB} from './ContextB';

class ContextChildC extends Component {
    render() {
        return (
            <ConsumerA>
                {objectA => (
                    <ConsumerB>
                        {objectB => (
                            <div>
                                Context Child C
                                <p>a : {objectA.a}</p>
                                <p>b : {objectA.b}</p>
                                <p>c : {objectB.c}</p>
                                <p>d : {objectB.d}</p>
                            </div>
                        )}
                    </ConsumerB>
                )}
            </ConsumerA>
        )
    }
}
export default ContextChildC;