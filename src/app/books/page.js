import { getAllBook } from "@/utils/BookApi";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Pagination,
} from "@mui/material";
import React from "react";
import BookCard from "@/components/BookCard";
const page = async () => {
  const data = await getAllBook();
  
  return (
    <Container>
      <Box>
        <Typography
          textAlign="center"
          variant="h4"
          sx={{ my: 3, fontWeight: "bold" }}
          gutterBottom
        >
          Best Selling Books
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ mx: "auto" }}>
        {data.map((book, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default page;
