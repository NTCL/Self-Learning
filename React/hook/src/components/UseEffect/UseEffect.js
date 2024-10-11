import {useState, useEffect} from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [time, setTime] = useState(0);
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [postId, setPostId] = useState(1);
    const [fetchId, setFetchId] = useState(1);

    useEffect(() => {
        document.title = `You click ${count} times`;
    }, [count]);

    useEffect(() => {
        const logMousePosition = e => {
            setX(e.clientX);
            setY(e.clientY);
        };
        window.addEventListener('mousemove', logMousePosition);
        return () => window.removeEventListener('mousemove', logMousePosition);
    }, []);

    useEffect(() => {
        const interval = setInterval(
            () => setTime(prevTime => prevTime + 1),
            1000
        );
        return () => clearInterval(interval);  
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + fetchId)
        .then(result => result.json())
        .then(data => {
            if(Array.isArray(data)) {
                setPosts(data);
                setPost({});
            }
            else {
                setPosts([]);
                setPost(data);
            }
        });
    }, [fetchId]);
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
            <div>X - {x} Y - {y}</div>
            <div>{time}</div>
            <input type="text" value={postId} onChange={e => setPostId(e.target.value)}/>
            <button type="button" onClick={() => setFetchId(postId)}>Fetch Post</button>
            <div>{post.title}</div>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </div>
    );
}
export default UseEffect;