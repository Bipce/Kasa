import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Lodging from "./pages/Losging";
import About from "./pages/About";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging" element={<Lodging />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
