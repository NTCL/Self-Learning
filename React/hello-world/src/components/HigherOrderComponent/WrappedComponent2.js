import {Component} from 'react';
import higherOrderComponent from './higherOrderComponent';

class WrappedComponent2 extends Component {
    render () {
        const {count, incrementCount, c, d} = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
                <p>c : {c}</p>
                <p>d : {d}</p>
            </div>
        );
    }
};

export default higherOrderComponent(WrappedComponent2, 10);