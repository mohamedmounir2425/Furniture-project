

let nav = document.getElementById("nav")
let btnNav = document.querySelector(".btn-nav")

btnNav.addEventListener("click",function(){
    let drop = document.querySelector(".drop-nav")
    drop.classList.toggle("d-block");
})
