import "./Layout.css";
import BookCard from "../BookCard/BookCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from 'react';

const styleParent = {
  display: "flex",
  gap: "2em",
};

export default function Layout({handleChosenBook}) {
  const categories = Object.values(useSelector((state) => state.category).entities);
  const books = useSelector((state) => state.books);
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  console.log(books)
  // console.log(books
  //   .filter((book) => book.id in categories[currentCategoryId].books )
  //   .map((book) => (
  //     <BookCard
  //       key={book.bookId}
  //       book={book}
  //       handleChosenBook={handleChosenBook}
  //     />
  // )));
  return (
    <div>
      {categories.length > 0 ? (
        <div style={styleParent} className="content-container">
          <ul className="card genre-list ">
            {categories.map((genre) => (
              <li
                className={currentCategoryId === genre ? "bold" : ""}
                key={categories.indexOf(genre)}
                onClick={() => {
                  setCurrentCategoryId(genre);
                }}>
                {genre.name}
              </li>
            ))}
          </ul>
          {/* <ul className="book-list">
            {books
              .filter((book) => book.id in categories[currentCategoryId].books )
              .map((book) => (
                <BookCard
                  key={book.bookId}
                  book={book}
                  handleChosenBook={handleChosenBook}
                />
              ))}
          </ul> */}
        </div>
      ) : ''}
    </div>
  );
}
