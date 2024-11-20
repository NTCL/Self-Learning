import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        };
    }
    static getDerivedStateFromError(error) {
        console.log('GET DERIVED STATE FROM ERROR');
        console.log(error);
        return {
            hasError : true
        };
    }

    componentDidCatch(error, info) {
        console.log(this.props.id + ' COMPONENT DID CATCH');
        console.log(error);
        console.log(info);
    }

    render () {
        console.log(this.props.id + ' RENDER');
        console.log(this.state.hasError);
        if(this.state.hasError) {
            return (
                <div>Something went wrong</div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;