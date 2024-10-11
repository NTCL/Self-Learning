const Props = 
    props => {
        // props.a = '10'; // TypeError: Cannot assign to read only property 'a' of object '#<Object>'
        // return (
        //     <div>
        //         <h1>a is {props.a}</h1>
        //         <h2>b is {props.b}</h2>
        //         {props.children}
        //     </div>
        // );

        const {a, b, children : c} = props;
        return (
            <div>
                <h1>a is {a}</h1>
                <h2>b is {b}</h2>
                {c}
            </div>
        );
    };

export default Props;