import { Typography } from "@mui/material";
import { Container, flexbox } from "@mui/system";
import { BackToHomeBtn } from "../components/BackToHomeBtn";

export const NotFound = () => {
  return (
    <Container sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Typography variant="h1" gutterBottom>
        This page doesn't exist
      </Typography>
      <BackToHomeBtn/>
    </Container>
  );
};
