import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BookPage from "./pages/BookPage/BookPage";
import HomePage from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { loadBooksIfNotExist } from "./store/book/loadBooksIfNotExist";
import { loadCategoriesIfNotExist } from "./store/category/loadCategoriesIfNotExist";
import CartPage from "./pages/CartPage/CartPage";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooksIfNotExist);
    dispatch(loadCategoriesIfNotExist);
  }, [dispatch]);

  const [chosenBook, setChosenBook] = useState(
    useSelector((state) => state.book).entities[0]
  );
  const handleChosenBook = (book) => {
    setChosenBook(book);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          index
          path="/"
          element={<HomePage handleChosenBook={handleChosenBook} />}
        />
        <Route path="/book" element={<BookPage book={chosenBook} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
