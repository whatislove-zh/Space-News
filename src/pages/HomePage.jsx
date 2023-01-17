import { Search } from "../components/Search";
import { Results } from "../components/Results";
import { PostCard } from "../components/PostCard";
import { Loader } from "../components/Loader";

import { selectAllPosts, selectPostsInfo } from "../store/posts/posts-selectors";
import { loadPosts } from "../store/posts/posts-actions";

import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const HomePage = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts)

  const { status, error, qty } = useSelector(selectPostsInfo);

  useEffect(() => {
    !qty && dispatch(loadPosts());
  }, [qty, dispatch]);

  return (
    <Container sx={{ mt: "50px", maxWidth: "1290px" }}>
      <Search />
      <Results />

      {error && <h2>Can't fetch data</h2>}
      {status === "loading" && <Loader />}
      {status === "received" && (
        <Grid container spacing={2} sx={{ mt: "45px" }}>
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </Grid>
      )}
    </Container>
  );
};
