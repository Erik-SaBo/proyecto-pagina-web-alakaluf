const formlogin = document.querySelector("#formlogin")
btnenviar.addEventListener('click' , event =>{
    event.preventDefault()
    if (username.value == "" || password.value == "") {
        alert("Completa todos los campos..")
        return false
        
    }

    const form = new FormData(formlogin)
    form.append("function" , "login")
    fetch("",{
        method:"POST",
        body:form
    })
    console.log(form)

})