import { Search } from "../components/Search";
import { Results } from "../components/Results";
import { PostCard } from "../components/PostCard";
import { Grid } from "@mui/material";


export const HomePage = () => {
  
    
  return (
    <>
      <Search />
      <Results />
      <Grid container spacing={2} sx={{mt:"45px"}}  >

      {[1,2,3].map((post) => (
        
        <PostCard key={post} />
      ))}
      </Grid>
    </>
  );
};
