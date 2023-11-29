import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Form />
      <PackingList />
      <Footer />
    </div>
  );
}
