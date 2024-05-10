<?php
// Conexión a la base de datos (configura tus credenciales)
$dbhost = "localhost";
$dbuser = "root";
$dbpassword = "";
$dbname = "bd_alakaluf";

$conn =  mysqli_connect($dbhost, $dbuser, $dbpassword, $dbname);



if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibe los datos del formulario
$usuario = $_POST["usuario"];
$password = $_POST["password"];

// Consulta la base de datos para verificar las credenciales

// (implementa tu lógica de autenticación aquí)

// Ejemplo básico: verifica si el usuario es "admin" y la contraseña es "123"
if ($usuario === "usuario" && $clave === "password") {
    header("location/index.html"); // Redirige a la página de bienvenida
} else {
    echo "Credenciales incorrectas";

}

$conn->close();
?>