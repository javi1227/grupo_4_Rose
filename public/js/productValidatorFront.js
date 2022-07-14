function qs(element) {
    return document.querySelector(element)
}
window.addEventListener("load", () =>{
    let $inputName = qs('#name'),
    $inputPrice= qs('#price'),
    $inputDiscount = qs('#discount'),
    $inputCategory = qs('#category'),
    $inputFile = qs('#image'),
    $inputStock = qs('#stock'),
    $inputDescription = qs('#description'),

    $nameErrors = qs('#nameErrors'),
    $priceErrors = qs('#priceErrors'),
    $discountErrors = qs('#DiscountErrors'),
    $categoryErrors = qs('#categoryErrors'),
    $fileErrors = qs('#fileErrors'),
    $stockErrors = qs('#stockErrors'),
    $descriptionErrors = qs('#descriptionErrors'),


    $imgPreview = qs('#img-preview'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


    /* name validators */
    $inputName.addEventListener("blur", (e) => {
        let inputLength = $inputName.value.length;
        switch (true) {
            case !$inputName.value.trim(): /* trim elimina los espacios en blanco */
                $nameErrors.innerHTML = "Campo requerido";
                $inputName.classList.add("is-invalid");
                break;
            case inputLength <= 4:
                $nameErrors.innerHTML = "Ingrese más de 4 caracteres"
                $inputName.classList.add("is-invalid")
                break;
            /* case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "Nombre inválido";
                $inputName.classList.add("is-invalid");
                break; */
            default:
                
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid");
                $nameErrors.innerHTML = "";
                break;    
            }
        })

    $inputPrice.addEventListener("blur", (e) => {
        let inputLength = $inputPrice.value.length;
        switch (true) {
            case !$inputPrice.value.trim(): /* trim elimina los espacios en blanco */
                $priceErrors.innerHTML = "Campo requerido";
                $inputPrice.classList.add("is-invalid");
                break;
            case inputLength < 2:
                $priceErrors.innerHTML = "Ingrese 2 números o más"
                $inputPrice.classList.add("is-invalid")
                break;
            case regExDNI.test($inputPrice.value):
                $priceErrors.innerHTML = "Nombre inválido";
                $inputPrice.classList.add("is-invalid");
                break;
            default:
                
                $inputPrice.classList.remove("is-invalid");
                $inputPrice.classList.add("is-valid");
                $priceErrors.innerHTML = "";
                break;    
            }
        })

        $inputCategory.addEventListener('blur', ()=>{
            if(!$inputCategory.value.trim()){
                $categoryErrors.innerHTML = "Campo requerido"
                $inputCategory.classList.add('is-invalid');
            } else {
                $inputCategory.classList.remove('is-invalid');
                $inputCategory.classList.add('is-valid');
                $categoryErrors.innerHTML = '';
            }
        })

        $inputDiscount.addEventListener('blur', ()=>{
            if($inputDiscount.value){
                $inputDiscount.classList.add('is-valid')
            }
        })

        $inputStock.addEventListener('blur', ()=>{
            if($inputStock.value){
                $inputStock.classList.add('is-valid')
            }
        })

    $inputDescription.addEventListener("blur", (e) => {
        let inputLength = $inputDescription.value.length;
        switch (true) {
            case !$inputDescription.value.trim(): /* trim elimina los espacios en blanco */
                $descriptionErrors.innerHTML = "Campo requerido";
                $inputDescription.classList.add("is-invalid");
                break;
            case inputLength < 2:
                $descriptionErrors.innerHTML = "Ingrese 2 caracteres o más"
                $inputDescription.classList.add("is-invalid")
                break;
            default:
                $inputDescription.classList.remove("is-invalid");
                $inputDescription.classList.add("is-valid");
                $descriptionErrors.innerHTML = "";
                break;    
            }
        })



})