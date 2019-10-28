export function fetchPostsRequest(){
    return {
        type: "LOADING"
    }
}

export function fetchPostsSuccess(payload) {
    return {
        type: "SUCCESS",
        payload
    }
}

export function fetchPostsError() {
    return {
        type: "ERROR"
    }
}
