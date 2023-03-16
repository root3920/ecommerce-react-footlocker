import { ContextoProducto } from "../context/contextoProductos";
import { useContext } from "react";

const usePrecioTotal = () => {
  const { total } = useContext(ContextoProducto);
  
  const impuesto = (a, b) => (a * b) / 100;
  const totalidad = (a, b) => a + b;

  const impuestos = impuesto(total, 7);

  const precioTotal = totalidad(total, impuestos);

  return {
    precioTotal,
    impuestos,
  };
};

export { usePrecioTotal };
