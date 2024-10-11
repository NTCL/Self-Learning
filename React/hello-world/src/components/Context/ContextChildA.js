import {Component} from 'react';
import ContextChildB from './ContextChildB';
import ContextA from './ContextA';

class ContextChildA extends Component {
    static contextType = ContextA;
    render() {
        return (
            <div>
                Context Child A
                <p>a : {this.context.a}</p>
                <p>a : {this.context.b}</p>
                <ContextChildB />
            </div>
        );
    }
}
export default ContextChildA;