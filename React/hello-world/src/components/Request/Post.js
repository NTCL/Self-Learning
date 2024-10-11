import {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId : '',
            title : '',
            body : ''
        };
    }

    postPost() {
        return new Promise((resolve, reject) => {
            let dataArr = [];
            for(const key in this.state) {
                dataArr.push(
                    encodeURIComponent(key) + 
                    '=' + 
                    encodeURIComponent(this.state[key])
                );
            }
            
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
                if(this.readyState == 4 && this.status == 201) {
                    setTimeout(() => {
                        resolve(JSON.parse(this.responseText));
                    }, 1000);
                }
                else {
                    setTimeout(() => {
                        reject(this.status);
                    }, 1000);
                }
            }
            xhr.open("POST", 'https://jsonplaceholder.typicode.com/posts');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(dataArr.join('&'));
        });
    }

    changeHandler = event => {
        console.log(event);
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    submitHandler = event => {
        event.preventDefault();
        this.postPost()
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }

    render() {
        const {userId, title, body} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input 
                            type='text' 
                            name='userId' 
                            value={userId}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input 
                            type='text' 
                            name='title' 
                            value={title}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input 
                            type='text' 
                            name='body' 
                            value={body}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Post;