require("express");
const mysql = require("mysql");
const app = express();
//conexion cc xamp
let conexion = mysql.createConnection({
    host: "localhost",
    database: "multifacetic",
    user: "root",
    password: ""
});

app.set("view engine", "ejs");
//
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function (req, res) {
    res.render("registro_turno");
});

app.post("/validar",function (req, res) {
    const datos= req.body;

    let nombre= datos.nombre;
    let apellido= datos.apellido;
    let edad=datos.edad;
    let telefono= datos.telefono

    let registrar= "INSERT INTO reservas (nombre,apellido,edad,telefono) VALUES ('"+nombre+"','"+apellido+"','"+edad+"','"+telefono+"')";
    conexion.query(registrar,function (error){
         if (error){
             throw error;
        }else{
            console.log("datos almacenados correctamente")
        }
    });
});


app.listen(3004, function () {
    console.log("Servidor creado http://localhost:3004");
});
