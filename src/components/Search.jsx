import { Box,Grid, TextField, Typography, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { selectSearch } from "../store/controls/controls-selectors";
import { setSearch } from "../store/controls/controls-actions";


export const Search = () => {

  const dispatch = useDispatch()

  const search = useSelector(selectSearch)

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <Grid container sx={{mb:"40px"}}>
      <Grid item xs={8} md={4}>
        <Typography variant="h6" gutterBottom sx={{ fontSize: "16px", mb: "" }}>
          Filter by keywords
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center"  }}>
          
          <TextField 
            onChange={handleSearch}
            value={search}
            placeholder="Search"
            variant="outlined"
            type="search"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="large" sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
