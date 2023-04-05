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
              {isLoading ? (
                <div className="w-full h-full flex flex-col items-center justify-center py-10 gap-5">
                  <span className="w-8 h-8 border border-4 border-slate-300 shadow-sm rounded animate-spin"></span>
                  <p className="animate-pulse text-lg">Fetching Books...</p>
                </div>
              ) : error ? (
                <div className="w-full h-full flex flex-col items-center justify-center py-10">
                  <p className="text-center text-lg">
                    Unable to fetch books. <br />
                    Please Check your network and try again!
                  </p>
                </div>
              ) : (
                data.map((book, index) => (
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
                ))
              )}
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default App;
