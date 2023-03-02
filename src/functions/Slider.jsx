import "../styles/slider.css";
import Producto from "../components/Producto";
import { motion } from "framer-motion";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRef } from "react";
import { Container } from "../components/Categoria";
import { anterior, siguiente } from "./anterior-siguiente-slider";

const Slider = ({ arrayProductos, filtroCategoria }) => {
  const slider = useRef(null);
  let myArray = Array.from(arrayProductos);

  return (
    <Container slider>
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

export default Slider;
