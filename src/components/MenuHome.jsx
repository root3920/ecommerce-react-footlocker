import styled from "styled-components";
import { IoManSharp, IoWoman } from "react-icons/io5";
import { TbMoodKid } from "react-icons/tb";
import { AiOutlinePercentage } from "react-icons/ai";
import { NavLink } from "react-router-dom";

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
        <span>Foot Locker</span> Online Shop
      </H1>
      <Contenedor>
        <Boton as={NavLink} to="/men">
          <IoManSharp color="#165CCF" style={{ fontSize: "180%" }} />
          Hombres
        </Boton>
        <Boton as={NavLink} to="/women">
          <IoWoman color="#CF16C1" style={{ fontSize: "180%" }} />
          Mujeres
        </Boton>
        <Boton as={NavLink} to="/kids">
          <TbMoodKid color="#128D2A" style={{ fontSize: "180%" }} />
          Niños
        </Boton>
        <Boton as={NavLink} to="/sale">
          <AiOutlinePercentage color="#EA1754" style={{ fontSize: "180%" }} />
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
  font-size: 3.5vmin;
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
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Boton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 60px;
  font-family: "Poppins", sans-serif;
  font-size: 3vmin;
  text-decoration: none;
  margin: 0px auto;
  color: black;
  gap: 8px;
  background-color: #8b8b8b0e;
`;
export default MenuHome;
