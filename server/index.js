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


// Ruta para crear una nueva mascota
app.post("/create", (req, res) => {
    const { nombre, especie, edad, nota } = req.body;
  
    // Paso 1: Insertar datos de la mascota en la tabla "mascota"
    db.query(
      "INSERT INTO mascota (nombre, especie, edad) VALUES (?, ?, ?)",
      [nombre, especie, edad],
      (err, mascotaResult) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error al registrar la mascota");
        } else {
          const mascotaId = mascotaResult.insertId;
  
          // Paso 2: Insertar la nota en la tabla "notas"
          db.query(
            "INSERT INTO notas (id_mascota, nota) VALUES (?, ?)",
            [mascotaId, nota],
            (err, notasResult) => {
              if (err) {
                console.log(err);
                res.status(500).send("Error al registrar la nota");
              } else {
                console.log(notasResult.insertId); // Imprime el campo insertId del objeto result, en la consola
                const notaId = notasResult.insertId;
                res.send({ id_nota: notaId });
              }
            }
          );
        }
      }
    );
  });
  


// Obtener todas las mascotas
app.get("/mascotas", (req, res) => {
    db.query(
      "SELECT m.nombre, n.nota FROM mascota AS m JOIN notas AS n ON m.id_mascota = n.id_mascota ORDER BY m.id_mascota DESC LIMIT 5",
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error al obtener las mascotas");
        } else {
          res.send(result);
        }
      }
    );
  });
  

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});