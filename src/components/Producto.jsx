import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const Producto = ({ imagen, categoria, titulo, precio, id }) => {
  return (
    <ContenedorItem>
      <NavLink to={`/${id}`}>
        <Contenedor>
          <Image src={imagen} alt="" />
        </Contenedor>
        <Contenedor texto>
          <Category>{categoria}</Category>
          <Title>{titulo}</Title>
          <Price>USD {precio}</Price>
        </Contenedor>
      </NavLink>
    </ContenedorItem>
  );
};
const ContenedorItem = styled.div`
  width: 240px;
  height: 100%;
  padding: 20px;
  margin: 0 30px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    Title {
      text-decoration: underline;
    }
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

const Category = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  font-size: 12px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;
  color: #9f9997;
  text-transform: uppercase;
`;
const Title = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  font-size: 14px;
  font-weight: bold;
  font-family: "Rubik", sans-serif;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }

  ${props => props.singlePage && css`
  font-size: 20px;
  margin-top: 50px;
  text-transform: none;

  &:hover {
    text-decoration: none;

  }
  `}
`;

const Price = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  font-size: 25px;
  font-weight: bold;
  font-family: "Rubik", sans-serif;
  color: #1c1a45;
`;

const Contenedor = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.texto &&
    css`
      padding-top: 20px;
      height: 100%;
      align-items: flex-start;
      gap: 5px;
    `}
`;
export { Producto, Title };
