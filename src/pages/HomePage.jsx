import { Search } from "../components/Search";
import { Results } from "../components/Results";
import { PostCard } from "../components/PostCard";
import { Loader } from "../components/Loader";

import {
  selectPostsInfo,
  selectVisiblePosts,
} from "../store/posts/posts-selectors";
import { loadPosts } from "../store/posts/posts-actions";

import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectSearch } from "../store/controls/controls-selectors";

export const HomePage = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const searchArr = search.split(" ");

  const posts = useSelector((state) => selectVisiblePosts(state, { search }));

  //const posts = useSelector(selectAllPosts)
  const sortingRules = (a, b) => {
    if (
      searchArr.some((el) => b.title.toLowerCase().includes(el.toLowerCase()))
    ) {
      return 1;
    }
    if (
      searchArr.some((el) => a.title.toLowerCase().includes(el.toLowerCase()))
    ) {
      return -1;
    }
    return 0;
  };
  

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
          {posts.sort(sortingRules).map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </Grid>
      )}
    </Container>
  );
};
