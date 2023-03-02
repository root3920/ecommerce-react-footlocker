import styled from "styled-components";
import { NavLink } from "react-router-dom";
import hombre from "../images/hombre.png";
import mujer from "../images/mujer.png";
import kids from "../images/kids.png";
import iphone from "../images/iphone.png";
import { AiTwotoneShopping } from "react-icons/ai";

const MenuHome = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <H1>
        <span>Foot Locker</span> Online Shop{" "}
        <AiTwotoneShopping style={{ marginBottom: "-3px" }} />
      </H1>
      <Contenedor>
        <Boton as={NavLink} to="/men">
          <Image src={hombre} alt="" />
          Hombres
        </Boton>
        <Boton as={NavLink} to="/women">
          <Image src={mujer} alt="" />
          Mujeres
        </Boton>
        <Boton as={NavLink} to="/kids">
          <Image src={kids} alt="" />
          Niños
        </Boton>
        <Boton as={NavLink} to="/sale">
          <Image src={iphone} alt="" />
          Sale
        </Boton>
      </Contenedor>
    </>
  );
};

const H1 = styled.h1`
  font-family:  'Poppins', sans-serif;
  text-align: center;
  color: black;
  overflow: hidden;
  font-size: 4.5vmin;
  margin-top: 10px;
}

  span{
  background-color: black;
  color: white;
  border: solid 8px black;
}
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  padding: 10px 0;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Boton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20%;
  max-height: 120px;
  font-family: "Poppins", sans-serif;
  font-size: 3vmin;
  text-decoration: none;
  margin: 0 auto;
  color: black;
`;

const Image = styled.img`
  height: 100%;
  width: 35%;

  @media screen and (max-width: 750px) {
    height: 100%;
    width: 80%;
  }
`;
export default MenuHome;
