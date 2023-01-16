export const SET_POSTS = "@@posts/SETPOSTS"
export const SET_LOADING = "@@posts/SETLOADING"
export const SET_ERROR = "@@posts/SET_ERROR"

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
})

export const setLoading = () => ({
    type: SET_LOADING,
})

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err
})

export const loadPosts = () => (dispatch, _, {client, api}) => {
    dispatch(setLoading())

    client.get(api.ALL_POSTS)
    .then(({data}) => dispatch(setPosts(data)))
    .catch((err) => dispatch(setError(err.message)))
}