const modal = document.querySelector(".setting-modal");
const profile = document.querySelector(".profile");
const notification = document.querySelector('.notification-container');

profile.addEventListener("click", () => {
  modal.classList.toggle("active");
  notification.classList.remove('active')
});

const date = document.querySelector(".date");
let newDate = new Date();
let day = newDate.getDate();
let month = newDate.getMonth();
let year = newDate.getFullYear();


let monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]; 
let monthWord = monthsArray[month];

 
date.innerHTML = `${day} -- ${monthWord} -- ${year} `;

const upModal = document.querySelector('.update-modal')

window.addEventListener('click', (e)=>{
    if(e.target.classList.contains('update-modal')){
        updateModal()
    }
})


function updateModal(){
    upModal.classList.toggle('active')

}



function openNotifi(){
  notification.classList.toggle('active')
  modal.classList.remove("active");

}
window.addEventListener('click', (e)=>{
  if(e.target.classList.contains('Admin ')){
     window.alert('ello')
  }
})
