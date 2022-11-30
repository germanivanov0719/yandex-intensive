import { useSelector } from "react-redux";
import BookCard from "../../components/BookCard/BookCard";
import "./CardPage.css";

export default function CartPage() {
  const books = useSelector((state) => state.book).entities;
  const addedBooks = useSelector((state) => state.cart);
  const booksToDisplay = books.filter((book) =>
    Object.keys(addedBooks).includes(book.id.toString())
  );
  let sum = 0;
  booksToDisplay.forEach((book) => (sum += book.price * addedBooks[book.id]));

  return (
    <div className="content-container display-flex">
      <div className="card content-container order-list">
        <p className="font-weight-bold">Ваш заказ:</p>
        {booksToDisplay.map((book) => (
          <div className="display-flex item-price" key={book.id}>
            <p>{book.title}</p>
            <p className="font-weight-bold">
              {book.price * addedBooks[book.id]} ₽
            </p>
          </div>
        ))}
        <div className="display-flex">
          <h4>Итого: {sum} ₽</h4>
          <button className="buy-button">
            <p className="font-weight-bold">Купить</p>
          </button>
        </div>
      </div>
      <div className=" book-list">
        {booksToDisplay.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
