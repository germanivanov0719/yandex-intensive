import BookPageOld from '../../components/BookPage/BookPage';

export default function BookPage (props) {
    console.log('111')
    return <BookPageOld book={props.book}></BookPageOld>
}