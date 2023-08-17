const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();


    validateInput();
})

const validateInput = () => {
    if (nameInput.value.length >= 3) {
        nameInput.classList.add("success");
    } else {
        nameInput.classList.remove("success");
        nameInput.classList.add("error")
    }

    if (email.value.match(emailFormat)) {
        email.classList.add("success");
    } else {
        email.classList.remove("success");
        email.classList.add("error");        
    }


    if (password.value.length >= 8) {
        password.classList.add("success");
    } else {
        password.classList.remove("success");
        password.classList.add("error");
    }
} 



// form.addEventListener("submit", (e) => {
//     if (nameInput.value.length >= 3) {
//         nameInput.classList.add("success");
//     }
//     else{
//         nameInput.classList.remove("success");
//         nameInput.classList.add("error");
//     }
//     e.preventDefault();
    
// })

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// })

// form.addEventListener("submit", (e) => {
//     if (password.value.length > 8) {
//         password.classList.add("success");
//     } else {
//         password.classList.remove("success");
//         password.classList.add("error");
//     }
//     e.preventDefault
// })


//? Their position may change.
const toggleIcon = document.getElementById("themeIcon");
const body = document.querySelector("body");
const container = document.querySelector(".container");

// * Theme changing - toggle() method.
toggleIcon.addEventListener("click", function(){
    this.classList.toggle("fa-moon");
    if (this.classList.toggle("fa-sun")){
        body.style.backgroundColor = "#a2a8d3";
        body.style.transition = "0.7s";
    }
    else{
        body.style.backgroundColor = "rgb(33,37,41)";
        body.style.transition = "0.7s";
    }
})
