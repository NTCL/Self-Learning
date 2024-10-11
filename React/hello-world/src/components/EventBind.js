import {Component} from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a : 1
        };

        // method 3 : bind in constructor
        // this.clickHandler = this.clickHandler.bind(this);
    }
    // method 1, 2, 3
    // clickHandler() {
    //     console.log(this);
    //     this.setState(
    //         {
    //             a : this.state.a + 1
    //         }
    //     );
    // }

    // method 4 : arrow function as class property
    clickHandler = () => {
        console.log(this);
        this.setState(
            {
                a : this.state.a + 1
            }
        );
    }
    render () {
        // method 1 : bind in render
        // method 2 : arrow function in render
        return (
            <div>
                <h1>{this.state.a}</h1>
                <button onClick={this.clickHandler}>Click</button>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
            </div>
        );
    }
}

export default EventBind;