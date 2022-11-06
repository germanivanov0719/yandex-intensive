import "./Layout.css";
import BookCard from "../BookCard/BookCard";
import { useState } from "react";

const styleParent = {
  display: "flex",
  gap: "2em",
};

export default function Layout(props) {
  const [genre, setGenre] = useState(props.genres[0]);
  return (
    <div style={styleParent} className="content-container">
        <ul className='card genre-list '>
          {props.genres.map((genre) => (
            <li
              key={props.genres.indexOf(genre)}
              onClick={() => {
                setGenre(genre);
              }}>
              {genre}
            </li>
          ))}
        </ul>
      <ul className="book-list">
        {props.books
          .filter((book) => book.genres === genre)
          .map((book) => (
            <BookCard
              key={book.bookId}
              book={book}
              handleChosenBook={props.handleChosenBook}
            />
          ))}
      </ul>
    </div>
  );
}
