import {fetchPostsRequest, fetchPostsSuccess, fetchPostsError} from '../actions'

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case "LOADING":
            return state;
        case "SUCCESS":
            return {...state, posts: action.payload};
        default:
            return state;
    }
};

export function fetchPostsWithRedux() {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        console.log("Loading..");
        return fetchPosts().then(([response, json]) =>{
            if(response.status === 200){
                dispatch(fetchPostsSuccess(json));
                console.log("Success!")
            }
            else{
                dispatch(fetchPostsError());
                console.log("Error...")
            }
        })
    }
}

function fetchPosts() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    return fetch(URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}
