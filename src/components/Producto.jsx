import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const Producto = ({
  imagen,
  categoria,
  titulo,
  precio,
  id,
  categoryPage = false,
}) => {
  return categoryPage ? (
    <ContenedorItem catePage>
      <NavLink to={`/${id}`}>
        <ContenedorCategoryPage>
          <Image src={imagen} alt="" />
        </ContenedorCategoryPage>
        <ContenedorCategoryPage texto>
          <Category>{categoria}</Category>
          <Title>{titulo}</Title>
          <Price>USD {precio}</Price>
        </ContenedorCategoryPage>
      </NavLink>
    </ContenedorItem>
  ) : (
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
  ${(props) =>
    props.catePage &&
    css`
      height: 100%;
      padding: 10px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      background-color: white;

      &:hover {
        outline: solid 2px black;
        border-bottom: solid 5px black;
      }
    `}
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

const Category = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  color: #9f9997;
  text-transform: uppercase;
  ${(props) =>
    props.singlePage &&
    css`
      font-size: 14px;
    `}
  ${(props) =>
    props.singlePageDescription &&
    css`
      text-transform: none;
      margin-top: 20px;
      font-size: 12px;
    `}
`;
const Title = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
  ${(props) =>
    props.singlePage &&
    css`
      font-size: 4vmin;
      text-transform: none;
      width: 100%;
      padding-right: 60px;
      &:hover {
        text-decoration: none;
      }
      @media screen and (max-width: 600px) {
        padding: 0 20px;
      } ;
    `}
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: #1c1a45;
  ${(props) =>
    props.singlePage &&
    css`
      margin-top: 20px;
    `}
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

const ContenedorCategoryPage = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.texto &&
    css`
      padding-top: 20px;
      height: 50%;
      align-items: flex-start;
      gap: 5px;
    `}
`;
export { Producto, Title, Category, Price };
