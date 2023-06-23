import { useState,useEffect } from "react";
import Axios from "axios";

import "./notasview.css";

export default function NotasView() {

  const [mascotas, setMascotas] = useState([]);
  const obtenerMascotas = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/mascotas");
      setMascotas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerMascotas();
  }, []);

  return (
    <div className="NotasView">
      <div id="title-content">  
        <span className="title">       
          <h1>Notas</h1>
        </span>    
      </div>

      <div className="notas-mascotas">
        <div className="notas">
          {
            mascotas.map((mascota) => (
              <div className="item">
                <h2>{mascota.nombre}</h2>
                <p>{mascota.nota}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
