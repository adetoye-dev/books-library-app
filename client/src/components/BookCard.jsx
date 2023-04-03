import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function BookCard() {
  return (
    <Card sx={{ width: 280 }}>
      <Paper
        sx={{
          width: "100%",
          height: "auto",
          paddingBlock: 3,
          paddingInline: 5,
          backgroundColor: "#f3f3f3",
        }}
        variant="outlined"
      >
        <CardMedia
          component="img"
          height="194"
          image="https://bit.ly/3IsYwty"
          alt="Book Cover"
        />
      </Paper>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Book Title
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Author
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button size="small">Preview</Button>
        <Button size="small">Download</Button>
      </CardActions>
    </Card>
  );
}