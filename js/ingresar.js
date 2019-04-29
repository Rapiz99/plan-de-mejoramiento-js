function validarform()
{
    var verificar=true;
    var expnombre=/^[a-zA-Z]*$/;
    var correo=/\w+@\w+\.+[a-z]/;;
  
    var formulario=document.getElementById("validar");
    var nombre=document.getElementById("name");
    var apelli=document.getElementById("apellido");
    var corre=document.getElementById("email");
    
    var contra=document.getElementById("clave");
    var cont=0;
    var cont1=0;

    if (corre.value=="") {
        alert("Campo correo obligatorio")
        corre.focus;
        verificar=false;
    }

var expcontra=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
if(!expcontra.test(document.getElementById("clave").value)){
    verificar=false;
    alert("no cumple datos de la contraseña")
}


if (verificar==true) {
    alert("registro exitoso");
}
   return value;
}

window.onload=function()
{
    var enviar=document.getElementById("enviar");
    enviar.onclick=validarform;
}