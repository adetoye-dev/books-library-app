import "./App.css";
import NavBar from "./components/NavBar";
import BookCard from "./components/BookCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PdfPreview from "./components/pdfPreview";
import { useState } from "react";
import Hero from "./components/Hero";
import data from "../data.json";
import { useQuery } from "@tanstack/react-query";
import server from "./apis/server";

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

  const { isLoading, error, data } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      return server.get("/books").then((res) => res.data.reverse());
    },
  });

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <PdfPreview
        isOpen={isOpen}
        handleClose={handlePreviewClose}
        pdfUrl={pdfUrl}
      />
      <div id="books" className="books-container my-10">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 3, md: 5 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {isLoading
                ? "Fetching Books..."
                : error
                ? "Unable to fetch books!"
                : data.reverse().map((book, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={3}
                      key={index}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <BookCard
                        link={book.bookUrl}
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
    </div>
  );
}

export default App;
