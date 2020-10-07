import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Shop from './pages/shop/Shop';
import ProductPage from './pages/product-page/ProductPage';

import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Route path="/" component={Shop} exact />
          <Route path="/product/:id" component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
