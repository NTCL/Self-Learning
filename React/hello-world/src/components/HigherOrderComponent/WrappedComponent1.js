import {Component} from 'react';
import higherOrderComponent from './higherOrderComponent';

class WrappedComponent1 extends Component {
    render () {
        const {count, incrementCount, a, b} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
                <p>a : {a}</p>
                <p>b : {b}</p>
            </div>
        );
    }
};

export default higherOrderComponent(WrappedComponent1, 5);