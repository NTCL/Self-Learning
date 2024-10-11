import {Component} from 'react';

class ClassEvent extends Component {
    clickHandler() {
        console.log('CLASS CLICKED');
    }
    render () {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click</button>
            </div>
        );
    }
}

export default ClassEvent;