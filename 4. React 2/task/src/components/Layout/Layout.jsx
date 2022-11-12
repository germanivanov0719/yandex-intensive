import "./Layout.css";
import BookCard from "../BookCard/BookCard";
import { useState } from "react";

const styleParent = {
  display: "flex",
  gap: "2em",
};

export default function Layout(props) {
  const [currentGenre, setCurrentGenre] = useState(props.genres[0]);
  return (
    <div style={styleParent} className="content-container">
        <ul className='card genre-list '>
          {props.genres.map((genre) => (
            <li
            className={currentGenre === genre? 'bold' : '' }
              key={props.genres.indexOf(genre)}
              onClick={() => {
                setCurrentGenre(genre);
              }}>
              {genre}
            </li>
          ))}
        </ul>
      <ul className="book-list">
        {props.books
          .filter((book) => book.genres === currentGenre)
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
