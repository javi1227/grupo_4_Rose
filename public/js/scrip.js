
  function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () =>{
    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputLastname = qs('#lastname'),
    $lastnameErrors = qs('#lastnameErrors'),
    $form = qs('#form'),
    $dni = qs('#dni'),
    $dniErrors = qs('#dniErrors'),
    $email = qs('#userName'),
    $emailErrors = qs('#userNameError'),
    $pass = qs('#password'),
    $passErrors = qs('#passwordError'),
    $pass2 = qs('#pass2'),
    $pass2Errors = qs('#pass2Errors'),
    $fecha = qs('#fecha'),
    $fechaErrors = qs('#dateErrors'),
    $sexo = qs('#sexo'),
    $sexErrors = qs('#sexErrors'),
    $terms = qs('#flexCheckDefault'),
    $termsErrors = qs('#termsErrors'),
    $file = qs('#formFile'),
    $fileErrors = qs('#fileErrors'),
    $imgPreview = qs('#img-preview'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;



    $email.addEventListener("blur", () => {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = "Requerido";
                $email.classList.add("is-invalid");
                break;
            case !regExAlpha.test($email.value):
                $emailErrors.innerHTML = "email inválido";
                $email.classList.add("is-invalid");
                break;
            default:
                $email.classList.remove("is-invalid");
                $email.classList.add("is-valid");
                $emailErrors.innerHTML = "";
                break;    
        }
    })
    $pass.addEventListener('blur', function(){
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio'
                $pass.classList.add('is-invalid')
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'La contraseña debe tener: entre 6 y 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $pass.classList.add('is-invalid')
                break;    
            default:
                $pass.classList.remove("is-invalid");
                $pass.classList.add('is-valid')
                $passErrors.innerHTML = ""
                break;
        }
    })

})
 