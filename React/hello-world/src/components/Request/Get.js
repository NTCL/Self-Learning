import {Component} from 'react';

class Get extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : [],
            errorMsg : ''
        };
    }

    getPosts() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
                if(this.readyState == 4 && this.status == 200) {
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
            xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts');
            xhr.send();
        });
    }

    componentDidMount() {
        this.getPosts()
        .then(result => {
            this.setState({
                posts : result
            });
        })
        .catch(error => {
            this.setState({
                errorMsg : 'Error retreiving data (' + error + ')'
            });
        });
    }

    render() {
        const {posts, errorMsg} = this.state;
        return (
            <div>
                List of Posts
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
                {
                    errorMsg ?
                    <div>{errorMsg}</div>:
                    null
                }
            </div>
        );
    }
}

export default Get;