import BookCard from "@/components/BookCard";
import { getAllBook } from "@/utils/BookApi";
import { Typography, Box, Container, Grid, Button } from "@mui/material";
import Image from "next/image";

export default async function Home() {
  const data = await getAllBook();
  return (
    <>
      <Box sx={{ my: 3 }}>
        <Container>
          <Box>
            <Grid container spacing={2} sx={{ mb: 5, mx: "auto" }}>
              <Grid item lg={8} md={6} sm={12} xs={12}>
                <Typography sx={{ my: 4 }} variant="overline">
                  NEW RELEASE
                </Typography>
                <Typography sx={{ fontWeight: 500 }} variant="h1">
                  The Sons of the Empire
                </Typography>
                <Typography sx={{ width: "75%", my: 4 }}>
                  Justo habitant at augue ac sed proin consectetur ac urna nisl
                  elit nulla facilisis viverra dolor sagittis nisi risus egestas
                  adipiscing nibh euismod.
                </Typography>
                <Button variant="contained" href="/book">
                  View Book
                </Button>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Image
                  src="/home-book.jpg"
                  alt="hello"
                  height={500}
                  width={300}
                />
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Typography
              textAlign="center"
              variant="h4"
              sx={{ my: 2, fontWeight: "bold" }}
              gutterBottom
            >
              Best Selling Books
            </Typography>
            <Typography
              textAlign="center"
              variant="body1"
              sx={{ mb: 3, width: "75%", mx: "auto" }}
              gutterBottom
            >
              Vulputate vulputate eget cursus nam ultricies mauris, malesuada
              elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel
              tortor eget aenean.
            </Typography>
            <Grid container spacing={2} sx={{ mx: "auto" }}>
              {data.slice(0, 4).map((book, index) => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                  <BookCard book={book} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Box
          sx={{ width: "100%", height: "100%", my: 5, position: "relative" }}
        >
          <Grid container>
            <Grid item lg={12}>
              <Image
                src="/subcover.jpg"
                alt="book"
                height={100}
                width={100}
                layout="responsive"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#ffff",
                  textAlign: "center",
                  width: "80%",
                }}
              >
                <Typography variant="h4">Inspire Daily Reading</Typography>
                <Typography variant="caption">
                  Visit Our Blog and Page Find Out Daily Inspiration Quotes from
                  the Best Authors
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
