let navbarControler = document.getElementById('header')
let userLoginBtn = document.getElementById('user-login')
let userRegisterBtn = document.getElementById('user-register')
let modalWrapper = document.getElementsByClassName('modal-wrapper')[0]
// console.log(modalWrapper)
// console.log(navbarControler.classList)
// console.log(userRegisterBtn)

function openLogin(){
    openModalWrapper()
    userLoginBtn.classList.add('modal--active')
}

function openRegister(){
    openModalWrapper()
    userRegisterBtn.classList.add('modal--active')
}

function closeUserForm(){
    if(userLoginBtn.classList.contains('modal--active')){
        userLoginBtn.classList.remove('modal--active')
    }

    if(userRegisterBtn.classList.contains('modal--active')){
        userRegisterBtn.classList.remove('modal--active')
    }
    closeModalWrapper()
}

function openModalWrapper(){
    modalWrapper.classList.add('modal-wrapper--active')
}

function closeModalWrapper(){
    if(modalWrapper.classList.contains('modal-wrapper--active')){
        modalWrapper.classList.remove('modal-wrapper--active')
    }
}
function openMobileMenu(){
    navbarControler.classList.add("mobile--active")
}

function closeMobileMenu(){
    if(navbarControler.classList.contains("mobile--active")){
        navbarControler.classList.remove("mobile--active")
    }
}

// var userLogin = document.getElementById("user__login")
// var userRegister = document.getElementById("user__register")
// var openModalLogin = document.getElementById("open-login")
// var openModalRegister = document.getElementById("open-register")
// var closeNavbar = document.getElementsByClassName("close-navbar")
// var navBar = document.getElementById("header-navbar")
// var controlNavbar = document.getElementById("control-navbar")

// closeModal = function(){
//     modal.style.display = "none"
// }

// openModal= function(){
//     modal.style.display = "flex"
// }

// openLogin = function(){
//     openModal();
//     userLogin.style.display = "block"
//     userRegister.style.display = "none"
// }

// openRegister = function(){
//     openModal();
//     userLogin.style.display = "none"
//     userRegister.style.display = "block"
// }
