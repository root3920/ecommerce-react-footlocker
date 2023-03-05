import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Carrito from "./components/Carrito";
import Hombres from "./components/Hombres";
import Mujeres from "./components/Mujeres";
import Sale from "./components/Sale";
import Kids from "./components/Kids";
import { useEffect, useState } from "react";
import { allProducts } from "./functions/funciones";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import ProductoSinglePage from "./components/ProductoSinglePage";
import GoToTop from "./functions/go-to-top";

function App() {
  const [productos, setProductos] = useState("");
  const [compra, setCompra] = useState([]);

  useEffect(() => {
    allProducts(setProductos);
  }, []);

  const sendToCar = (producto) => {
    const compraActual = [...compra, producto];
    setCompra(compraActual);
  };

  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home productos={productos} />} />
          <Route path="/carrito" element={<Carrito compraActual={compra} />} />
          <Route path="/men" element={<Hombres />} />
          <Route path="/women" element={<Mujeres />} />
          <Route path="/kids" element={<Kids />} />
          <Route
            path="/:id"
            element={
              <ProductoSinglePage productos={productos} sendToCar={sendToCar} />
            }
          />
          <Route path="/sale" element={<Sale />} />
          {/* Falta hacer la pagina de ERROR */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />

      <GoToTop />
    </>
  );
}

export default App;
