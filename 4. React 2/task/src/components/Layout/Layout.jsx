import "./Layout.css";
import BookCard from "../BookCard/BookCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const styleParent = {
  display: "flex",
  gap: "2em",
};

export default function Layout({ handleChosenBook }) {
  const categories = Object.values(
    useSelector((state) => state.category).entities
  );
  const books = useSelector((state) => state.book).entities;
  const [currentCategoryId, setCurrentCategoryId] = useState(1);
  console.log(books);
  return (
    <div>
      {categories.length > 0 && books !== undefined ? (
        <div style={styleParent} className="content-container">
          <ul className="card genre-list ">
            {categories.map((genre) => (
              <li
                className={currentCategoryId === genre.id ? "bold" : ""}
                key={genre.id}
                onClick={() => {
                  setCurrentCategoryId(genre.id);
                }}>
                {genre.name}
              </li>
            ))}
          </ul>
          <ul className="book-list">
            {books
              .filter((book) =>
                categories
                  .find((category) => category.id === currentCategoryId)
                  .books.includes(book.id)
              )
              .map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  handleChosenBook={handleChosenBook}
                />
              ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
