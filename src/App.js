import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Carrito from "./components/Carrito";
import Hombres from "./components/Hombres";
import Mujeres from "./components/Mujeres";
import Sale from "./components/Sale";
import { Header } from "./components/Header";
import Kids from "./components/Kids";
import { useEffect, useState } from "react";
import { allProducts } from "./functions/funciones";
import Footer from "./components/Footer";

function App() {
  const [productos, setProductos] = useState("");

  useEffect(() => {
    allProducts(setProductos);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home productos={productos} />} />
        <Route path="/shop" element={<Carrito />} />
        <Route path="/men" element={<Hombres />} />
        <Route path="/women" element={<Mujeres />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />

        {/* Falta hacer la pagina de ERROR */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
