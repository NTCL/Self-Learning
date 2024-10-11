import {Component} from 'react';

class Props extends Component {
    render () {
        // this.props.a = '10'; // TypeError: Cannot assign to read only property 'a' of object '#<Object>
        // return (
        //     <div>
        //         <h1>a is {this.props.a}</h1>
        //         <h2>b is {this.props.b}</h2>
        //         {this.props.children}
        //     </div>
        // );

        const {a, b, children : c} = this.props;
        return (
            <div>
                <h1>a is {a}</h1>
                <h2>b is {b}</h2>
                {c}
            </div>
        );
    }
}

export default Props;