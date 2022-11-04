import React from 'react';
import useState from 'react';
import BookCard from '../BookCard/BookCard';

const styleParent = {
  display: 'flex',
};

const genres = ['Художественная литература', 'Нехудожественная литература', 'Книги для детей', 'Переодические издания', 'Религия', 'Учебная литература', 'Комиксы'];

export default function Layout(props) {
  // console.log(props.books);
  const [genre, setGenre] = useState(0);
  return (
    <div style={styleParent}>
      <div>
        <ul>
          <li onClick={() => { setGenre(0); }}>Художественная литература</li>
          <li onClick={() => {}}>Нехудожественная литература</li>
          <li onClick={() => {}}>Книги для детей</li>
          <li onClick={() => {}}>Переодические издания</li>
          <li onClick={() => {}}>Религия</li>
          <li onClick={() => {}}>Учебная литература</li>
          <li onClick={() => {}}>Комиксы</li>
        </ul>
      </div>
      <div>
        <ul>
          {props.books.map((book) => <BookCard key={book.bookId} book={book} />)}
        </ul>
        <header />
        <div />
      </div>
    </div>
  );
}
