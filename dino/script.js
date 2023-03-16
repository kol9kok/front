const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    dinoJump();
});

function dinoJump(){
    if(dino.classList != "dinoJump"){
        dino.classList.add("dinoJump")
    }
    setTimeout(function() {
        dino.classList.remove("dinoJump")
    }, 300)
}

let isAlive = setInterval(function(){
    let cactusPos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
    if(cactusPos < 40 &&  dinoPos >= 152){
        alert("GAME OVER")
    }
}, 10)