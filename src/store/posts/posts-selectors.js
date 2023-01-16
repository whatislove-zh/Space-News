export const selectPostsInfo = (state) => ({
    status: state.posts.status,
    error: state.posts.error,
    qty: state.posts.list.length,
})

export const selectAllPosts = (state) => state.posts.list