import { Box,Grid, TextField, Typography, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export const Search = () => {
  return (
    <Grid container sx={{mb:"40px"}}>
      <Grid item xs={8} md={4}>
        <Typography variant="h6" gutterBottom sx={{ fontSize: "16px", mb: "" }}>
          Filter by keywords
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center"  }}>
          
          <TextField
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
