"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const BookCard = ({ book }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 400 }} image={book.cover} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ textAlign: "center" }}>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
