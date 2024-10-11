import {Component} from 'react'
class Form extends Component {
    constructor() {
        super();

        this.state = {
            text : '',
            textArea : '',
            select : 'a'
        };
    }

    textChangeHandler = event => {
        this.setState({
            text : event.target.value
        });
    };

    textAreaChangeHandler = event => {
        this.setState({
            textArea : event.target.value
        });
    };

    selectChangeHandler = event => {
        this.setState({
            select : event.target.value
        });
    };

    formSubmitHandler = event => {
        alert(`${this.state.text} ${this.state.textArea} ${this.state.select}`);
        event.preventDefault();
    }

    render() {
        const {text, textArea, select} = this.state;
        return (
            <form onSubmit={this.formSubmitHandler}>
                <div>
                    <label>Text : </label>
                    <input 
                        type='text' 
                        value={text} 
                        onChange={this.textChangeHandler}
                    />
                </div>
                <div>
                    <label>Text Area : </label>
                    <textarea
                        value={textArea} 
                        onChange={this.textAreaChangeHandler}
                    />
                </div>
                <div>
                    <label>Select : </label>
                    <select 
                        value={select}
                        onChange={this.selectChangeHandler}
                    >
                        <option value='a'>a</option>
                        <option value='b'>b</option>
                        <option value='c'>c</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}
export default Form;