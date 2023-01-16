import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loader = () => {
  return (
    <Box sx={{ display: "flex", height:"50vh" ,alignItems: "center", justifyContent: "center" }}>
      <CircularProgress size={100} />
    </Box>
  );
};
