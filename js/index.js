document.addEventListener('DOMContentLoaded', () => {
// Form
let input = document.getElementById('phone');
let im = new Inputmask("+7(999)-999-99-99");
im.mask(input);
//im.isValid('+7(999)-999-99-99')

document.getElementById('form').addEventListener('submit', function(e) {
    let phoneLabel = document.getElementsByClassName('phone-label')[0];
    //var isValid = Inputmask.isValid(input.value);
    e.preventDefault();
    let regex = /^[+7]+[(]{1}[0-9]{3}[)]{1}-\d{3}-\d{2}-\d{2}$/;
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

// Lazy images
let lazyImages = document.querySelectorAll('.lazy');
if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {

      entries.forEach(function(entry) {

        if (entry.isIntersecting) {
          let lazyImage = entry.target;

          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
      let attr = lazyImages[0].getAttribute('data-src');
    lazyImages[0].src = attr;
  }

})

