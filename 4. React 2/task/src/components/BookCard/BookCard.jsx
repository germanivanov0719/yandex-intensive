import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookCard.css";
import star from "../../constants/star.svg";

export default function BookCard(props) {
  const [value, setValue] = useState(props.book.count || 0);
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
    <div className="book-card card">
      <div className="card-body" onClick={handleClick}>
        <h2>{props.book.title}</h2>
        <ul className="book-info">
          <li className="text-muted">{props.book.author}</li>
          <li className="text-muted">{props.book.genres}</li>
          <li className="text-muted">
            {props.book.rating}<img className="star" alt="star" src={star} />
          </li>
          <li className="bold price">
            {props.book.price ? props.book.price + " ₽" : "Нет в наличии"}
          </li>
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
        <span className={value ? '' : 'text-muted'}>{value}</span>
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
