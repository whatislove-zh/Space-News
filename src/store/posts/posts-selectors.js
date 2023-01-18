export const selectPostsInfo = (state) => ({
  status: state.posts.status,
  error: state.posts.error,
  qty: state.posts.list.length,
});

export const selectAllPosts = (state) => state.posts.list;

export const selectVisiblePosts = (state, { search = "" }) => {
  return state.posts.list.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase())
  );
};
