
function qs(element) {
    return document.querySelector(element)
    }
    
    window.addEventListener("load", () =>{
        let $name = qs('#name'),
        $nameError = qs('#nameError'),
        $phone = qs("#phone"),
        $phoneError = qs('#phoneError'),
        $street = qs("#street"),
        $streetError = qs("#streetError")
        $number = qs("#number"),
        $numberError = qs('#numberError'),
        $province = qs('#province'),
        $provinceError = qs('#provinceError'),
        $city = qs('#city'),
        $cityError = qs('#cityError'),
        $termsErrors = qs('#termsErrors'),
        $file = qs('#avatar'),
        $fileErrors = qs('#fileErrors'),
        $imgPreview = qs('#img-preview'),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExDNI = /^[0-9]{7,8}$/,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    
    
        $name.addEventListener('blur', () => {
            switch(true){
                case !$name.value.trim():
                    $nameError.innerHTML = "Ingresa Nombre";
                    $name.classList.add('error-message');
                    break;
                case !regExAlpha.test($name.value):
                    $nameError.innerHTML = "Nombre no válido";
                    $name.classList.add('error-message');
                    break;
                default:
                    $name.classList.remove('error-message');
                    $nameError.innerHTML = "";
                    break;
            }
        })
    
        $phone.addEventListener('blur', () => {
            switch(true){
                case !$phone.value.trim():
                    $phoneError.innerHTML = "Ingresa teléfono";
                    $phone.classList.add('error-message');
                    break;
                case !regExPhone.test($phone.value):  
                    $phoneError.innerHTML = "Teléfono inválido";
                    $phone.classList.add('error-message');
                    break;
                default:
                    $phone.classList.remove('error-message');
                    $phoneError.innerHTML = "";
                    break;
            }
        })
    
        $street.addEventListener("blur", () => {
            switch (true) {
                case !$street.value.trim():
                    $streetError.innerHTML = "Ingresa Dirección ";
                    $street.classList.add("is-invalid");
                    break;
                case !regExAlpha.test($street.value):
                    $streetError.innerHTML = "Nombre inválido";
                    $street.classList.add("is-invalid");
                    break;
                default:
                    $street.classList.remove("is-invalid");
                    $street.classList.add("is-valid");
                    $streetError.innerHTML = "";
                    break;    
            }
        })
    
        $number.addEventListener('blur', () => {
            if(!$number.value.trim() || regExNumber.test($number.value)){
                $numberError.innerHTML = "Ingresa número de calle";
                $number.classList.add('error-message');
            } else {
                $number.classList.remove('error-message');
                $numberError.innerHTML = "";
            }
        })
        
        $province.addEventListener('blur', () => {
            if(!$province.value.trim()){
                $provinceError.innerHTML = "Ingresa provincia";
                $province.classList.add('error-message');
            } else {
                $province.classList.remove('error-message');
                $provinceError.innerHTML = "";
            }
        })
    
        $city.addEventListener('blur', () => {
            if(!$city.value.trim()){
                $cityError.innerHTML = "Ingresa localidad";
                $city.classList.add('error-message');
            } else {
                $city.classList.remove('error-message');
                $cityError.innerHTML = "";
            }
        })
    
        $file.addEventListener('change', 
        function fileValidation(){
            let filePath = $file.value, //Capturo el valor del input
                allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
            if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
                $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
                $file.value = '';
                $imgPreview.innerHTML = '';
                return false;
            }else{
                // Image preview
                console.log($file.files);
                if($file.files && $file.files[0]){
                    let reader = new FileReader();
                    reader.onload = function(e){
                        $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                    };
                    reader.readAsDataURL($file.files[0]);
                    $fileErrors.innerHTML = '';
                    $file.classList.remove('is-invalid')
                }
            }
        })
        
    
    })
    