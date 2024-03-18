const navbar = document.getElementById('navbarphone');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', (e) => {
    navbar.classList.toggle('active');
});

const testimonials = document.querySelectorAll('.test-card');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let startIndex = 0

function showTestimonials(activeIndex) {
    testimonials.forEach((item,index)=>{
        item.style.display= "none"
    })

    for(let i = activeIndex;i<activeIndex+2;i++){
        testimonials[i].style.display = 'block'

    }
    

}
showTestimonials(0);

next.addEventListener('click',()=>{
    if(startIndex + 2 > testimonials.length -1){
        

    }else{

        startIndex = startIndex+2
        showTestimonials(startIndex)
    }

})
prev.addEventListener('click',()=>{
    if(startIndex - 2 < 0 ){

    }else{

        startIndex = startIndex-2
        showTestimonials(startIndex)
    }

})





