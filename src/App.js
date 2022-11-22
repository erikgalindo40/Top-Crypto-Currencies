import Footer from "./components/Footer";
import Header from "./components/Header";
import CryptoContainer from "./components/CryptoContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CryptoDetail from "./pages/CryptoDetail";


function App() {

  return (
    <>
    <Router>
      <div className="container">
    <Header />
    <Routes>
      <Route path="/Top-Crypto-Currencies" element={<CryptoContainer />}/>
      <Route path="/cryptodetail" element={<CryptoDetail />}/>
    </Routes>
    <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
