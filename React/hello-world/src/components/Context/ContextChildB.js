import {Component} from 'react';
import ContextChildC from './ContextChildC';
import ContextB from './ContextB';

class ContextChildB extends Component {
    render() {
        return (
            <div>
                Context Child B
                <p>c : {this.context.c}</p>
                <p>d : {this.context.d}</p>
                <ContextChildC />
            </div>
        );
    }
}

ContextChildB.contextType = ContextB;
export default ContextChildB;