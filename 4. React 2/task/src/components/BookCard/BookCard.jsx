import { useState } from "react";
import { useNavigate } from "react-router-dom";
import star from "../../constants/star.svg";
import "./BookCard.css";
import CountBooks from "../CountBooks/CountBooks";

export default function BookCard(props) {
  const [value, setValue] = useState(props.book.count || 0);
  const navigate = useNavigate();
  const handleClick = () => {
    props.handleChosenBook(props.book);
    navigate("/book");
  };

  return (
    <div className="book-card card">
      <div className="card-body" onClick={handleClick}>
        <div className="clickable">
          <h2>{props.book.title}</h2>
        </div>
        <ul className="book-info">
          <li className="text-muted">{props.book.author}</li>
          <li className="text-muted">{props.book.genres}</li>
          <li className="text-muted">
            {props.book.rating}
            <img className="star" alt="star" src={star} />
          </li>
          <li className="bold price">
            {props.book.price ? props.book.price + " ₽" : "Нет в наличии"}
          </li>
          <CountBooks book={props.book} />
        </ul>
      </div>
    </div>
  );
}
