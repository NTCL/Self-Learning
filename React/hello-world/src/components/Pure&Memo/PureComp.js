import {PureComponent} from 'react';

class PureComp extends PureComponent {
    render () {
        console.log('PURE COMP RENDER');
        return (
            <div>
                <h1>Pure Component</h1>
            </div>
        );
    }
}

export default PureComp;