async function checkLoggedIn(){
    const token = JSON.parse(localStorage.getItem("token"));
    if(!token){
        window.location.href='signin.html'
    }else{
        await fetch("http://localhost:4000/auth/check", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response)=>{
            if(!response.ok){
                window.open('signin.html')
            }
            return response.json()
        }).then((data)=>{
            if(data.message === "success"){
                console.log("Authorization")
            }else{
                window.open('signin.html')
            }
        })
    }

}
checkLoggedIn()