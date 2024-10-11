import {Component} from 'react';

class State extends Component {
    constructor() {
        super();
        this.state = {
            a : 1,
            b : 1,
            c : 1
        };
    }

    changeA() {
        this.state.a ++;
        console.log(this.state.a); // 2
    }

    changeB() {
        this.setState(
            {
                b : this.state.b + 1
            },
            () => {
                console.log("NEW B : " + this.state.b); // NEW B : 2
            }
        );
        console.log("OLD B : " + this.state.b); // OLD B : 1
    }

    multipleChangeB() {
        this.changeB();
        this.changeB();
        this.changeB();
        // OLD B : 1 (3 times)
        // NEW B : 2 (3 times)
    }

    changeC() {
        this.setState(
            (prevState, props) => {
                console.log(props); // {x: '10'}
                console.log("PREVIOUS C : " + prevState.c); // PREVIOUS C : 1
                return {
                    c : prevState.c + 1
                };
            },
            () => {
                console.log("NEW C : " + this.state.c); // NEW C : 2
            }
        );
        console.log("OLD C : " + this.state.c); // OLD C : 1
    }

    multipleChangeC() {
        this.changeC();
        this.changeC();
        this.changeC();
        // OLD C : 1 (3 times)
        // PREVIOUS C : 1
        // PREVIOUS C : 2
        // PREVIOUS C : 3
        // NEW C : 4 (3 times)
    }

    render () {
        // return (
        //     <div>
        //         <h1>a is {this.state.a}</h1>
        //         <button onClick={() => this.changeA()}>change A</button>
        //         <h1>b is {this.state.b}</h1>
        //         <button onClick={() => this.changeB()}>change B</button>
        //         <button onClick={() => this.multipleChangeB()}>multiple change B</button>
        //         <h1>c is {this.state.c}</h1>
        //         <button onClick={() => this.changeC()}>change C</button>
        //         <button onClick={() => this.multipleChangeC()}>multiple change C</button>
        //     </div>
        // );
        const {a, b, c} = this.state;
        return (
            <div>
                <h1>a is {a}</h1>
                <button onClick={() => this.changeA()}>change A</button>
                <h1>b is {b}</h1>
                <button onClick={() => this.changeB()}>change B</button>
                <button onClick={() => this.multipleChangeB()}>multiple change B</button>
                <h1>c is {c}</h1>
                <button onClick={() => this.changeC()}>change C</button>
                <button onClick={() => this.multipleChangeC()}>multiple change C</button>
            </div>
        );
    }
}

export default State;