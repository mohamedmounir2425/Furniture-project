let nav = document.getElementById("nav")
let btnNav = document.querySelector(".btn-nav")

btnNav.addEventListener("click",function(){
    let drop = document.querySelector(".drop-nav")
    drop.classList.toggle("d-block");
})

window.onscroll =function (){

    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        nav.style.backgroundColor = "#302f2f";
        // document.getElementsByClassName("home")[0].style.color= "white"
    } 
    else {
        nav.style.backgroundColor = "transparent";
        // document.getElementById("home").style.color= "white"

    }
}

let slider = document.getElementById("slider")
let right = document.getElementById("right")
let left = document.getElementById("left")





let imgs = ["url(images/furniture/slide1.jpg)","url(images/furniture/slide2.jpg)","url(images/furniture/slide4.jpg)"]
// let imgs = ["url(../images/furniture/slide1.jpg)","url(../images/furniture/slide2.jpg)"]
let i = 0 ; 

function slideRight(){
    i++
    if(i==3){
        i=0;
    }
    slider.style.backgroundImage = imgs[i];

}
function slideLeft(){
    if(i==0){
            i=3;
    }
    i--
    slider.style.backgroundImage = imgs[i]
    
}


right.addEventListener("click",slideRight)

left.addEventListener("click",slideLeft)

let btnAll = document.getElementById("btn-all");
let btnOne = document.getElementById("btn-one");
let btnTwo = document.getElementById("btn-two");

let liAll = document.getElementsByClassName("li-all")[0]
let liOne = document.getElementsByClassName("li-all")[1]
let liTwo = document.getElementsByClassName("li-all")[2]

let defaultCategory = document.getElementsByClassName("default-category")[0]
console.log(defaultCategory);
btnAll.addEventListener("click",function(){
    btnAll.style.color = "#1e1e1e"
    liAll.style.opacity = "1"

    btnTwo.style.removeProperty("color")
    liTwo.style.opacity = null
    btnOne.style.removeProperty("color")
    liOne.style.opacity = null

   
    document.querySelector(".all").style.display = "block"
    document.querySelector(".category1").style.display = "none"
    document.querySelector(".category2").style.display = "none"
})
btnOne.addEventListener("click",function(){
    btnAll.style.removeProperty("color")
    liAll.style.opacity = null
    btnTwo.style.removeProperty("color")
    liTwo.style.opacity = null
    
    defaultCategory.style.opacity = .5
    
    btnOne.style.color = "#1e1e1e"
    liOne.style.opacity = "1"
    document.querySelector(".all").style.display = "none"
    document.querySelector(".category1").style.display = "block"
    document.querySelector(".category2").style.display = "none"
})
document.getElementById("btn-two").addEventListener("click",function(){
    btnAll.style.removeProperty("color")
    liAll.style.opacity = null
    btnOne.style.removeProperty("color")
    liOne.style.opacity = null
    
    defaultCategory.style.opacity = .5
    btnTwo.style.color = "#1e1e1e"
    liTwo.style.opacity = "1"
    document.querySelector(".all").style.display = "none"
    document.querySelector(".category1").style.display = "none"
    document.querySelector(".category2").style.display = "block"
})



let buy = document.querySelectorAll(".cards .btn")
let undo = document.querySelectorAll(".cards .btn-undo")
// console.log(undo);
let sum = 0 ;
for(let i = 0 ; i < buy.length ; i++){
    buy[i].addEventListener("click",function(){
        sum++
        buy[i].setAttribute("disabled",true)

        
        buy[i].style.backgroundColor = "#929692"; 
        document.querySelectorAll(".count")[0].innerHTML = sum 
        document.querySelectorAll(".count")[0].style.display = "block"; 
        document.querySelectorAll(".count")[1].innerHTML = sum 
        document.querySelectorAll(".count")[1].style.display = "block"; 
        undo[i].style.display = "inline"; 
        
    })
};
for(let i = 0 ; i < undo.length ; i++){
    undo[i].addEventListener("click",function(){
        sum--
        buy[i].removeAttribute("disabled")
        undo[i].style.display = "none"; 

        
        buy[i].style.backgroundColor = ""; 
        document.querySelectorAll(".count")[0].innerHTML = sum 
        document.querySelectorAll(".count")[1].innerHTML = sum 
        if(sum == 0){
            document.querySelectorAll(".count")[0].style.display = "none"; 
            document.querySelectorAll(".count")[1].style.display = "none"; 

        }
        
    })
};



// ======================== back to up button =====================

// let backUp = document.getElementById("backUp")

// console.log(backUp);

// backUp.addEventListener("click",function)