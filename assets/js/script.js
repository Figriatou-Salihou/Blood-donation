// HERO SLIDER

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

// CONTACT PAGE JS

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        
        document.querySelectorAll('.accordion-item').forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                // Reset max-height for smoothness
                i.querySelector('.accordion-body').style.maxHeight = null;
            }
        });

        item.classList.toggle('active');
        const body = item.querySelector('.accordion-body');
        
        if (item.classList.contains('active')) {
            body.style.maxHeight = body.scrollHeight + "px";
        } else {
            body.style.maxHeight = null;
        }
    });
});

const firstItemBody = document.querySelector('.accordion-item.active .accordion-body');
if(firstItemBody) {
    firstItemBody.style.maxHeight = firstItemBody.scrollHeight + "px";
}