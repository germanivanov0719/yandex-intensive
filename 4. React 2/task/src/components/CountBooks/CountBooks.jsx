import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../store/cart";
import { selectBookCount } from "../../store/cart/selectors";
import "./CountBooks.css";

export default function CountBooks(props) {
  const value =
    useSelector((state) => selectBookCount(state, props.book.id)) || 0;
  const dispatch = useDispatch();

  const changeCounterValueBy = (step) => {
    if (step > 0) {
      dispatch(cartSlice.actions.addBook(props.book.id));
    } else {
      dispatch(cartSlice.actions.removeBook(props.book.id));
    }
  };

  return (
    <div className="count">
      <button
        type="button"
        disabled={value === 0}
        onClick={(e) => {
          e.stopPropagation();
          changeCounterValueBy(-1);
        }}>
        -
      </button>
      <span className={value ? "" : "text-muted"}>{value}</span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          changeCounterValueBy(1);
        }}>
        +
      </button>
    </div>
  );
}
