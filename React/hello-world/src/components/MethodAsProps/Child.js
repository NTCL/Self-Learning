const Child = props => (
    <div>
        <button onClick={() => props.handler(2)}>alert a</button>
    </div>
);

export default Child;