import {Component} from 'react';

class RenderPropsChild1 extends Component {
    render () {
        const {count, incrementCount} = this.props;
        return <button onClick={incrementCount}>Clicked {count} times</button>;
    }
};

export default RenderPropsChild1;