import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookCard.css";

export default function BookCard(props) {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    props.handleChosenBook(props.book, value);
    navigate("/book");
  };

  const changeCounterValueBy = (step) => {
    if (value + step >= 0) {
      props.book.count = value + step;
      setValue(value + step);
    }
  };

  return (
    <div className="book-card">
      <div className="card-body" onClick={handleClick}>
        <h2>{props.book.title}</h2>
        <ul>
          <li>{props.book.author}</li>
          <li>{props.book.genres}</li>
          <li>{props.book.price || "—"} ₽</li>
        </ul>
      </div>
      <div className="count">
        <button
          type="button"
          disabled={value === 0}
          onClick={() => {
            changeCounterValueBy(-1);
          }}>
          -
        </button>
        <span>{value}</span>
        <button
          type="button"
          onClick={() => {
            changeCounterValueBy(1);
          }}>
          +
        </button>
      </div>
    </div>
  );
}
