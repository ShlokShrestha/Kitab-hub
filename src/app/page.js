import BookCard from "@/components/BookCard";
import { getAllBook } from "@/utils/BookApi";
import { Typography, Box, Container, Grid } from "@mui/material";
import Image from "next/image";

export default async function Home() {
  const data = await getAllBook();
  
  return (
    <>
      <Container>
        <Image src="/home-book.jpg" alt="hello" height={500} width={300} />
        <Typography
          textAlign="center"
          variant="h4"
          sx={{ my: 3, fontWeight: "bold" }}
        >
          All Books
        </Typography>
        <Grid container spacing={3}>
          {data.map((book, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
