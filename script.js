const cursor=document.createElement("div")

cursor.classList.add("cursor")

document.body.appendChild(cursor)

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.pageX+"px"

cursor.style.top=e.pageY+"px"

})

document.addEventListener("click",(e)=>{

let sparkle=document.createElement("div")

sparkle.style.position="absolute"
sparkle.style.left=e.pageX+"px"
sparkle.style.top=e.pageY+"px"
sparkle.style.width="10px"
sparkle.style.height="10px"
sparkle.style.background="#b57edc"
sparkle.style.borderRadius="50%"

document.body.appendChild(sparkle)

setTimeout(()=>{
sparkle.remove()
},500)

})
