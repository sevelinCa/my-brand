const navbar = document.getElementById('navbarphone');
const toggle = document.getElementById('toggle');
const loaderWave2 = document.querySelector(".loader");


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

const subscribeForm = document.querySelector("#subscribeForm")
subscribeForm.addEventListener("submit", async(e)=>{
    (loaderWave2.style.display = "flex"),
    (document.querySelector(".btn-word").style.display = "none");
    e.preventDefault()
    const subEmail = document.querySelector("#subEmail")
    const data = {
        email: subEmail.value
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(subEmail.value )){

  

    await fetch("https://mybrand-backend-1-8rxh.onrender.com/auth/subscribe",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res)=>{
        if(!res.ok){
            console.log("---->error")
        }
        return res.json()
    }).then((data)=>{
        (loaderWave2.style.display = "none"),
        (document.querySelector(".btn-word").style.display = "flex");
        var popup = document.getElementById("popup");
        popup.textContent = "subscribe added";
        popup.classList.add("show");
        subEmail.value = ""
        setTimeout(function () {
          popup.classList.remove("show");
          reloadFunc();
        }, 3000);
        console.log(data)

    }).catch((error)=>{
        console.log(error)
    })
}else{
    subEmail.style.border = "1px solid red"
     
}
})





