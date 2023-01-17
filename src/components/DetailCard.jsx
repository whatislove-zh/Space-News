import { Box, Typography } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import { BackToHomeBtn } from "./BackToHomeBtn";

export const DetailCard = (props) => {
  const { title, imageUrl, summary } = props;

  return (
    <>
      <Box width={"100%"} height="245px">
        <img
          className="detail_img"
          src={imageUrl}
          alt={title}
          width={"100%"}
          height="100%"
        />
      </Box>
      <Container
        sx={{
          mt: "50px",
          maxWidth: "1290px",
          border: "1px solid #EAEAEA",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)",
          position: "relative",
          top: "-150px",
          background: "#ffffff",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h2"
          fontSize={24}
          width="max-content"
          sx={{ m: "35px auto 50px" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontSize={18}
          component={"p"}
          sx={{ mb: "50px" }}
        >
          {summary.repeat(10)}
        </Typography>
      </Container>
      <Container
        sx={{
          position: "relative",
          top: "-150px",
          mt: "35px",
        }}
      >
        <BackToHomeBtn />
      </Container>
    </>
  );
};
