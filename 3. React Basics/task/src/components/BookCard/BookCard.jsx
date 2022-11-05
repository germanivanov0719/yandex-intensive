export default function BookCard(props) {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <ul>
        <li>{props.book.author}</li>
        <li>{props.book.genres}</li>
      </ul>
    </div>
  );
}