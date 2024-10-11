import useInput from '../../hooks/useInput';

const Form = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>First name : </label>
                <input 
                    {... bindFirstName}
                    type='text'
                />
            </div>
            <div>
                <label>Last name : </label>
                <input 
                    {... bindLastName}
                    type='text'
                />
            </div>
            <button>Submit</button>
        </form>
    );
};

export default Form;