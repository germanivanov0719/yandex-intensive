import books from './constants/books.json';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const styles = {
  display: 'flex',
  width: '100vw',
  backgroundColor: 'black',
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export default function App() {
  return (
    <>
    <div id='navbar' style={styles}>
      <h1>Магазин</h1>
      <img src='./cart.svg' alt='shopping cart'/>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout books={books} />}>
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}
