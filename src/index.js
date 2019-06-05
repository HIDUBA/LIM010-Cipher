(function(){
let password = 0;
function validar(){

  const claveIngresada = document.getElementById('contraseña').value;
  if (claveIngresada == 'LABORATORIA') {
    document.getElementById('resultado').innerHTML='Bienvenida a Mujeres Unidas';
  }
  else {
    document.getElementById('resultado').innerHTML="Error! Clave incorrecta";
    password=password + 1;
    if (password==3) {
      document.getElementById('resultado').innerHTML="Uups! Número de intentos excedido";
      document.getElementById("contraseña").disabled = true;
      document.getElementById("boton").disabled = true;
    }
  }
};
const boton = document.getElementById('boton');
boton.addEventListener("click", validar);
}());
