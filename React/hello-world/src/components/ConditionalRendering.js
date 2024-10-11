import {Component} from 'react';

class ConditionalRendering extends Component {
    constructor() {
        super();
        this.state = {
            a : true
        };
    }
    render () {
        // method 1 : if else
        // if(this.state.a) {
        //     return <div>HI</div>;
        // }
        // else {
        //     return <div>BYE</div>;
        // }

        // method 2 : js variable
        // let msg;
        // if(this.state.a) {
        //     msg = 'HI';
        // }
        // else {
        //     msg = 'BYE';
        // }
        // return <div>{msg}</div>;

        // method 3 : ternary operator
        // return (
        //     this.state.a ?
        //     <div>HI</div> :
        //     <div>BYE</div>
        // );

        // method 4 : short circuit evaluation
        return this.state.a && <div>HI</div>;
    }
}

export default ConditionalRendering;