import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookPage from "./components/BookPage/BookPage";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import books from "./constants/books.json";
import { data } from "./constants/constants";


export default function App() {
  const [chosenBook, setChosenBook] = useState(data[0]);
  const getAllGenres = () => {
    let allGenres = [];
    data.forEach((book) => allGenres.push(book.genres));
    return [...new Set(allGenres)];
  };
  const [genres] = useState(getAllGenres());
  // Sets chosen book
  const handleChosenBook = (book) => {
    setChosenBook(book);
  };
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                books={books}
                genres={genres}
                handleChosenBook={handleChosenBook}
              />
            }></Route>
          <Route path="/book" element={<BookPage book={chosenBook} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
