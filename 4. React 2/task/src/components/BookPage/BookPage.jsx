import { useState, useEffect } from "react";
import star from "../../constants/star.svg";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./BookPage.css";
import CountBooks from "../CountBooks/CountBooks";

export default function BookPage(props) {
  const [currentBook, setCurrentBook] = useState(
    props.book || JSON.parse(localStorage.getItem("currentBook"))
  );
  useEffect(() => {
    localStorage.setItem("currentBook", JSON.stringify(currentBook));
  }, [currentBook]);
  return (
    <>
      <div className="content-container split-info">
        <div className="book-preview card">
          <h1>{currentBook.title}</h1>
          <p className="text-muted">{currentBook.author}</p>
          <p className="text-muted">{currentBook.genres}</p>
          <p className="text-muted">
            {currentBook.rating}
            <img className="star" alt="star" src={star} />
          </p>
          <div>
            <p className="price bold">
              {currentBook.price ? currentBook.price + " ₽" : "Нет в наличии"}
            </p>
            <CountBooks book={currentBook} />
          </div>
        </div>
        <div className="book-annotation card">
          <h2>Аннотация</h2>
          <p>{currentBook.description || "Отсутствует"}</p>
        </div>
      </div>
      <div className="content-container review-list">
        {(currentBook.reviews &&
          currentBook.reviews.map((review) => (
            <div key={review.id} className="">
              <ReviewCard review={review} />
            </div>
          ))) || <h3 className="text-muted text-center">Отзывов пока нет</h3>}
      </div>
    </>
  );
}
