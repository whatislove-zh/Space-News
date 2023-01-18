export const selectPostsInfo = (state) => ({
  status: state.posts.status,
  error: state.posts.error,
  qty: state.posts.list.length,
});

export const selectAllPosts = (state) => state.posts.list;

export const selectVisiblePosts = (state, { search = "" }) => {
  const searchArr = search.split(" ")

  if (searchArr.length > 1 && searchArr.includes("")) {
    searchArr.splice(searchArr.length-1, 1)
  }
  
  

  return state.posts.list.filter(
    (post) =>
      searchArr.some((el) =>
            post.title.toLowerCase().includes(el.toLowerCase()) ||
            post.summary.toLowerCase().includes(el.toLowerCase())
        )
  );
};
