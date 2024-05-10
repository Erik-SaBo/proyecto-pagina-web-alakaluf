<?php 
$db ="bd_alakaluf";
$host ="localhost";
$user ="root";
$password = "";

try{
$conexion = new PDO("mysql:host=$host;dbname=$db,$user,$password");
$user = $POST_["usuario"];
$password = $POST_["password"];
$query=$conexion->prepare("SELECT * FROM login WHERE usuario = ':username' AND password = ':password' ");
$result = $query->execute([" ':username' = $username , ':password' = $password "]);
print_r($result);

}
catch(PDOException $e){
    echo "error no conectado a la BD: " . $e->getMessage();
 }
?>