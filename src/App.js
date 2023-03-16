import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Carrito from "./components/Carrito";
import Categoria from "./components/Categoria";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import ProductoSinglePage from "./components/ProductoSinglePage";
import GoToTop from "./functions/go-to-top";

function App() {
  //Conectar al contexto global

  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route
            path="/men"
            element={<Categoria category="men's clothing" link="men" />}
          />
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
