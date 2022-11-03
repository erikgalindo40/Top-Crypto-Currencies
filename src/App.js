import Footer from "./components/Footer";
import Header from "./components/Header";
import CryptoContainer from "./components/CryptoContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test from "./pages/Test";


function App() {

  return (
    <>
    <Router>
      <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<CryptoContainer />}/>
      <Route path="/test" element={<Test />}/>
    </Routes>
    <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
