/*const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}*/

const email = document.querySelector('#email');
const pasword = document.querySelector('#password');
const parrafo = document.querySelector('#warnings');

const botonEntrar = document.querySelector('#entrar')

botonEntrar.addEventListener('click',function(e){
    e.preventDefault();
    //console.log('hola');

    let warnings = "";
    let entrar = false;
    let regexPassword = /^.{4,12}$/;
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    if(!regexPassword.test(pasword.value)){
        warnings += `El password no es valido <br>`;
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "enviado";
    }
    
});








