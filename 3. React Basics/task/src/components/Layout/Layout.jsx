import BookCard from '../BookCard/BookCard';
import {useState} from 'react'

const styleParent = {
  display: 'flex',
};

const genres = ['Художественная литература', 'Нехудожественная литература', 'Книги для детей', 'Переодические издания', 'Религия', 'Учебная литература', 'Комиксы'];

export default function Layout(props) {
  const [genre, setGenre] = useState(0);
  return (
    <div style={styleParent}>
      <div>
        <ul>
          <li onClick={() => { setGenre(0); }}>Художественная литература</li>
          <li onClick={() => { setGenre(1); }}>Нехудожественная литература</li>
          <li onClick={() => { setGenre(2); }}>Книги для детей</li>
          <li onClick={() => { setGenre(3); }}>Переодические издания</li>
          <li onClick={() => { setGenre(4); }}>Религия</li>
          <li onClick={() => { setGenre(5); }}>Учебная литература</li>
          <li onClick={() => { setGenre(6); }}>Комиксы</li>
        </ul>
      </div>
      <div>
        <ul>
          {(() => {
            const books = [];
            for (const book of props.books) {
              if (book.genres === genres[genre]) {
                books.push(<BookCard key={book.bookId} book={book} />);
              }
            }
            return books;
          })()}
        </ul>
        <header />
        <div />
      </div>
    </div>
  );
}
