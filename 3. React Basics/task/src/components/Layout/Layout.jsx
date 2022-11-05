import BookCard from '../BookCard/BookCard';
import {useState} from 'react';
import './Layout.css';

const styleParent = {
  display: 'flex',
  gap: '2em',
};

export default function Layout(props) {
  const [genre, setGenre] = useState(props.genres[0]);
  return (
    <div style={styleParent}>
      <div>
        <ul>
          {props.genres.map((genre) => <li key={props.genres.indexOf(genre)} onClick={()=>{setGenre(genre)}}>{genre}</li>)}
        </ul>
      </div>
        <ul>
          {props.books.filter(book => book.genres === genre).map(book => <BookCard key={book.bookId} book={book} handleChosenBook={props.handleChosenBook} />)}
        </ul>
    </div>
  );
}
