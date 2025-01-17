import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes ,Route } from 'react-router-dom';
import Products from "./components/Products";
import Product from "./components/Product";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/products" Component={Products}/>
        <Route exact path="/product/:id" element= {<Product/>} />

      </Routes>
    </>
  );
}

export default App;
