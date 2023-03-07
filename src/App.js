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
import notie from "notie";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

function App() {
  
  //Estados
  const [productos, setProductos] = useState("");
  const [compra, setCompra] = useState([]);
  const [total, setTotal] = useState(0);
  const [estadoCarrito, setEstadoCarrito] = useState(
    <AiOutlineShoppingCart
      color="white"
      size={25}
      style={{ cursor: "pointer", marginTop: "5px" }}
    />
  );
  const [numItems, setNumItems] = useState(0);

  //Llamada a Api para mostrar productos
  useEffect(() => {
    allProducts(setProductos);
  }, []);

  //Envia items al carrito
  const sendToCar = (producto) => {
    const compraActual = [...compra, producto];

    //INICIO DE COMPROBACION SI EL ITEM ESTA EN EL CARRITO
    if (compra.length === 0) {
      setCompra(compraActual);
      setTotal(total + producto.price * producto.cantidad);
      setNumItems(compraActual.length);
    } else {
      const nuevaCompra = [...compra];
      //Comprobamos si en el carrito ya existe el elemento a Agregar
      const yaEstaEnCarrito =
        nuevaCompra.filter((productoDeCarrito) => {
          return productoDeCarrito.id === producto.id;
        }).length > 0;

      //Si ya esta en carrito actualizamos la cantidad
      if (yaEstaEnCarrito) {
        nuevaCompra.forEach((productoDeCarrito, index) => {
          if (productoDeCarrito.id === producto.id) {
            const cantidad = nuevaCompra[index].cantidad;

            nuevaCompra[index] = {
              title: producto.title,
              image: producto.image,
              category: producto.category,
              description: producto.description,
              price: producto.price,
              cantidad: producto.cantidad + cantidad,
              id: producto.id,
            };
          }
        });
        //Si no esta en carrito lo agregamos con cantidad 1
      } else {
        nuevaCompra.push({
          title: producto.title,
          image: producto.image,
          category: producto.category,
          description: producto.description,
          price: producto.price,
          cantidad: producto.cantidad,
          id: producto.id,
        });
      }
      setTotal(total + producto.price * producto.cantidad);
      setCompra(nuevaCompra);
      setNumItems(nuevaCompra.length);
    }

    //Añade una Notificacion en la pantalla cuando el usuario de clic en agregar al carrito
    notie.alert({
      type: 1,
      text: "¡Producto agregado al carrito!",
      time: 2,
      position: "bottom",
    });

    //Cambia el estado del Carrito
    setEstadoCarrito(
      <FaShoppingCart
        color="white"
        size={23}
        style={{ cursor: "pointer", marginTop: "5px" }}
      />
    );
  };

  //Borra la compra actual del carrito
  const borrarCompra = () => {
    setCompra([]);
    setEstadoCarrito(
      <AiOutlineShoppingCart
        color="white"
        size={25}
        style={{ cursor: "pointer", marginTop: "5px" }}
      />
    );
    setNumItems(0);
    setTotal(0);

    //Notificacion de Pedido Cancelado
    if (numItems > 0) {
      notie.alert({
        type: "error",
        text: "¡Pedido Cancelado!",
        time: 2,
        position: "bottom",
      });
    } else {
      notie.alert({
        type: "warning",
        text: "¡Haz una compra primero!",
        time: 2,
        position: "bottom",
      });
    }
  };

  return (
    <>
      <Header estadoCarrito={estadoCarrito} itemsEnCarro={numItems} />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home productos={productos} />} />
          <Route
            path="/carrito"
            element={
              <Carrito
                compraActual={compra}
                totalCompra={total}
                borrarCompra={borrarCompra}
              />
            }
          />
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
        <Footer />
      </main>

      <GoToTop />
    </>
  );
}

export default App;
