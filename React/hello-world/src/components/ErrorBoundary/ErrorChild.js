const ErrorChild = ({num}) => {
    if(num > 10) {
        throw new Error('num > 10');
    }
    return (
        <div>
            {num}
        </div>
    );
}

export default ErrorChild;