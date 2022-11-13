import { useState } from "react";
import { useSelector } from "react-redux";
import BookCard from "../BookCard/BookCard";
import "./Layout.css";

export default function Layout({ handleChosenBook }) {
  const categories = Object.values(
    useSelector((state) => state.category).entities
  );
  const books = useSelector((state) => state.book).entities;
  const [currentCategoryId, setCurrentCategoryId] = useState(
    categories[0] === undefined ? 1 : categories[0].id
  );

  return (
    <div>
      {categories.length > 0 && books !== undefined ? (
        <div className="content-container display-flex">
          <ul className="card genre-list ">
            {categories.map((category) => (
              <li
                className={currentCategoryId === category.id ? "bold" : ""}
                key={category.id}
                onClick={() => {
                  setCurrentCategoryId(category.id);
                }}>
                {category.name}
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
        <h3 className="text-center">Загрузка…</h3>
      )}
    </div>
  );
}
