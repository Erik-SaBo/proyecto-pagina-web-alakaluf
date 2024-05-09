
function loguear()
{

var pass1 = document.getElementById("inputa").value;
var pass2 = document.getElementById("inputb").value;
var pass3 = document.getElementById("inputc").value;
var pass4 = document.getElementById("inputd").value;
var pass5 = document.getElementById("inpute").value;

if (pass1 === 'A' || pass1 === 'a') {
    if (pass2 === 'B' || pass2 === 'b') {
        if (pass3 === 'C' || pass3 === 'c') {
            if (pass4 === 'D' || pass4 === 'd') {
                if (pass5 === 'E' || pass5 === 'e') {
                    window.location="pantallas.html";
                } else {
                    alert("Datos incorrectos");
                }
            } else {
                console.log('Datos incorrectos');
            }
        } else {
            console.log('Datos incorrectos');
        }
    } else {
        console.log('Datos incorrectos');
    }
} else {
    console.log('Datos incorrectos');
}

}