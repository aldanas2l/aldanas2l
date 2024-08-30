let mysql = require("mysql"); // Usar mysql en lugar de myslq
let conexion = mysql.createConnection({ // Usar createConnection en lugar de createConection
    host: "localhost",
    database: "multifacetic",
    user: "root",
    password: ""
});

conexion.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Conexión exitosa");
    }
});

conexion.end();