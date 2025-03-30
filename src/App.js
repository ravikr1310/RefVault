
import './App.css';
import Header from './components/common/Headers/Header';
import Footer from './components/common/Footer';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home/Home';
import HowItWorks from './components/howitworks';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<div>Features</div>} />
        <Route path="/pricing" element={<div>Pricing</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
