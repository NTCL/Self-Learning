import {Component} from 'react';

class RenderPropsChild2 extends Component {
    render () {
        const {count, incrementCount} = this.props;
        return <h1 onMouseOver={incrementCount}>Hover {count} times</h1>;
    }
};

export default RenderPropsChild2;