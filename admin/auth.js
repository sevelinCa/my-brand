const formLogin = document.querySelector('#formLogin')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const errorMesage = document.querySelector(".errorMessage")

const users = [
    {
        username: "admin",
        email: "admin@gmail.com",
        password: "admin123"
    },
    {
        username: "kamali",
        email: "admin2@gmail.com",
        password: "admin12345"
    },
]




formLogin.addEventListener('submit', (e)=>{
    e.preventDefault()
    let emailValue = email.value
    let passwordValue = password.value
    regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
  if(emailValue == ""){
        errorMesage.innerHTML = "Email Is required";
        email.classList.add('error')
    }

    else if(passwordValue == ""){
        errorMesage.innerHTML = "Password Is Required";
        password.classList.add('error')
    }
  
   else if(regex.test(emailValue)== false){
    email.classList.add('error');
    errorMesage.innerHTML="Please Enter Valid Email"
   }else if(passwordValue.length < 6){
    errorMesage.innerHTML="Password Must contain at least 6 character"
    password.classList.add('error')

    
   }else{
    let userFound = false;
    for(let i = 0; i<users.length;i++){
        if(emailValue === users[i].email && passwordValue === users[i].password){
            userFound = true;
            localStorage.setItem('isLoggedIn', users[i].username)
            break;
        }
    }
    if (userFound) {
        location.href = './index.html'; 
    } else {
        errorMesage.innerHTML = "Invalid Email Or Password"; 
    }
   }
       
  
   
    setTimeout(()=>{
        email.classList.remove('error')
        password.classList.remove('error')
        errorMesage.innerHTML=""

    },3000)

})

const formRegister = document.querySelector('#formRegister');

const emailRegister = document.querySelector('#emailRegister');
const username = document.querySelector('#username');
const passwordRegister = document.querySelector('#passwordRegister');
const errorRegister = document.querySelector("#errorRegister");
const button = document.querySelector("#btnsubmit")
button.addEventListener('click', (e)=>{
    e.preventDefault();

    const regexChecker =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailRegister.value === ""){
        errorRegister.textContent = "Email Is Required";
        emailRegister.classList.add('error')
   
    }
    else if(passwordRegister.value == "Password Is Required"){
        errorRegister.textContent = "Pasword Is Required";
        passwordRegister.classList.add('error')

    }
    else if(passwordRegister.value.length <6){
        errorRegister.textContent = "Pasword Is Required";
        passwordRegister.classList.add('error')

    }else if(regexChecker(emailRegister.value)==false){
        errorRegister.textContent = "Please Enter Valid Email";
        emailRegister.classList.add('error')


    }else{
        let usersData = localStorage.parse(localStorage.getItem('users')) || [];
        usersData.push({
            username: username.value,
            email: emailRegister.value,
            password: passwordRegister.value
        })
        localStorage.setItem('users', JSON.stringify(usersData));
    }

})




