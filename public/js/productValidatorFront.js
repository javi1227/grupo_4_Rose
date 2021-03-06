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
    $form = qs('#form')
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
 
    let errors = {
        name: false,
        price: false,
        category: false,
        description: false
    }
 

    /* name validators */
    $inputName.addEventListener("blur", (e) => {
        let inputLength = $inputName.value.length;
        switch (true) {
            case !$inputName.value.trim(): /* trim elimina los espacios en blanco */
                $nameErrors.innerHTML = "Campo requerido";
                $inputName.classList.add("is-invalid");
                errors.name = true
                break;
            case inputLength <= 4:
                $nameErrors.innerHTML = "Ingrese más de 4 caracteres"
                $inputName.classList.add("is-invalid")
                errors.name = true
                break;
             case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "Nombre inválido";
                $inputName.classList.add("is-invalid");
                break; 
            default: 
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid");
                $nameErrors.innerHTML = "";
                errors.name = false;
                break;    
            }
        })

    $inputPrice.addEventListener("blur", (e) => {
        let inputLength = $inputPrice.value.length;
        switch (true) {
            case !$inputPrice.value.trim(): /* trim elimina los espacios en blanco */
                $priceErrors.innerHTML = "Campo requerido";
                $inputPrice.classList.add("is-invalid");
                errors.price = true;
                break;
            case inputLength < 2:
                $priceErrors.innerHTML = "Ingrese 2 números o más"
                $inputPrice.classList.add("is-invalid")
                errors.price = true;
                break;
            case regExDNI.test($inputPrice.value):
                $priceErrors.innerHTML = "Nombre inválido";
                $inputPrice.classList.add("is-invalid");
                errors.price = true;
                break;
            default:
                
                $inputPrice.classList.remove("is-invalid");
                $inputPrice.classList.add("is-valid");
                $priceErrors.innerHTML = "";
                errors.price = false;
                break;    
            }
        })

    $inputCategory.addEventListener('blur', ()=>{
        if(!$inputCategory.value.trim()){
            $categoryErrors.innerHTML = "Campo requerido"
            $inputCategory.classList.add('is-invalid');
            errors.category = true;
        } else {
            $inputCategory.classList.remove('is-invalid');
            $inputCategory.classList.add('is-valid');
            $categoryErrors.innerHTML = '';
            errors.category = false;
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
                errors.description = true;
                break;
            case inputLength < 2:
                $descriptionErrors.innerHTML = "Ingrese 2 caracteres o más"
                $inputDescription.classList.add("is-invalid")
                errors.description = true;
                break;
            default:
                $inputDescription.classList.remove("is-invalid");
                $inputDescription.classList.add("is-valid");
                $descriptionErrors.innerHTML = "";
                errors.description = false;
                break;    
            }
    })

    $form.addEventListener("submit", function(event) {            
       /*  event.preventDefault();
        if(!errors.name && !errors.category && !errors.price && !errors.description){
            $form.submit()
        }else{
            alert('¡Tienes errores en el formulario!')
        }
 */
        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;

        console.log(elementsForm)
        let elementosNoValidados = 2
        for (let index = 0; index < elementsForm.length - elementosNoValidados; index++) {
            if(elementsForm[index].value == ""
            && elementsForm[index].name !== "stock"
            && elementsForm[index].name !== "discount"
            && elementsForm[index].type !== "file"
            || elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Hay errores en el formulario"
                errores = true;
            }
        }

        if(!errores){
           
            $form.submit()
        }

    
    }); 

})

console.log(elementsForm)