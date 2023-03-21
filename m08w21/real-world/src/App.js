import './App.css';

import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import Nav from './components/Nav';
import StyledComponent from './components/StyledComponent';
import Parent from './components/context/Parent';
import RefDemo from './components/references/RefDemo';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h2>Real World React</h2>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/hidden" element={<h2>This is the admin page!</h2>} />
          <Route path="/styled" element={<StyledComponent />} />
          <Route path="/context" element={<Parent />} />
          <Route path="/reference" element={<RefDemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
