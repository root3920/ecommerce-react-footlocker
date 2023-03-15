import axios from "axios";

const allProducts = async (state) => {
  const peticion = await axios.get("https://fakestoreapi.com/products");
  state(peticion.data);
  console.log(peticion.data)
};

export { allProducts };
