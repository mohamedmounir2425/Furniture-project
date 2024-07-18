let nav = document.getElementById("nav")
let btnNav = document.querySelector(".btn-nav")

btnNav.addEventListener("click",function(){
    let drop = document.querySelector(".drop-nav")
    drop.classList.toggle("d-block");
})



let username = document.querySelector("input[id=name]")
let iconWrong1 = document.querySelector(".icon-wrong1")
let iconRight1 = document.querySelector(".icon-right1")
let nameError = document.querySelector(".error-name")
username.addEventListener("input", function () {
    if (/^\S[a-z A-Z]{2,15}$/.test(this.value)) {
        this.style.border = "1px solid green"
        nameError.style.visibility = "hidden"
        iconWrong1.style.visibility = "hidden"
        iconRight1.style.visibility = "visible"
    } else {
        this.style.border = "1px solid red"
        iconRight1.style.visibility = "hidden"
        nameError.style.visibility = "visible"
        iconWrong1.style.visibility = "visible"

    }
})





let phone = document.querySelector("input[id=phone]")
let phoneError = document.querySelector(".error-phone")
let iconWrong2 = document.querySelector(".icon-wrong2")
let iconRight2 = document.querySelector(".icon-right2")
phone.addEventListener("input", function () {
    if (/^(011|012|010|015)[0-9]{8}$/.test(phone.value)) {
        this.style.border = "1px solid green"
        phoneError.style.visibility = "hidden"
        iconWrong2.style.visibility = "hidden"
        iconRight2.style.visibility = "visible"
    } else {
        this.style.border = "1px solid red"
        iconRight2.style.visibility = "hidden"
        phoneError.style.visibility = "visible"
        iconWrong2.style.visibility = "visible"

    }
})

let email = document.querySelector("input[id=email]")
let emailError = document.querySelector(".error-email")
let iconWrong3 = document.querySelector(".icon-wrong3")
let iconRight3 = document.querySelector(".icon-right3")
email.addEventListener("input", function () {
    if (/^[a-zA-Z0-9_.-]{2,15}@[a-z]{2,10}.com$/.test(email.value)) {
        this.style.border = "1px solid green"
        emailError.style.visibility = "hidden"
        iconWrong3.style.visibility = "hidden"
        iconRight3.style.visibility = "visible"
    } else {
        this.style.border = "1px solid red"
        iconRight3.style.visibility = "hidden"
        emailError.style.visibility = "visible"
        iconWrong3.style.visibility = "visible"
    }
})

document.getElementById("submit").addEventListener("click", function (e) {
    // if (!||  || ){
    //     e.preventDefault()
    // }
    if(!/^\S[a-z A-Z]{2,15}$/.test(username.value) ){
        e.preventDefault()
        username.style.border = "1px solid red"
        iconRight1.style.visibility = "hidden"
        iconWrong1.style.visibility = "visible"
        nameError.style.visibility = "visible"
    }
    if(!/^(011|012|010|015)[0-9]{8}$/.test(phone.value) ){
        e.preventDefault()
        phone.style.border = "1px solid red"
        iconRight2.style.visibility = "hidden"
        iconWrong2.style.visibility = "visible"
        phoneError.style.visibility = "visible"
    }
    if(!/^[a-zA-Z0-9_.-]{2,15}@[a-z]{2,10}.com$/.test(email.value) ){
        e.preventDefault()
        email.style.border = "1px solid red"
        iconRight3.style.visibility = "hidden"
        iconWrong3.style.visibility = "visible"
        emailError.style.visibility = "visible"
    }
})