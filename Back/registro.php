
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta DB</title>
    <link rel="stylesheet" href="/js/validacionFormularios.js">
    <style type="text/css">
        table {
            border: solid 2px #7e7c7c;
            border-collapse: collapse;
        }
        th, h1 {
            background-color: #edf797;
        }
        td, th {
            border: solid 1px #7e7c7c;
            padding: 2px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="resultado"></div>
    <div id="formulario__mensaje" class="formulario__mensaje">Por favor, completa todos los campos y acepta los términos.</div>

</body>
</html>


<?php

$user = "root";
$pass = "";
$host = "localhost";

$connection = mysqli_connect($host, $user, $pass);

if (!$connection) {
    die("No se ha podido conectar con el servidor: " . mysqli_connect_error());
} else {
    echo "<b><h3>Hemos conectado al servidor</h3></b>";
}

// Nombre de la base datos
$datab = "multifacetic";

// Indicamos seleccionar la base de datos
$db = mysqli_select_db($connection, $datab);

if (!$db) {
    die("No se ha podido encontrar la base de datos: " . mysqli_error($connection));
} else {
    echo "<h3>Base de datos seleccionada:</h3>";
}

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$edad = $_POST["edad"];
$telefono = $_POST["telefono"];

// Insertamos datos de registro al MySQL indicando nombre de la tabla y sus atributos
$instruccion_SQL = "INSERT INTO reservas (nombre, apellido, edad, telefono) VALUES ('$nombre', '$apellido', '$edad', '$telefono')";
$resultado = mysqli_query($connection, $instruccion_SQL);

if (!$resultado) {
    die("Error al insertar datos: " . mysqli_error($connection));
}

$consulta = "SELECT * FROM reservas";

$result = mysqli_query($connection, $consulta);
if (!$result) {
    die("No se ha podido realizar la consulta: " . mysqli_error($connection));
}

echo "<table>";
echo "<tr>";
echo "<th><h1>Id</th></h1>";
echo "<th><h1>Nombre</th></h1>";
echo "<th><h1>Apellido</th></h1>";
echo "<th><h1>Edad</th></h1>";
echo "<th><h1>Teléfono</th></h1>";
echo "</tr>";

while ($colum = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td><h2>" . $colum['id'] . "</td></h2>";
    echo "<td><h2>" . $colum['nombre'] . "</td></h2>";
    echo "<td><h2>" . $colum['apellido'] . "</td></h2>";
    echo "<td><h2>" . $colum['edad'] . "</td></h2>";
    echo "<td><h2>" . $colum['telefono'] . "</td></h2>";
    echo "</tr>";
}
echo "</table>";

mysqli_close($connection);

echo '<a href="index.html"> Volver Atrás</a>';
?>
