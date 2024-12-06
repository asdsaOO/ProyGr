import { useState } from "react";

function useFutureFetchData() {
  const [cargando, setCarga] = useState(false);
  const [data, setData] = useState(null);

  const handleData = async (action, input) => {
    try {
      setCarga(true); // Actualiza la carga antes de ejecutar la acción
      const resp = await action(input || null);
      setData(resp);
      setCarga(false); // Asegúrate de que `action` sea una promesa
       // Actualiza el estado con los datos recibidos
      return resp; // Retorna explícitamente la respuesta al componente que lo utiliza
    } catch (error) {
      console.error("Error al ejecutar la acción:", error);
      throw error; // Permite que el error se maneje en el componente llamador
    }
  };

  return [cargando, data, handleData];
}

export { useFutureFetchData };
