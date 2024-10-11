const FunctionEvent = () => {
    function clickHandler() {
        console.log('FUNCTION CLICKED');
    }
    return (
        <div>
            <button onClick={clickHandler}>Function Click</button>
        </div>
    );
}

export default FunctionEvent;