import "./App.css";
import NavBar from "./components/NavBar";
import BookCard from "./components/BookCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PdfPreview from "./components/pdfPreview";
import { useState } from "react";
import data from "../data.json";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const handlePreview = (url) => {
    setIsOpen(true);
    setPdfUrl(url);
  };

  const handlePreviewClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <NavBar />
      <PdfPreview
        isOpen={isOpen}
        handleClose={handlePreviewClose}
        pdfUrl={pdfUrl}
      />
      <Container>
        <h1>Books Library App</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((book, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <BookCard
                  link={book.link}
                  author={book.author}
                  cover={book.imageUrl}
                  title={book.title}
                  handlePreview={handlePreview}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
