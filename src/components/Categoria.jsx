import styled, { css } from "styled-components";
// Usar para activar el carrusel y producto
// import Producto from "./Producto";
// import { Carousel } from "@trendyol-js/react-carousel";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Categoria = ({ tituloCategoria }) => {
  return (
    <Container>
      {/* Titulo */}
      <TituloCategoria>
        {tituloCategoria}
        <MdOutlineKeyboardArrowRight
          color="#EEB800"
          size={25}
          style={{ marginBottom: "-7px" }}
        />
      </TituloCategoria>
      {/* Inicio de Carrusel */}
      {/* {myArray.map((producto) => {
          return (
            <Producto
              imagen={producto.image}
              titulo={producto.title}
              categoria={producto.category}
              key={producto.id}
              precio={producto.price}
            />
          );
        })} */}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px 10px 0 0;

  ${(props) =>
    props.slider &&
    css`
      padding: 10px 20px;
      margin-bottom: 20px;
      box-shadow: none;
      border-radius: 0 0 10px 10px;
    `}
`;
const TituloCategoria = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  margin-left: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  overflow: hidden;
`;

export { Categoria, Container };
