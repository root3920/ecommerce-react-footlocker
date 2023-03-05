import "../styles/slider.css";
import { Producto } from "../components/Producto";
import { motion } from "framer-motion";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRef } from "react";
import { anterior, siguiente } from "./anterior-siguiente-slider";
import styled, { css } from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Slider = ({ arrayProductos, filtroCategoria, tituloCategoria }) => {
  const slider = useRef(null);
  let myArray = Array.from(arrayProductos);

  return (
    <Container slider>
        <TituloCategoria>
        {tituloCategoria}
        <MdOutlineKeyboardArrowRight
          color="#EEB800"
          size={25}
          style={{ marginBottom: "-7px" }}
        />
      </TituloCategoria>
      <motion.div className="slider-container">
        <motion.div className="slider" ref={slider}>
          {/* Funcion Map que imprime todos los productos que existen en esa categoria */}
          {myArray.map((producto) => {
            if (producto.category === filtroCategoria)
              return (
                <Producto
                  imagen={producto.image}
                  titulo={producto.title}
                  categoria={producto.category}
                  key={producto.id}
                  precio={producto.price}
                  id={producto.id}
                />
              );
          })}
        </motion.div>
      </motion.div>
      <div className="contenedorFlechas">
        <BsArrowLeftShort
          onClick={() => anterior(slider)}
          size={40}
          className="leftArrow"
        />

        <BsArrowRightShort
          onClick={() => siguiente(slider)}
          size={40}
          className="leftArrow"
        />
      </div>
    </Container>
  );
};

const TituloCategoria = styled.h2`
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  margin-left: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  overflow: hidden;
`;

const Container = styled.div`

    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 10px 10px 0 0;
    margin-bottom: 20px;

`;

export default Slider;
