document.addEventListener('DOMContentLoaded', () => {
// Form
let input = document.getElementById('phone');
let im = new Inputmask("+7(999)-999-99-99");
im.mask(input);
im.isValid('+7(999)-999-99-99')

document.getElementById('form').addEventListener('submit', function(e) {
    let phoneLabel = document.getElementsByClassName('phone-label')[0];
    //var isValid = Inputmask.isValid(input.value);
    e.preventDefault();
    let regex = /^[+7]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (!regex.test(input.value)) {
        input.classList.add('section-4__input_red');
        if (!phoneLabel.classList.contains('phone-label_show')) phoneLabel.classList.add('phone-label_show');
    }
    else {
        input.classList.remove('section-4__input_red');
        if (phoneLabel.classList.contains('phone-label_show')) phoneLabel.classList.remove('phone-label_show');
    }
    
});
// Header
let header = document.getElementsByClassName('header__title-container')[0];
if (window.innerWidth < 768) {
    header.style.opacity = 1;
    header.style.transform = 'translateY(-50%) scaleY(1) translateX(-50%)';
}
else {
    
    setTimeout(() => {
        header.classList.remove('header__title-container_hide');
    }, 500);
}


})

