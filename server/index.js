const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"divoom13",
    database:"paseoperruno"
});


app.post("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const password = req.body.password;

    db.query('INSERT INTO mascota(nombre, password) VALUES(?,?)',[nombre,password],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Mascota registrada con exito");
        }
    }
    );
});


app.get("/mascotas",(req,res)=>{
    db.query('SELECT * FROM mascota',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});




app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})