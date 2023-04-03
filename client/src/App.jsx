import "./App.css";
import NavBar from "./components/NavBar";
import BookCard from "./components/BookCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <h1>Books Library App</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <BookCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
