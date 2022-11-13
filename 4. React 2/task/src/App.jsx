import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookPage from "./pages/BookPage/BookPage";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import {store} from './store';
import HomePage from './pages/HomePage/HomePage'
import { data } from "./constants/constants";
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage';

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
    <Provider store={store}>
      <BrowserRouter>
        <Layout books={data} genres={genres} handleChosenBook={handleChosenBook}>
          <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="properBook" element={<BookPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </ Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
