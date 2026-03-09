/* CUSTOM CURSOR */

const cursor=document.createElement("div")
cursor.classList.add("cursor")
document.body.appendChild(cursor)

document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.pageX+"px"
cursor.style.top=e.pageY+"px"
})

/* CLICK SPARKLE EFFECT */

document.addEventListener("click",(e)=>{

let sparkle=document.createElement("span")

sparkle.style.position="absolute"
sparkle.style.left=e.pageX+"px"
sparkle.style.top=e.pageY+"px"
sparkle.style.width="8px"
sparkle.style.height="8px"
sparkle.style.background="#b57edc"
sparkle.style.borderRadius="50%"
sparkle.style.pointerEvents="none"
sparkle.style.animation="sparkle 0.6s linear"

document.body.appendChild(sparkle)

setTimeout(()=>{
sparkle.remove()
},600)

})

/* SCROLL ANIMATION */

window.addEventListener("scroll",()=>{

document.querySelectorAll(".card").forEach(card=>{

let position=card.getBoundingClientRect().top
let screen=window.innerHeight

if(position<screen-100){
card.style.opacity="1"
card.style.transform="translateY(0)"
}

})

})
