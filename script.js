const passwordConfirmation = document.querySelector("#confirm-password");
const password = document.querySelector("#password");
const submitButton = document.querySelector("button[type='submit']");
passwordConfirmation.addEventListener("input", checkPasswordConfirmation)

function checkPasswordConfirmation(){
    if (passwordConfirmation.value === "" && passwordConfirmation.classList.contains("invalid")){
        passwordConfirmation.classList.remove("invalid");
        submitButton.removeAttribute("disabled");
        return;
    };
    if (passwordConfirmation.value === password.value){
        if (passwordConfirmation.classList.contains("invalid")) {passwordConfirmation.classList.remove("invalid")};
        passwordConfirmation.classList.add("valid");
        submitButton.removeAttribute("disabled");
        return;
    }
    if (passwordConfirmation.classList.contains("valid")) {passwordConfirmation.classList.remove("valid")};
    if (passwordConfirmation.classList.contains("invalid")) {return};
    passwordConfirmation.classList.add("invalid");
    submitButton.setAttribute("disabled", "");
}

