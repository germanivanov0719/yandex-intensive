import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookPage from "./components/BookPage/BookPage";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from './store';
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
    <Provider store={store}>
      <BrowserRouter>
        <Layout a={test}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/cinemas" element={<CinemaPage />}>
              <Route path=":cinemaId" element={<Cinema />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
