function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () =>{
    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $form = qs('#form'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $pass = qs('#password'),
    $passErrors = qs('#passwordError'),
    $pass2 = qs('#password2'),
    $pass2Errors = qs('#pass2Errors'),
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
                $nameErrors.innerHTML = "Ingrese su usuario";
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
                $emailErrors.innerHTML = "El email es requerido";
                $email.classList.add("is-invalid");
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = "email inválido";
                $email.classList.add("is-invalid");
                break;
            default:
                $email.classList.remove("is-invalid");
               /*  $email.classList.add("is-valid"); */
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
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'Mínimo 8 caracteres, debe contener mayúscula, minúscula, número';
                $pass.classList.add('is-invalid')
                break;    
            default:
                $pass.classList.remove("is-invalid");
               /*  $pass.classList.add('is-valid') */
                $passErrors.innerHTML = ""
                break;
        }
    })
    $file.addEventListener('change',
    function fileValidation(){
        let filePath = inputFile.value
        let allowefExtensions = /(.jpg|.png)$/i
        if(!allowefExtensions.exec(filePath)){
            $fileErrors.innerHTML = 'imagen no válida, solo se permiten con extensión .jpg .png';
            file.value = '';
            return false;
        } else {
            $fileErrors.innerHTML = ''
        }
    })

    $terms.addEventListener('click', function (){
        $terms.value = "on"
        $terms.classList.toggle('is-valid')
        $terms.classList.remove('is-invalid')
        $termsErrors.innerHTML = ""
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

        event.preventDefault();
        let elementsForm = this.elements;
        let errores = false;
    
        for (let index = 0; index < elementsForm.length -1 ; index++) {
            if(elementsForm[index].value == ""
            && elementsForm[index].type !== "file"
            || elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Hay errores en el formulario"
                errores = true;
            }
        };
    
        if(!errores){
            alert("validado!!!!!!")
            $form.submit()
        };
    
    }); 
    var eye = document.getElementById('Eye');
    var input = document.getElementById('password');
    eye.addEventListener("click", function(){
        if(input.type == "password"){
            input.type = "text"
            eye.style.opacity=0.8
        }else{
            input.type = "password"
            eye.style.opacity = 0.2
        }
    })
    var eye2 = document.getElementById('Eye2');
    var input2 = document.getElementById('password2');
      
    function mostrarcontra (eye2 , input2){
        if(input2.type == "password"){
            input2.type = "text";
            eye2.classList.remove("eye2")
            eye2.classList.add("eye2")
        }else{
            input2.type = "password";
            eye2.classList.remove("eye2")
            eye2.classList.add("eye2")
        }
    }
    
    eye2.onclick = () => {
        mostrarcontra(eye2,input2)
    }
    
     
    







})

