import './App.css';
import Catalog from './components/catalog';
import Footer from './components/footer';
import NavBar from './components/navBar';
import QuantityPicker from './components/quantityPicker';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from "./components/about";
import Home from "./components/home";
import Cart from "./components/cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
        <Route path="/" element={<Home />} ></Route>
          <Route path="/catalog" element={<Catalog />} ></Route>
          <Route path="/about" element={<About />} ></Route>
        </Routes>


        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;