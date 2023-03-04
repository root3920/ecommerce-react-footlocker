import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { Title, Category, Price } from "./Producto";
import { useState } from "react";

const ProductoSinglePage = ({ productos, sendToCar }) => {
  const { id } = useParams();
  const [cantidad, setCantidad] = useState(0);

  const restarCantidad = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };

  const sumarCantidad = () => setCantidad(cantidad + 1);

  return (
    <ContenedorPrincipal>
      <Contenedor imagen>
        <Imagen src={productos[id - 1].image} alt="" />
      </Contenedor>

      <Contenedor>
        <Title singlePage>{productos[id - 1].title}</Title>
        <Category singlePage>{productos[id - 1].category}</Category>
        <Price singlePage>USD {productos[id - 1].price}</Price>
        {/* Hacer una seccion de agregar la cantidad de productos a comprar */}
        <div style={{ display: "flex", padding: "20px 0" }}>
          <p>Cantidad</p>
          <BotonCantidad onClick={restarCantidad}>-</BotonCantidad>
          <p>{cantidad}</p>
          <BotonCantidad onClick={sumarCantidad}>+</BotonCantidad>
        </div>
        <Boton onClick={() => sendToCar(productos[id - 1])}>
          Añadir al Carrito
        </Boton>
      </Contenedor>

      {/* ¡¡FALTA AGREGAR DESCRIPCION DEL PRODUCTO Y CARRUSEL DE RECOMENDACION!! */}
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
width: 100%
height: 100%;
display: flex;

@media screen and (max-width: 600px){
  flex-direction: column;
};
`;

const Contenedor = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  ${(props) =>
    props.imagen &&
    css`
      justify-content: center;
      align-items: center;
      padding-top: 0;
    `}

  @media screen and (max-width: 600px) {
    align-items: center;
    text-align: center;
    height: 50vh;
    padding-top: 0;
  } ;
`;

const Imagen = styled.img`
  max-height: 500px;
  max-width: 100%;
  padding: 20px;

  @media screen and (max-width: 600px) {
    max-height: 500px;
    max-width: 100%;
    padding: 20px;
    margin-top: 20px;
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
