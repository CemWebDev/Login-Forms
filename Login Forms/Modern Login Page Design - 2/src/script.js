const loginButton = document.querySelector("#login-button");
const userIcon = document.querySelector("#user-icon")
const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");


let isUserNameValid = false;
let isPasswordValid = false;

const handleInputs = () => {
        userNameInput.addEventListener("input", e => {
            const username = e.target.value;
            if (username.trim() === "" || username.length < 5) {
                userNameInput.classList.add("error")
                isUserNameValid = false;
            }
            else {
                userNameInput.classList.remove("error")
                isUserNameValid = true;
            }
            checkValidation();
        })
        passwordInput.addEventListener("input", e => {
            const password = e.target.value;
            if (password.trim() === "" || password.length < 8) {
                passwordInput.classList.add("error");
                isPasswordValid = false;
            }
            else {
                passwordInput.classList.remove("error")
                isPasswordValid = true;
            }
            checkValidation();
        })
}

function checkValidation() {
    if (isUserNameValid && isPasswordValid) {
        loginButton.disabled = false;
        loginButton.addEventListener("click", e => {
            e.preventDefault();
            userIcon.classList.add("fa-check");
            userIcon.classList.add("spinner");
            userNameInput.disabled = true;
            passwordInput.disabled = true;
        })
    }
    else {
        loginButton.disabled = true;
    }
}


handleInputs();


