import {useState} from "react";
import Axios from "axios";

import './homeview.css';


export default function HomeView(){

  const [nombre,setNombre] = useState("");
  const [especie,setEspecie] = useState("");
  const [edad,setEdad] = useState("");
  const [nota, setNota] = useState("");

  
  /*const [mascotaList,setMascotas]= useState([]);*/

  const add = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/create", {
        nombre: nombre,
        especie: especie,
        edad: edad,
        nota:nota,
      });
    
      const mascotaId = response.data.id_mascota; // Obtén el ID de la mascota registrada y lo guardo en mascotaId
      console.log(mascotaId);
      //console.log("ID de mascota:", mascotaId); // Verificar el valor de mascotaId en la consola
      //navigate(`/notes/${mascotaId}`); // Redirige a la vista de notas con el ID de la mascota en la URL
      alert("Mascota registrada con exito");
      
    }
    catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="HomeView">
      <div id="title-content">  
        <span className="title">       
          <h1>Home</h1>
        </span>    
      </div>

      <div className="home-content">
        <div className="home-form">
          <form >
            <input type="text" onChange={(event)=>{
              setNombre(event.target.value);
            }} placeholder="Nombre de tu mascota" />
            
            <input type="text" onChange={(event)=>{
              setEspecie(event.target.value);
            }} placeholder="Especie de tu mascota" />

            <input type="text" onChange={(event)=>{
                setEdad(event.target.value);
            }} placeholder="Edad de tu mascota" />

          </form>
          
        </div>

        <div className="home-nota">
          <input id="mascotaNota" type="text"  onChange={(event) => {
                setNota(event.target.value);
              }}placeholder="Ingresa alguna nota para tu mascota"/>
          <button type="submit" onClick={add}>Agregar</button>
        
        </div>     
      </div>


    </div>
  );
}
