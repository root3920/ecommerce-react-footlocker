import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { Title, Category, Price } from "./Producto";
import { useState } from "react";
import Slider from "../functions/Slider";

const ProductoSinglePage = ({ productos, sendToCar }) => {
  const { id } = useParams();
  const [cantidad, setCantidad] = useState(1);

  const productoActual = {
    title: productos[id - 1].title,
    image: productos[id - 1].image,
    category: productos[id - 1].category,
    description: productos[id - 1].description,
    price: productos[id - 1].price,
    cantidad: cantidad,
    id: productos[id - 1].id,
  }

  const restarCantidad = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const sumarCantidad = () => setCantidad(cantidad + 1);

  return (
    <>
      <ContenedorPrincipal>
        <Contenedor imagen>
       
          <Imagen src={productos[id - 1].image} alt="" />
        </Contenedor>

        <Contenedor>
          <Title singlePage>{productoActual.title}</Title>
          <Category singlePage>{productoActual.category}</Category>
          <Category singlePageDescription>
            {productoActual.description}
          </Category>
          <Price singlePage>USD {productoActual.price}</Price>

          {/* Funcion de agregar la cantidad de productos a comprar */}
          <div style={{ display: "flex", padding: "20px 0" }}>
            <p>Cantidad</p>
            <BotonCantidad onClick={restarCantidad}>-</BotonCantidad>
            <p>{cantidad}</p>
            <BotonCantidad onClick={sumarCantidad}>+</BotonCantidad>
          </div>
          <Boton onClick={() => sendToCar(productoActual)}>
            Añadir al Carrito
          </Boton>
        </Contenedor>

        {/* ¡¡FALTA AGREGAR DESCRIPCION DEL PRODUCTO Y CARRUSEL DE RECOMENDACION!! */}
      </ContenedorPrincipal>

      <Contenedor carrusel>
        <Slider
          arrayProductos={productos}
          filtroCategoria={productoActual.category}
          tituloCategoria="Te podria interesar"
        />
      </Contenedor>
    </>
  );
};

const ContenedorPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 100%;
  } ;
`;

const Contenedor = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 35px;
  margin-top: 40px;
  ${(props) =>
    props.imagen &&
    css`
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-top: 60px;
    `}
  ${(props) =>
    props.carrusel &&
    css`
      padding: 20px;
    `}
  @media screen and (max-width: 600px) {
    align-items: center;
    text-align: center;
    height: 100%;
    margin-top: 10px;
    ${(props) =>
      props.imagen &&
      css`
        margin-top: 50px;
      `}
    ${(props) =>
      props.carrusel &&
      css`
        padding: 20px;
        align-items: start;
        text-align: start;
      `}
  } ;
`;

const Imagen = styled.img`
  max-height: 450px;
  max-width: 70%;
  @media screen and (max-width: 600px) {
    max-height: 300px;
    max-width: 100%;
  }
`;

const Boton = styled.button`
  height: 45px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 80%;
  border: 0;
  color: white;
  background-color: #ec981a;
  font-family: "Poppins", sans-serif;
`;

const BotonCantidad = styled.button`
  background-color: #c1c1c1;
  border: solid 1px black;
  border-radius: 100%;
  width: 22px;
  height: 22px;
  margin: 0 5px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

export default ProductoSinglePage;