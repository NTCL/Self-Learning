import {Component} from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        console.log('LIFE CYCLE A constructor');
        console.log(props);
        super(props);

        this.state = {
            sa : 2
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LIFE CYCLE A getDerivedStateFromProps');
        console.log(props);
        console.log(state);

        return null;
    }

    componentDidMount() {
        console.log('LIFE CYCLE A componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LIFE CYCLE A shouldComponentUpdate');
        console.log(this.props);
        console.log(this.state);
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LIFE CYCLE A getSnapshotBeforeUpdate');
        console.log(this.props);
        console.log(this.state);
        console.log(prevProps);
        console.log(prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LIFE CYCLE A componentDidUpdate');
        console.log(this.props);
        console.log(this.state);
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }

    changeState = () => {
        this.setState({
            sa : this.state.sa * 10,
        });
    }

    render () {
        console.log('LIFE CYCLE A RENDER');
        return (
            <div>
                <h1>Lifecycle A</h1>
                <button onClick={this.changeState}>Change A state</button>
                <LifecycleB pb={this.state.sa} />
            </div>
        );
    }
}

export default LifecycleA;