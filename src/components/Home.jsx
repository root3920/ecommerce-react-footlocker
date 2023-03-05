import CarruselHome from "./CarruselHome";
import MenuHome from "./MenuHome";
import { Categoria } from "./Categoria";
import styled from "styled-components";
import Slider from "../functions/Slider";

const Home = ({ productos }) => {
  return (
    <div style={{height: '100%'}}>
      <CarruselHome />
      <ContenedorPrincipal>
        <MenuHome />
        <Categoria
          productos={productos}
          tituloCategoria="Favorito para ellos"
          filtroCategoria="men's clothing"
        />
        {/* Slider #1 */}
        <Slider arrayProductos={productos} filtroCategoria="men's clothing" />

        <Categoria
          productos={productos}
          tituloCategoria="Favorito para ellas"
        />
        {/* Slider #2 */}
        <Slider arrayProductos={productos} filtroCategoria="women's clothing" />

        <Categoria
          productos={productos}
          tituloCategoria="Productos Electronicos para ti"
        />
        {/* Slider #3 */}
        <Slider arrayProductos={productos} filtroCategoria="electronics" />
      </ContenedorPrincipal>
 
    </div>
  );
};

const ContenedorPrincipal = styled.div`
  margin: 0 20px;
`;

export default Home;
