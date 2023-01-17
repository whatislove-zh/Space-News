
export const SET_LOADING = "@@details/SET_LOADING"
export const SET_ERROR = "@@details/ST_ERROR"
export const SET_POST = "@@details/SET_POST"
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS"

const setLoading = () => ({
    type: SET_LOADING,
})

const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
})

const setPost = (post) => ({
    type: SET_POST,
    payload: post
})

export const clearDetails = () => ({
    type: CLEAR_DETAILS
})

export const loadPostById = (id) => (dispatch, _, {client, api}) => {
    dispatch(setLoading())

    client.get(api.searchPostById(id))
    .then(({data}) => dispatch(setPost(data)))
    .catch((err) => dispatch(setError(err.message)))
}