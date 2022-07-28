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

    /* $form.addEventListener('submit', (e)=> {
        e.preventDefault()

    })
 */

})