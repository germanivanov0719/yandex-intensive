import React from 'react';
import books from './constants/books.json';
import Layout from './components/Layout/Layout';

const styles = {
  display: 'flex',
  width: '100vw',
  backgroundColor: 'black',
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export default function App() {
  console.log(styles);
  return (
    <>
    <div id='navbar' style={styles}>
      <h1>Магазин</h1>
      <img src='./constants/cart.svg' alt='shopping cart'/>
    </div>
    <Layout books={books} />
    </>
  );
}
