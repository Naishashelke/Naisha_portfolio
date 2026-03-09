const cursor=document.createElement("div")

cursor.classList.add("cursor")

cursor.innerHTML="💗"

document.body.appendChild(cursor)

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.pageX+"px"
cursor.style.top=e.pageY+"px"

})

document.addEventListener("click",(e)=>{

let heart=document.createElement("div")

heart.innerHTML="💖"

heart.style.position="absolute"
heart.style.left=e.pageX+"px"
heart.style.top=e.pageY+"px"
heart.style.fontSize="16px"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},600)

})
