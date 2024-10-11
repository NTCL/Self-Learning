import {useReducer, useEffect} from 'react';

const Request = () => {
    const [newState, dispatch] = useReducer(
        (currentState, action) => {
            switch(action.type) {
                case 'success' :
                    return {
                        loading : false,
                        post : action.post,
                        error : ''
                    };
                case 'failure' :
                    return {
                        loading : false,
                        post : {},
                        error : 'Something went wrong! (' + action.errorStatus + ')'
                    };
                default :
                    return currentState;
            }
        },
        {
            loading : true,
            error : '',
            post : {}
        }
    );

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(result => {
            if(!result.ok) {
                return Promise.reject(result);
            }
            return result.json();
        })
        .then(data => {
            dispatch({type : 'success', post : data});
        })
        .catch(error => {
            dispatch({type : 'failure', errorStatus : error.status});
        });
    }, []);


    return (
        <>
            <div>
                {newState.loading ? 'Loading' : newState.post.title}
                {newState.error ? newState.error : null}
            </div>
        </>
    );
};

export default Request;