import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";

import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import { Box } from "@mui/system";

export const PostCard = (props) => {
  const { title, imageUrl, summary, publishedAt } = props;

  const [month, day, year] = new Date(publishedAt)
    .toLocaleString("en-us", { day: "numeric", month: "long", year: "numeric" })
    .split(" ");
  const publishedDate = month + day.replace(",", "th,") + year;

  return (
    <Grid item xs={12} md={4} justifyContent="center">
      <Card sx={{ maxWidth: 400, margin: "auto", height: "530px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="217px"
          image={imageUrl}
        />
        <CardContent>
          <Box display={"flex"} alignItems={"center"}>
            <CalendarMonthSharpIcon color={"#363636"} sx={{ opacity: 0.6, mr:"8px" }} />
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
            sx={{ height: "58px", mb: "1rem" }}
            component="p"
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
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
