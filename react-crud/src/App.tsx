import './App.css';
import Products from './admin/Products'
import Main from './main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsCreate from './admin/ProductsCreate';
import ProductsEdit from './admin/ProductsEdit';

function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path="/admin/products" element={<Products />} />
              <Route path="/admin/products/create" element={<ProductsCreate />} />
              <Route path="/admin/products/:id/edit" element={<ProductsEdit />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
