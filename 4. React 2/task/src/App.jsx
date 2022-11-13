import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookPage from "./pages/BookPage/BookPage";
import Navbar from "./components/Navbar/Navbar";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import HomePage from "./pages/HomePage/HomePage";
import { data } from "./constants/constants";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { loadCategoryIfNotExist } from "./store/category/loadCategoryIfNotExist";

export default function App() {
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(loadCategoryIfNotExist());
  }, []);
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            index
            path="/"
            element={
              <HomePage
                books={data}
                genres={genres}
                handleChosenBook={handleChosenBook}
              />
            }
          />
          <Route path="/book" element={<BookPage book={chosenBook} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}
