import {Component} from 'react';
import Child from './Child';

class Parent extends Component {
    constructor() {
        super();
        this.state = {
            a : 1
        };
    }

    handler = input => alert(`a is ${this.state.a} and input is ${input}`);


    render () {
        return (
            <div>
                <Child handler={this.handler}/>
            </div>
        );
    }
}

export default Parent;