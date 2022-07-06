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
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $pass = qs('#password'),
    $passErrors = qs('#passwordError'),
    $pass2 = qs('#password2'),
    $pass2Errors = qs('#pass2Errors'),
    $fecha = qs('#fecha'),
    $fechaErrors = qs('#dateErrors'),
    $sexo = qs('#sexo'),
    $sexErrors = qs('#sexErrors'),
    $terms = qs('#terms'),
    $termsErrors = qs('#termsErrors'),
    $file = qs('#formFile'),
    $fileErrors = qs('#fileErrors'),
    $imgPreview = qs('#img-preview'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;



    $inputName.addEventListener("blur", () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Requerido";
                $inputName.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "Nombre inválido";
                $inputName.classList.add("is-invalid");
                break;
            default:
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid");
                $nameErrors.innerHTML = "";
                break;    
        }
    })
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
    $pass2.addEventListener('blur', function(){
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerHTML = 'Reingresa tu contraseña'
                $pass2.classList.add('is-invalid')
                break;
            case $pass2.value !== $pass.value:
                $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                $pass2.classList.add('is-invalid')
                break;    
            default:
                $pass2.classList.remove("is-invalid");
                $pass2.classList.add('is-valid')
                $pass2Errors.innerHTML = ""
                break;
        }
    })
    $form.addEventListener("submit", function(event) {

        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;

        console.log(elementsForm)

        for (let index = 0; index < elementsForm.length - 1; index++) {
            if(elementsForm[index].value == ""
            && elementsForm[index].name !== "apellido"
            && elementsForm[index].type !== "file"
            || elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Hay errores en el formulario"
                errores = true;
            }
        }

        if(!$terms.checked){
            $terms.classList.add("is-invalid");
            $termsErrors.innerHTML = "Debes los términos y condiciones";
        }

        if(!errores){
            alert("Validado!")
            $form.submit()
        }

    })










})