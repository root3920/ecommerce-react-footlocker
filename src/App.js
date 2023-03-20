import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Carrito } from "./components/Carrito";
import Categoria from "./components/Categoria";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ProductoSinglePage from "./components/ProductoSinglePage";
import GoToTop from "./functions/go-to-top";
import { useState } from "react";
import Modal from "./components/Modal";
import Login from "./components/Login";

function App() {
  const [buscando, setBuscando] = useState(true);
  const [abrirModal, setAbrirModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [login, setLogin] = useState(false);

  return (
    <>
      <Header
        setBuscando={setBuscando}
        setBusqueda={setBusqueda}
        setAbrirModal={setAbrirModal}
      />
      <main className="App">
        <Modal abrirModal={abrirModal} setAbrirModal={setAbrirModal} setLogin={setLogin} />
        <Routes>
          <Route
            path="/"
            element={buscando ? <Home /> : <Categoria category={busqueda} />}
          />
          <Route
            path="/carrito"
            element={<Carrito setAbrirModal={setAbrirModal} />}
          />
          <Route
            path="/men"
            element={<Categoria category="men's clothing" link="men" />}
          />
          <Route path="/login" element={<Login logueado={login} />} />
          <Route
            path="/women"
            element={<Categoria category="women's clothing" link="women" />}
          />
          <Route
            path="/electronics"
            element={<Categoria category="electronics" link="electronics" />}
          />
          <Route path="/:id" element={<ProductoSinglePage />} />
          {/* Falta hacer la pagina de ERROR */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </main>

      <GoToTop />
    </>
  );
}

export default App;
