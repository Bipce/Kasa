import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Lodging from "./pages/Losging";
import About from "./pages/About";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <div className="scroll-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lodging" element={<Lodging />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
