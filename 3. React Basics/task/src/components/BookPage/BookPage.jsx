import { useState } from "react";

export default function BookPage(props) {
  const [value, setValue] = useState(props.book.count);
  const changeCounterValueBy = (step) => {
    if (value + step >= 0) {
      props.book.count = value + step;
      setValue(value + step);
    }
  };

  return (
    <div>
      <div>
        <h1>{props.book.title}</h1>
        <p>{props.book.author}</p>
        <p>{props.book.genres}</p>
        <div>
          <p>{props.book.price || "—"} ₽</p>
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
      </div>
    </div>
  );
}
