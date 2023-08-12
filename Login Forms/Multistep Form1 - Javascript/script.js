const nameButton = document.querySelector("#name-button");
const nameInput = document.querySelector("#name-input")
const passwordButton = document.querySelector("#password-button");
const passwordInput = document.querySelector("#password-input");
const transitionButton = document.querySelector("#transition-button");
const githubButton = document.querySelector("#github-button");
const instagramButton = document.querySelector("#instagram-button")
const spotifyButton = document.querySelector("#spotify-button");
const completeButton = document.querySelector(".complete-button");
const spotifyCompleteButton = document.querySelector(".complete-button-spotify");
const githubCompleteButton = document.querySelector(".complete-button-github");
const instagramCompleteButton = document.querySelector(".complete-button-instagram");

nameButton.addEventListener("click", (e) => {
    e.preventDefault();
    checkingName();
    transition();
    checkingPassword();
})

githubButton.addEventListener("click", (e) => {
    e.preventDefault();
    githubPage();
})

instagramButton.addEventListener("click", (e) => {
    e.preventDefault();
    instagramPage();
})

spotifyButton.addEventListener("click", (e) => {
    e.preventDefault();
    spotifyPage();
})

const checkingName = () => {
    const nameText = document.querySelector("#name-text");
    if (nameInput.value.length < 2) {
        nameInput.classList.add("name-error");
        nameText.textContent = "The name cannot be too short"
        nameText.classList.add("name-error-text-style");
    } else {
        nameInput.classList.remove("name-error");
        nameInput.classList.add("name-success");
        nameText.textContent = "";
        nameText.classList.remove("name-error-text-style");
        const nameBox = document.querySelector(".name");
        nameBox.style.display = "none";
        const notification = document.querySelector(".notification");
        notification.style.display = "block";
        const greeting = document.querySelector("#greeting");
        greeting.textContent = "Welcome " + nameInput.value + "!";
    }   
}

const transition = () => {
    transitionButton.addEventListener("click", () => {
        const notification = document.querySelector(".notification");
        notification.style.display = "none";
        const passwordBox = document.querySelector(".password");
        passwordBox.style.display = "block";
    })
}


//! Make some updates inside of the password function
const checkingPassword = () => {
    passwordButton.addEventListener("click", () => {
        const passwordErrorText = document.querySelector("#password-error-text");
            if(passwordInput.value.length == 0){
                passwordErrorText.textContent = "";
                passwordErrorText.classList.remove("password-success-text-style");
                passwordErrorText.classList.add("password-error-text-style");
                passwordErrorText.textContent = "You cannot create password with zero characters!";
                passwordInput.classList.remove("password-success");
                passwordInput.classList.add("password-error");
            }
            else if (passwordInput.value.length < 8) {
                passwordErrorText.textContent = "";
                passwordErrorText.textContent = "Your password is too short!";
                passwordErrorText.classList.remove("password-success-text-style");
                passwordErrorText.classList.add("password-error-text-style");
                passwordInput.classList.remove("password-success");
                passwordInput.classList.add("password-error");
            }
            else{
                passwordErrorText.textContent = "";
                passwordErrorText.classList.remove("password-error-text");
                passwordErrorText.textContent = "Valid password!";
                passwordErrorText.classList.add("password-success-text-style");
                passwordInput.classList.remove("password-error");
                passwordInput.classList.add("password-success");
                const validContent = document.querySelector("#valid-content");
                const defaultContent = document.querySelector("#default-content");
                validContent.style.display = "block";
                defaultContent.style.display = "none";
                completeButton.style.display = "block"
                completeButton.addEventListener("click", () => {
                    document.querySelector(".container").style.display = "none";
                    document.querySelector(".social-media-container").style.display = "none"
                    document.querySelector("body").style.backgroundColor = "#f3f3f3";
                    document.querySelector("#spotify-header").style.display = "none";
                    document.querySelector(".last-container").style.display = "block";
                    document.querySelector("#welcome").textContent = "Welcome";
                })
            }
    })
}

