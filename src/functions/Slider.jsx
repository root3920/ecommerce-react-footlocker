import "../styles/slider.css";
import { Producto } from "../components/Producto";
import { ContextoProducto } from "../context/contextoProductos";
import { motion } from "framer-motion";
import { anterior, siguiente } from "./anterior-siguiente-slider";
import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";

const Slider = ({ filtroCategoria, tituloCategoria, link }) => {
  const slider = useRef(null);
  const { productos } = useContext(ContextoProducto);
  let myArray = Array.from(productos);

  return (
    <Container slider>
      <TituloCategoria as={NavLink} to={`/${link}`}>
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
  font-family: "poppins", sans-serif;
  color: black;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  margin-left: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  overflow: hidden;
  text-decoration: none;
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
