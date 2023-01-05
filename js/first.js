let nav = document.getElementById("nav")

window.onscroll =function (){

    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        nav.style.backgroundColor = "#302f2f";
    } 
    else {
        nav.style.backgroundColor = "transparent";
    }
}

let slider = document.getElementById("slider")
let right = document.getElementById("right")
let left = document.getElementById("left")
console.log(slider, right,left)
console.log(left)
console.log( right)




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


document.getElementById("btn-all").addEventListener("click",function(){
    document.querySelector(".all").style.display = "block"
    document.querySelector(".category1").style.display = "none"
    document.querySelector(".category2").style.display = "none"
})
document.getElementById("btn-one").addEventListener("click",function(){
    document.querySelector(".category1").style.display = "block"
    document.querySelector(".all").style.display = "none"
    document.querySelector(".category2").style.display = "none"
})
document.getElementById("btn-two").addEventListener("click",function(){
    document.querySelector(".category2").style.display = "block"
    document.querySelector(".category1").style.display = "none"
    document.querySelector(".all").style.display = "none"
})



let buy = document.querySelectorAll(".cards .btn")
let undo = document.querySelectorAll(".cards .btn-undo")
console.log(undo);
let sum = 0 ;
for(let i = 0 ; i < buy.length ; i++){
    buy[i].addEventListener("click",function(){
        sum++
        buy[i].setAttribute("disabled",true)

        
        buy[i].style.backgroundColor = "#929692"; 
        document.querySelector(".count").innerHTML = sum 
        document.querySelector(".count").style.display = "block"; 
        undo[i].style.display = "inline"; 
        
    })
};
for(let i = 0 ; i < undo.length ; i++){
    undo[i].addEventListener("click",function(){
        sum--
        buy[i].removeAttribute("disabled")
        undo[i].style.display = "none"; 

        
        buy[i].style.backgroundColor = ""; 
        document.querySelector(".count").innerHTML = sum 
        if(sum == 0){
            document.querySelector(".count").style.display = "none"; 

        }
        
    })
};



// ======================== back to up button =====================

// let backUp = document.getElementById("backUp")

// console.log(backUp);

// backUp.addEventListener("click",function)