const githubPage = () => {
    document.querySelector("#github-header").style.display = "inline-block"
    document.querySelector(".github-container").style.display = "block";
    document.querySelector(".container").style.display = "none";
    document.querySelector("#main-header").style.color = "#fff";
    document.querySelector("body").style.backgroundColor = "#333";
    const githubLoginButton = document.querySelector("#github-login-button");
    const userName = document.querySelector("#github-name-input");
    const password = document.querySelector("#github-password-input");
    const githubUserNameText = document.querySelector("#github-username-text");
    const githubPasswordText = document.querySelector("#github-password-text");
    let userNameCondition;
    let passwordCondition;
    githubLoginButton.addEventListener("click", () => {
        if (userName.value.length == 0) {
            githubUserNameText.classList.remove("github-username-success-style");
            githubUserNameText.textContent = "";
            githubUserNameText.textContent = "Invalid username!";
            githubUserNameText.classList.add("github-username-error-style");
            userName.classList.add("github-username-error");
            userNameCondition = false;
        }
        else if (userName.value.length < 8) {
            githubUserNameText.classList.remove("github-username-success-style");
            githubUserNameText.textContent = "";
            githubUserNameText.textContent = "Invalid username!(too short)";
            githubUserNameText.classList.add("github-username-error-style");
            userNameCondition = false;
        }
        else {
            githubUserNameText.classList.remove("github-username-error-style");
            githubUserNameText.classList.add("github-username-success-style");
            githubUserNameText.textContent = "";
            githubUserNameText.textContent = "Valid username!";
            userName.classList.remove("github-username-error");
            userName.classList.add("github-username-success");
            userNameCondition = true;
        }
        if (password.value.length == 0) {
            password.classList.add("github-password-error");
            githubPasswordText.textContent = "";
            githubPasswordText.textContent = "You cannot create password with zero characters!";
            githubPasswordText.classList.add("github-password-error-style");
            passwordCondition = false;
        }
        else if(password.value.length < 8){
            password.classList.add("github-password-error");
            githubPasswordText.textContent = "";
            githubPasswordText.textContent = "Your password is too short!";
            githubPasswordText.classList.add("github-password-error-style");
            passwordCondition = false;
        }
        else{
            password.classList.remove("github-password-error");
            password.classList.add("github-password-success");
            githubPasswordText.textContent = "";
            githubPasswordText.textContent = "Valid Password!";
            githubPasswordText.classList.remove("github-error-text-style");
            githubPasswordText.classList.add("github-password-success-style");
            passwordCondition = true;
        }
        if (userNameCondition == true && passwordCondition == true) {
            githubLoginButton.style.display = "none"
            githubCompleteButton.style.display = "block";
            userName.disabled = true;
            password.disabled = true;
            githubCompleteButton.addEventListener("click", () => {
                document.querySelector(".container").style.display = "none";
                document.querySelector(".social-media-container").style.display = "none"
                document.querySelector("body").style.backgroundColor = "#f3f3f3";
                document.querySelector("#spotify-header").style.display = "none";
                document.querySelector(".last-container").style.display = "block";
                document.querySelector("#welcome").textContent = "Welcome " + userName.value;
            })
        }
    })
}

const instagramPage = () => {
    document.querySelector("#instagram-header").style.display = "inline-block";
    document.querySelector(".instagram-container").style.display = "block";
    document.querySelector(".container").style.display = "none";
    document.querySelector("#main-header").style.color = "#444";
    const instagramLoginButton = document.querySelector("#instagram-login-button");
    const userName = document.querySelector("#instagram-username-input");
    const password = document.querySelector("#instagram-password-input");
    const instagramUsernameText = document.querySelector("#instagram-username-text");
    const instagramPasswordText = document.querySelector("#instagram-password-text");
    instagramLoginButton.addEventListener("click", () => {
        let userNameCondition;
        let passwordCondition;
        if (userName.value.length == 0) {
            instagramUsernameText.textContent = "";
            instagramUsernameText.textContent = "Invalid Username!";
            instagramUsernameText.classList.remove("instagram-username-success-style");
            instagramUsernameText.classList.add("instagram-username-error-style");
            userName.classList.remove("instagram-username-success");
            userName.classList.add("instagram-username-error");
            userNameCondition = false;
        } else if(userName.value.length <  8){
            instagramUsernameText.textContent = "";
            instagramUsernameText.textContent = "Invalid Username!(too short)";
            instagramUsernameText.classList.remove("instagram-username-success-style");
            instagramUsernameText.classList.add("instagram-username-error-style");
            userName.classList.remove("instagram-username-success");
            userName.classList.add("instagram-username-error");
            userNameCondition = false;
        }
        else{
            instagramUsernameText.textContent = "";
            instagramUsernameText.textContent = "Valid Username";
            instagramUsernameText.classList.remove("instagram-username-error-style");
            instagramUsernameText.classList.add("instagram-username-success-style");
            userName.classList.remove("instagram-username-error");
            userName.classList.add("instagram-username-success");
            userNameCondition = true;
        }
        if (password.value.length == 0) {
            instagramPasswordText.textContent = "";
            instagramPasswordText.textContent = "You cannot create a password with zero characters!";
            instagramPasswordText.classList.remove("instagram-password-success-style");
            instagramPasswordText.classList.add("instagram-password-error-style");
            password.classList.remove("instagram-password-success");
            password.classList.add("instagram-password-error");
            passwordCondition = false;
        }
        else if(password.value.length < 8){
            instagramPasswordText.textContent = "";
            instagramPasswordText.textContent = "The password is too short!";
            instagramPasswordText.classList.remove("instagram-password-success-style");
            instagramPasswordText.classList.add("instagram-password-error-style");
            password.classList.remove("instagram-password-success");
            password.classList.add("instagram-password-error");
            passwordCondition = false;
        }
        else{
            instagramPasswordText.textContent = "";
            instagramPasswordText.textContent = "Invalid Password!";
            instagramPasswordText.classList.remove("instagram-password-error-style");
            instagramPasswordText.classList.add("instagram-password-success-style");
            password.classList.remove("instagram-password-error");
            password.classList.add("instagram-password-success");
            passwordCondition = true;
        }
        if(userNameCondition == true && passwordCondition == true){
            userName.disabled = true;
            password.disabled = true;
            instagramLoginButton.style.display = "none";
            instagramCompleteButton.style.display = "block";
            instagramCompleteButton.addEventListener("click", () => {
                document.querySelector(".container").style.display = "none";
                document.querySelector(".social-media-container").style.display = "none"
                document.querySelector("body").style.backgroundColor = "#f3f3f3";
                document.querySelector("#spotify-header").style.display = "none";
                document.querySelector(".last-container").style.display = "block";
                document.querySelector("#welcome").textContent = "Welcome " + userName.value;
            })
        }
    })
}

