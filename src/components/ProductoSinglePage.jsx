import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { Title, Category, Price } from "./Producto";

const ProductoSinglePage = ({ productos, sendToCar }) => {
  const { id } = useParams();

  return (
    <ContenedorPrincipal>
      <Contenedor imagen>
        <Imagen src={productos[id - 1].image} alt="" />
      </Contenedor>

      <Contenedor>
        <Title singlePage>{productos[id - 1].title}</Title>
        <Category singlePage>{productos[id - 1].category}</Category>
        <Price>USD {productos[id - 1].price}</Price>
        {/* Hacer una seccion de agregar la cantidad de productos a comprar */}
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
  padding: 0 30px;
  padding-top: 80px;

  ${(props) =>
    props.imagen &&
    css`
      justify-content: center;
      align-items: center;
      padding-top: 0px;
    `}

  @media screen and (max-width: 600px) {
    align-items: center;
    text-align: center;
    height: 50vh;
    padding: 0;
  } ;
`;

const Imagen = styled.img`
  height: 100%;
  width: 100%;
  padding: 20px;

  @media screen and (max-width: 600px) {
    height: 100%;
    width: 70%;
    padding: 20px;
    padding-top: 10px;
  }
`;

const Boton = styled.button`
  height: 45px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 90%;
  border: 0;
  color: white;
  background-color: #ec981a;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
`;

export default ProductoSinglePage;
