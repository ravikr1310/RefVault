
import './App.css';
import Header from './components/common/Headers/Header';
import Footer from './components/common/Footer';
import MainHeader from './components/common/Headers/MainHeader';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<div>Features</div>} />
        <Route path="/pricing" element={<div>Pricing</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
