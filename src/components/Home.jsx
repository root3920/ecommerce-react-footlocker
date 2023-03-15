import CarruselHome from "./CarruselHome";
import MenuHome from "./MenuHome";
import styled from "styled-components";
import Slider from "../functions/Slider";

const Home = ({ productos }) => {
  return (
    <div style={{ height: "100%" }}>
      <CarruselHome />
      <ContenedorPrincipal>
        <MenuHome />

        {/* Slider #1 */}
        <Slider
          arrayProductos={productos}
          filtroCategoria="men's clothing"
          tituloCategoria="Favorito para ellos"
        />

        {/* Slider #2 */}
        <Slider
          arrayProductos={productos}
          filtroCategoria="women's clothing"
          tituloCategoria="Favorito para ellas"
        />

        {/* Slider #3 */}
        <Slider
          arrayProductos={productos}
          filtroCategoria="electronics"
          tituloCategoria="Productos Electronicos para ti"
        />

      </ContenedorPrincipal>
    </div>
  );
};

const ContenedorPrincipal = styled.div`
  margin: 0 20px;
`;

export default Home;
