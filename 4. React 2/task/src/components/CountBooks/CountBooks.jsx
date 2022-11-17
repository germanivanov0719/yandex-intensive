// import "./BookCard.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addBook, removeBook } from "../../store/cart/index";

export default function CountBooks(props) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const changeCounterValueBy = (step) => {
    if (value + step >= 0) {
      props.book.count = value + step;
      setValue(value + step);
      // dispatch(addBook);
    }
  };

  return (
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
  );
}
