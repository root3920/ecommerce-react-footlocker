import CarruselHome from "./CarruselHome";
import MenuHome from "./MenuHome";
import styled from "styled-components";
import Slider from "../functions/Slider";

const Home = () => {
  return (
    <div style={{ height: "100%" }}>
      <CarruselHome />
      <ContenedorPrincipal>
        <MenuHome />

        {/* Slider #1 */}
        <Slider
          filtroCategoria="men's clothing"
          tituloCategoria="Favorito para ellos"
          link='men'
        />

        {/* Slider #2 */}
        <Slider
          filtroCategoria="women's clothing"
          tituloCategoria="Favorito para ellas"
          link='women'
        />

        {/* Slider #3 */}
        <Slider
          filtroCategoria="electronics"
          tituloCategoria="Productos Electronicos para ti"
          link='electronics'
        />
      </ContenedorPrincipal>
    </div>
  );
};

const ContenedorPrincipal = styled.div`
  margin: 0 20px;
`;

export default Home;
