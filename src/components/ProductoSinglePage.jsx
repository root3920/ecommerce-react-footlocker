import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { Title } from "./Producto";

const ProductoSinglePage = ({ productos }) => {
  const { id } = useParams();
  return (
    <ContenedorPrincipal>
      <Contenedor imagen><Imagen src={productos[id - 1].image} alt="" /></Contenedor>
      <Contenedor>
        <Title singlePage>{productos[id - 1].title}</Title>
        </Contenedor>
      <Contenedor tercer>Producto: {productos[id - 1].category}</Contenedor>
      <Contenedor tercer>Producto: {productos[id - 1].category}</Contenedor>
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
width: 100%
height: 100;
display: grid;
grid-template-rows: 88vh 38vh 38vh;
grid-template-columns: 60% 40%;

`;

const Contenedor = styled.div`
width: 100%;
padding: 20px;

${props => props.tercer && css`
    background-color: green;
    grid-column: 1 / 3;
  `}

  ${props => props.imagen && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const Imagen = styled.img`
height: 90%;
width: 60%;
`;


export default ProductoSinglePage;
