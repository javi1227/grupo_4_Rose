function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () =>{
    $email = qs('#name'),
    $emailErrors = qs('#userNameError'),
    $form = qs('#formlogin'),
    $pass = qs('#password'),
    $passErrors = qs('#passwordError'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{}$/;



    $email.addEventListener("blur", () => {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = "Email Invalido";
                $email.classList.add("is-invalid");
                break;
            case !regExEmail.test($email.value):
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
                $passErrors.innerHTML = 'Ingrese una contraseña'
                $pass.classList.add('is-invalid')
                break;
            case /* !regExPass. */test($pass.value):
                $passErrors.innerHTML = 'Contraseña Incorrecta';
                $pass.classList.add('is-invalid')
                break;    
            default:
                $pass.classList.remove("is-invalid");
                $pass.classList.add('is-valid')
                $passErrors.innerHTML = ""
                break;
        }
    })
    $form.addEventListener("submit", function(event) {

        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;

        console.log(elementsForm)

        for (let index = 0; index < elementsForm.length - 1; index++) {
        for (let index = 0; index < elementsForm.length - 2; index++) {
            if(elementsForm[index].value == ""
            || elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Email o contraseña erronea"
                errores = true;
            }
        }

        if(!errores){
            $form.submit()
            $formLogin.submit()
        }
        }
    })



    /* var eye = document.getElementById('Eye');
    var input = document.getElementById('password');
    eye.addEventListener("click", function(){
        if(input.type == "password"){
            input.type = "text"
            eye.style.opacity=0.8
        }else{
            input.type = "password"
            eye.style.opacity = 0.2
        }
    }) */
})
 