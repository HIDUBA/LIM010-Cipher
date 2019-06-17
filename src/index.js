let password = 0;
const claveIngresada = 'LABORATORIA';
const btnIngresar = document.getElementById('btnIngresar')
btnIngresar.addEventListener('click', () => {
  const contraseña = document.getElementById('contraseña').value;
  if (contraseña == claveIngresada) {
    document.getElementById('vista1').classList.add('hide');
    document.getElementById('vista2').classList.remove('hide');
  }
  else {
    document.getElementById('resultado').innerHTML = "Error!!! Clave incorrecta";
    document.getElementById('contraseña').value = '';
    //hacer foco a la contraseña para que se quede el puntero fijo
    document.getElementById('contraseña').focus();
    password = password + 1;
    if (password == 3) {
      document.getElementById('resultado').innerHTML = "Uups! Número de intentos excedido";
      document.getElementById("contraseña").disabled = true;
      document.getElementById("btnIngresar").disabled = true;
    }
  }
});

const btnEjemplo = document.getElementById('btnEjemplo');
btnEjemplo.addEventListener('click', () => {
  document.getElementById('vista3').classList.remove('hide');
  document.getElementById('vista2').classList.add('hide');
});


const btnCifrar = document.getElementById('btnCifrar');
btnCifrar.addEventListener('click', () => {
  const msjIngresado = document.getElementById('msjIngresado').value;
  const clave = document.getElementById('clave').value;
  const msjResultado = document.getElementById('msjResultado');
  msjResultado.innerHTML = window.cipher.encode(clave, msjIngresado);
});

const btnDescifrar = document.getElementById('btnDescifrar');
btnDescifrar.addEventListener('click', () => {
  const msjIngresado = document.getElementById('msjIngresado').value;
  const clave = document.getElementById('clave').value;
  const msjResultado = document.getElementById('msjResultado');
  msjResultado.innerHTML = window.cipher.decode(clave, msjIngresado);
});

const limpiar = () => {
  const msjResultado = document.getElementById('msjResultado');
  document.getElementById('msjIngresado').value = "";
  msjResultado.innerHTML = "";
};

const btnBorrar = document.getElementById('btnBorrar');
btnBorrar.addEventListener('click', () =>
  limpiar());

const btnSalir = document.getElementById('btnSalir');
btnSalir.addEventListener('click', () => {
  document.getElementById('vista1').classList.remove('hide');
  document.getElementById('vista2').classList.add('hide');
  document.getElementById('contraseña').value = "";
  limpiar();
});

const btnRegresar = document.getElementById('btnRegresar');
btnRegresar.addEventListener('click', () => {
  document.getElementById('vista2').classList.remove('hide');
  document.getElementById('vista3').classList.add('hide');
  limpiar();
});

