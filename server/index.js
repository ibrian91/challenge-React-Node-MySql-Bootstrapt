const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require ("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"usuarioscrud"
});


// guardar datos en el post-->formulario

app.post("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const dni = req.body.dni;
    const sexo = req.body.sexo;
    const numTelef = req.body.numTelef;

    db.query('INSERT INTO usuarios(nombre,apellido,dni,sexo,numTelef) VALUES (?,?,?,?,?)',[nombre,apellido,dni,sexo,numTelef],
    (err,result)=>{
        if (err){
            console.log(err);
        } else{
            res.send(result)
        }
    }
    
    
    
    );
});

app.put("/update",(req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const dni = req.body.dni;
    const sexo = req.body.sexo;
    const numTelef = req.body.numTelef;

    db.query('UPDATE usuarios SET nombre=?,apellido=?,dni=?,sexo=?,numTelef=? WHERE id=?',[nombre,apellido,dni,sexo,numTelef,id],
    (err,result)=>{
        if (err){
            console.log(err);
        } else{
            res.send(result)
        }
    }
    
    
    
    );
});


app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;

    db.query('DELETE FROM usuarios WHERE id=?',id,
    (err,result)=>{
        if (err){
            console.log(err);
        } else{
            res.send(result)
        }
    }
    
    
    
    );
});




app.get("/usuarios",(req,res)=>{
    console.log("Filtro de DNI recibido:", req.query.dni); 
    const dniFilter = req.query.dni;
    
    let sql = 'SELECT * FROM usuarios';
    if (dniFilter) {
        sql += ` WHERE dni = '${dniFilter}'`;
    }

    db.query(sql, (err ,result ) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            console.log("Resultados de la consulta:", result);
            res.status(200).json(result);
        }
    });
});



app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})