const spotifyPage = () => {
    document.querySelector("#spotify-header").style.display = "inline-block";
    document.querySelector(".spotify-container").style.display = "block";
    document.querySelector(".container").style.display = "none";
    const spotifyLoginButton = document.querySelector("#spotify-login-button");
    const userName = document.querySelector("#spotify-username-input");
    const password = document.querySelector("#spotify-password-input");
    const spotifyUsernameText = document.querySelector("#spotify-username-text");
    const spotifyPasswordText = document.querySelector("#spotify-password-text");
    spotifyLoginButton.addEventListener("click", () => {
        let userNameCondition;
        let passwordCondition;
        if (userName.value.length == 0) {
            spotifyUsernameText.textContent = "";
            spotifyUsernameText.textContent = "Invalid Username!";
            spotifyUsernameText.classList.remove("spotify-success-text-style")
            spotifyUsernameText.classList.add("spotify-error-text-style");
            userName.classList.remove("spotify-success");
            userName.classList.add("spotify-error");
            userNameCondition = false;
        }
        else if (userName.value.length < 8) {
            spotifyUsernameText.textContent = "";
            spotifyUsernameText.textContent = "Invalid Username!(too short)";
            spotifyUsernameText.classList.remove("spotify-success-text-style")
            spotifyUsernameText.classList.add("spotify-error-text-style");
            userName.classList.remove("spotify-success");
            userName.classList.add("spotify-error");
            userNameCondition = false;
        }
        else{
            spotifyUsernameText.textContent = "";
            spotifyUsernameText.textContent = "Valid Username!";
            spotifyUsernameText.classList.remove("spotify-error-text-style")
            spotifyUsernameText.classList.add("spotify-success-text-style");
            userName.classList.remove("spotify-error");
            userName.classList.add("spotify-success");
            userNameCondition = true;
        }
        if (password.value.length == 0) {
            spotifyPasswordText.textContent = "";
            spotifyPasswordText.textContent = "You cannot create password with zero characters!";
            spotifyPasswordText.classList.remove("spotify-success-text-style")
            spotifyPasswordText.classList.add("spotify-error-text-style");
            password.classList.remove("spotify-success");
            password.classList.add("spotify-error");
            passwordCondition = false;
        }
        else if (password.value.length < 8) {
            spotifyPasswordText.textContent = "";
            spotifyPasswordText.textContent = "You cannot create password with zero characters!";
            spotifyPasswordText.classList.remove("spotify-success-text-style")
            spotifyPasswordText.classList.add("spotify-error-text-style");
            password.classList.remove("spotify-success");
            password.classList.add("spotify-error");
            passwordCondition = false;
        }
        else{
            spotifyPasswordText.textContent = "";
            spotifyPasswordText.textContent = "Valid Password!";
            spotifyPasswordText.classList.remove("spotify-error-text-style")
            spotifyPasswordText.classList.add("spotify-success-text-style");
            password.classList.remove("spotify-error");
            password.classList.add("spotify-success");
            passwordCondition = true;
        }
        if(userNameCondition == true && passwordCondition == true){
            userName.disabled = true;
            password.disabled = true;
            spotifyLoginButton.style.display = "none";
            spotifyCompleteButton.style.display = "block";
            spotifyCompleteButton.addEventListener("click", () => {
                document.querySelector(".container").style.display = "none";
                document.querySelector(".social-media-container").style.display = "none"
                document.querySelector("body").style.backgroundColor = "#f3f3f3";
                document.querySelector("#spotify-header").style.display = "none";
                document.querySelector(".last-container").style.display = "block";
                document.querySelector("#welcome").textContent = "Welcome " + userName.value;
            })
        }
    })
}