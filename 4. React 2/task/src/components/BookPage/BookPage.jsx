import { useState } from "react";
import star from "../../constants/star.svg";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./BookPage.css";

export default function BookPage(props) {
  const [value, setValue] = useState(props.book.count || 0);
  const changeCounterValueBy = (step) => {
    if (value + step >= 0) {
      props.book.count = value + step;
      setValue(value + step);
    }
  };

  return (
    <>
      <div className="content-container split-info">
        <div className="book-preview card">
          <h1>{props.book.title}</h1>
          <p className="text-muted">{props.book.author}</p>
          <p className="text-muted">{props.book.genres}</p>
          <p className="text-muted">
            {props.book.rating}
            <img className="star" alt="star" src={star} />
          </p>
          <div>
            <p className="price bold">
              {props.book.price ? props.book.price + " ₽" : "Нет в наличии"}
            </p>
            <div className="count">
              <button
                type="button"
                disabled={value === 0}
                onClick={() => {
                  changeCounterValueBy(-1);
                }}>
                -
              </button>
              <span className={value ? "" : "text-muted"}>{value}</span>
              <button
                type="button"
                onClick={() => {
                  changeCounterValueBy(1);
                }}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="book-annotation card">
          <h2>Аннотация</h2>
          <p>{props.book.description || "Отсутствует"}</p>
        </div>
      </div>
      <div className="content-container review-list">
        {(props.book.reviews &&
          props.book.reviews.map((review) => (
            <div key={review.id} className="">
              <ReviewCard review={review} />
            </div>
          ))) || <h3 className="text-muted text-center">Отзывов пока нет</h3>}
      </div>
    </>
  );
}
