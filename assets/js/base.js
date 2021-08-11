var userLogin = document.getElementById("user__login")
var userRegister = document.getElementById("user__register")
var openModalLogin = document.getElementById("open-login")
var openModalRegister = document.getElementById("open-register")



closeModal = function(){
    modal.style.display = "none"
}

openModal= function(){
    modal.style.display = "flex"
}

openLogin = function(){
    openModal();
    userLogin.style.display = "block"
    userRegister.style.display = "none"
}

openRegister = function(){
    openModal();
    userLogin.style.display = "none"
    userRegister.style.display = "block"
}
