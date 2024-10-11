import {Component} from 'react';
import PC from './PureComp';
import RC from './RegComp';
import MC from './MemoComp';

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a : 1,
            o : {
                b : 2,
                c : 3
            }
        };
    }

    componentDidMount() {
        setInterval(() => {
            // same references => no pure component re-render
            // this.setState({
            //     a : this.state.a,
            //     o : this.state.o
            // });

            // same references => no pure component re-render
            this.state.o.b ++;
            this.setState({
                a : this.state.a,
                o : this.state.o
            });

            // different value => re-render pure component
            // this.setState({
            //     a : this.state.a + 1,
            //     o : this.state.o
            // });

            // different references => re-render pure component
            // this.setState({
            //     a : this.state.a,
            //     o : {
            //         b : 2,
            //         c : 3
            //     }
            // });

        }, 5000);
    }
    render () {
        console.log('PARENT COMP RENDER');
        return (
            <div>
                <h1>Parent Component</h1>
                <h2>a : {this.state.a}</h2>
                <h2>b : {this.state.o.b}</h2>
                <h2>c : {this.state.o.c}</h2>
                <PC a={this.state.a} o={this.state.o}/>
                <RC a={this.state.a} o={this.state.o}/>
                <MC a={this.state.a} o={this.state.o}/>
            </div>
        );
    }
}

export default ParentComp;