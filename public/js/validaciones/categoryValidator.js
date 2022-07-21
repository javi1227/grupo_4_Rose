
function qs(element) {
    return document.querySelector(element)
}
window.addEventListener("load", () =>{
    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

     $inputName.addEventListener("blur", () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Ingrese una Categoria";
                $inputName.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "Categoria inválida";
                $inputName.classList.add("is-invalid");
                break;
            default:
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid");
                $nameErrors.innerHTML = "";
                break;    
        }
    })



})