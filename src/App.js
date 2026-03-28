import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import { useEffect, useState } from 'react';
import Footer from './componentes/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
function App() {
  const [products, setProducts] = useState ([]);
  const [showSidebarCart, setShowSidebarcart] = useState (false);
  useEffect(() => {
    fetch('/db.json')
    .then((res) => res.json())
    .then((data) => setProducts(data.products));
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar setShowSidebarcart={setShowSidebarcart} />
        <main>
          <Routes>
            <Route path="/" element={ <HomePage products={products}
            setShowSidebarcart={setShowSidebarcart}
            showSidebarCart={showSidebarCart}
            />}/>
            <Route path="/produtos" element={ <ProductsPage products={products} />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
