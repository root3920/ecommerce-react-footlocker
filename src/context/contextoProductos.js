import React, { useEffect, useState } from "react";
import { allProducts } from "../functions/funciones";
import { AiOutlineShoppingCart } from "react-icons/ai";
import notie from "notie";
import { FaShoppingCart } from "react-icons/fa";

//Creación de Contexto Global de Productos
const ContextoProducto = React.createContext();

const Provedor = ({ children }) => {
  //Declaracion de estados
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
  const [login, setLogin] = useState(false);


  //LLamado a la APi de los productos
  useEffect(() => {
    allProducts(setProductos);
  }, []);

  //Envia los productos al carrito
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

  //Borra los items actuales del carrito
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
    <ContextoProducto.Provider
      value={{
        productos,
        compra,
        total,
        estadoCarrito,
        numItems,
        sendToCar,
        borrarCompra,
        login,
        setLogin,
      }}
    >
      {children}
    </ContextoProducto.Provider>
  );
};

export { Provedor, ContextoProducto };
