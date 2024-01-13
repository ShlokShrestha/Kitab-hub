"use client";
import Link from "next/link";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./navbar.module.css";

const BookCard = ({ book }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/books/${book.book_id}`} className={styles.card}>
        <CardMedia
          sx={{ height: 400 }}
          image={book.cover}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="overline">
            {book.genres[1]}
          </Typography>
          <Typography gutterBottom variant="h6">
            {book.title.slice(0, 20)}
          </Typography>
          <Typography gutterBottom variant="body1">
            Rating: {book.rating}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BookCard;
