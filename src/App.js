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
import { Login } from "./components/Login";
import Register from "./components/Register";

function App() {
  const [buscando, setBuscando] = useState(true);
  const [abrirModal, setAbrirModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  return (
    <>
      <Header
        setBuscando={setBuscando}
        setBusqueda={setBusqueda}
        setAbrirModal={setAbrirModal}
      />
      <main className="App">
        <Modal abrirModal={abrirModal} setAbrirModal={setAbrirModal} />
        <Routes>
          <Route
            path="/"
            element={
              buscando ? <Home /> : <Categoria category={busqueda} link={""} />
            }
          />
          <Route
            path="/carrito"
            element={
              buscando ? (
                <Carrito setAbrirModal={setAbrirModal} />
              ) : (
                <Categoria category={busqueda} link={""} />
              )
            }
          />
          <Route
            path="/men"
            element={
              buscando ? (
                <Categoria category="men's clothing" link="men" />
              ) : (
                <Categoria category={busqueda} link={""} />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/women"
            element={
              buscando ? (
                <Categoria category="women's clothing" link="women" />
              ) : (
                <Categoria category={busqueda} link={""} />
              )
            }
          />
          <Route
            path="/electronics"
            element={
              buscando ? (
                <Categoria category="electronics" link="electronics" />
              ) : (
                <Categoria category={busqueda} link={""} />
              )
            }
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
