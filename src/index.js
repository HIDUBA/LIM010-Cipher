(function(){
let password = 0;
function validar(){
  const claveIngresada = document.getElementById('contraseña').value;
  if (claveIngresada == 'LABORATORIA') {
    document.getElementById('vista1').classList.add('hide');
    document.getElementById('vista2').classList.remove('hide');

  }
  else {
    document.getElementById('resultado').innerHTML="Error! Clave incorrecta";
    document.getElementById('contraseña').value='';
    document.getElementById('contraseña').classList.add('contraseñaroja');
    document.getElementById('contraseña').classList.remove('contraseñanormal');
//hacer foco a la contraseña para que despues de ingresada incorrecta se escriba de frente
    document.getElementById('contraseña').focus();
    password=password + 1;
    if (password==3) {
      document.getElementById('resultado').innerHTML="Uups! Número de intentos excedido";
      document.getElementById("contraseña").disabled = true;
      document.getElementById("boton").disabled = true;
    }
  }
};

function retardar(){
  let puntos='';
  const claveIngresada = document.getElementById('contraseña').value;
  if (claveIngresada == '') {
    document.getElementById('resultado').innerHTML="Ingrese una contraseña!";
    document.getElementById('contraseña').classList.add('contraseñaroja');
    document.getElementById('contraseña').classList.remove('contraseñanormal');
    document.getElementById('contraseña').focus();
  }
  else {
    var cargando = setInterval(function () {
        if (puntos!='.......') {
          puntos+='.';
          document.getElementById('resultado').innerHTML="Ingresando"+puntos;
        }
        else {
          clearInterval(cargando);
          validar();
        }
    }, 100);
  }
}
const boton = document.getElementById('boton');
boton.addEventListener("click", retardar);
}());
