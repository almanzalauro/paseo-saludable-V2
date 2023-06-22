import {useState} from "react";
import Axios from "axios";


export default function HomeView(){

  const [nombre,setNombre] = useState("");
  const [password,setPassword] = useState("");

  const [mascotaList,setMascotas]= useState([]);

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      nombre:nombre,
      password:password
    }).then(()=>{
      alert("Mascota registrada");
    });
  }


  const getMascotas = ()=>{
    Axios.get("http://localhost:3001/mascotas").then((response)=>{
      setMascotas(response.data);
    });
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <form >
        <input type="text" onChange={(event)=>{
          setNombre(event.target.value);
        }} placeholder="Nombre de la mascota" />
        
        <input type="password" onChange={(event)=>{
          setPassword(event.target.value);
        }} placeholder="Contraseña de la mascota" />
        <button type="submit" onClick={add}>Agregar</button>
      </form>
      <button onClick={getMascotas}>Mostrar mascostas</button>
      
      {
        mascotaList.map((val,key)=>{
          return <div className="">
            <h1>{val.nombre}</h1>
          </div>
        })
      }

    </div>
  );
}
