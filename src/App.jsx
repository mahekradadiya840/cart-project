import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;