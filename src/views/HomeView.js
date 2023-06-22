import {useState} from "react";
import Axios from "axios";
import './homeview.css';


export default function HomeView(){

  const [nombre,setNombre] = useState("");
  const [especie,setEspecie] = useState("");
  const [edad,setEdad] = useState("");
  
  /*const [mascotaList,setMascotas]= useState([]);*/

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      nombre:nombre,
      especie:especie,
      edad:edad,
    }).then(()=>{
      alert("Mascota registrada");
    });
  }


  /*const getMascotas = ()=>{
    Axios.get("http://localhost:3001/mascotas").then((response)=>{
      setMascotas(response.data);
    });
  }*/

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

            <button type="submit" onClick={add}>Agregar</button>
          </form>
       
          </div>
      </div>
    </div>
  );
}
