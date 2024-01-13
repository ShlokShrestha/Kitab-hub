import { getBookDetail } from "@/utils/BookApi";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const page = async ({ params }) => {
  const id = parseInt(params.id);
  const bookDetail = await getBookDetail(id);

  return (
    <Container sx={{ my: 4 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img src={bookDetail.cover} alt="book" height={500} width={300} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            {bookDetail.title}
          </Typography>
          <Typography gutterBottom>
            Genres: {bookDetail.genres.map((item) => item).join(", ")}
          </Typography>
          <Typography gutterBottom>Rating: {bookDetail.rating}</Typography>
          <Typography gutterBottom>
            Description: <br />
            {bookDetail.plot}
          </Typography>
          <Button
            href={bookDetail.url}
            variant="contained"
            size="large"
            sx={{ my: 2 }}
          >
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default page;
