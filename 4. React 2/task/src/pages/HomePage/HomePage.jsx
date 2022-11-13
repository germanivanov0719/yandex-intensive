import Layout from '../../components/Layout/Layout';

export default function HomePage(props) {
    return <Layout books={props.books} genres={props.genres} handleChosenBook={props.handleChosenBook}/>
}
