import React, {Component} from 'react';
import Ref from './Ref';
import RefForwarding from './RefForwarding';

class RefToClass extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
        this.forwardRef = React.createRef();
    }

    clickHandler1 = () => {
        this.componentRef.current.focusInput();
    }

    clickHandler2 = () => {
        this.forwardRef.current.focus();
    }

    render() {
        return (
            <div>
                <Ref ref={this.componentRef} />
                <button onClick={this.clickHandler1}>Focus 1</button>
                <RefForwarding ref={this.forwardRef} />
                <button onClick={this.clickHandler2}>Focus 2</button>

            </div>
        );
    }
}
export default RefToClass;