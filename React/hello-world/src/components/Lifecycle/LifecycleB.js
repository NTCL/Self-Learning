import {Component} from 'react';

class LifecycleB extends Component {
    constructor(props) {
        console.log('LIFE CYCLE B constructor');
        console.log(props);
        super(props);

        this.state = {
            sb : 4
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LIFE CYCLE B getDerivedStateFromProps');
        console.log(props);
        console.log(state);

        return null;
    }

    componentDidMount() {
        console.log('LIFE CYCLE B componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LIFE CYCLE B shouldComponentUpdate');
        console.log(this.props);
        console.log(this.state);
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LIFE CYCLE B getSnapshotBeforeUpdate');
        console.log(this.props);
        console.log(this.state);
        console.log(prevProps);
        console.log(prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LIFE CYCLE B componentDidUpdate');
        console.log(this.props);
        console.log(this.state);
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }

    changeState = () => {
        this.setState({
            sb : this.state.sb + 10,
        });
    }

    render () {
        console.log('LIFE CYCLE B RENDER');
        return (
            <div>
                <h1>Lifecycle B</h1>
                <button onClick={this.changeState}>Change B state</button>
            </div>
        );
    }
}

export default LifecycleB;