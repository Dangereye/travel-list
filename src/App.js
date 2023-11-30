import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <div className='app'>
      <Header />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Footer items={items} />
    </div>
  );
}
