import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import { Box } from "@mui/system";


export const PostCard = (props) => {
  const { title, imageUrl, summary, publishedAt, id } = props;

  const navigate = useNavigate();

  const [month, day, year] = new Date(publishedAt)
    .toLocaleString("en-us", { day: "numeric", month: "long", year: "numeric" })
    .split(" ");

  const publishedDate = month + " " + day.replace(",", "th, ") + year;

  return (
    <Grid item xs={12} md={4} justifyContent="center">
      <Card sx={{ maxWidth: 400, margin: "auto", height: "530px" }}>
        <CardMedia
          onClick={() => navigate(`/posts/${id}`)}
          component="img"
          alt={title}
          height="217px"
          image={imageUrl}
          sx={{ cursor: "pointer" }}
        />
        <CardContent>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ mb: "20px", mt: "10px" }}
          >
            <CalendarMonthSharpIcon
              color={"#363636"}
              sx={{ opacity: 0.6, mr: "8px" }}
            />
            <Typography
              color={"#363636"}
              sx={{ opacity: 0.6 }}
              fontSize={14}
              component="p"
            >
              {publishedDate}
            </Typography>
          </Box>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ height: "58px", mb: "1rem", cursor: "pointer" }}
            component="p"
            onClick={() => navigate(`/posts/${id}`)}
          >
            {title.substr(0, 52) + "..."}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            height={96}
            fontSize={16}
          >
            {summary.substr(0, 150) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate(`/posts/${id}`)}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
