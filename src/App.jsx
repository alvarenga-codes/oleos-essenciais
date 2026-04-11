import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import ScrollToTop from './components/ScrollToTop';
import HowToUse from './pages/HowToUse/HowToUse';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:slug" element={<Product />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/como-utilizar" element={<HowToUse />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
