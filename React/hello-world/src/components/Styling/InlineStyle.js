function InlineStyle(props) {
    const style = {
        color : props.red ? 'red' : '',
        fontSize : '72px'
    };
    return (
        <div>
            <h1 style={style}>Inline Style</h1>
        </div>
    );
}

export default InlineStyle;