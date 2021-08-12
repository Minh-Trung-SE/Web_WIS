var userLogin = document.getElementById("user__login")
var userRegister = document.getElementById("user__register")
var openModalLogin = document.getElementById("open-login")
var openModalRegister = document.getElementById("open-register")
var closeNavbar = document.getElementsByClassName("close-navbar")
var navBar = document.getElementById("header-navbar")
var controlNavbar = document.getElementById("control-navbar")

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

showNavbar = function(){
    if (navBar.style.display === 'none'){
        console.log("Ok")
    }
    navBar.style.display = "flex";
}
controlNavbar.onclick = function(){
    console.log(navBar.style.display === 'none')
    showNavbar()
}
