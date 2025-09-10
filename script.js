var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicons")
var navclose=document.getElementById("nav-close")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

navclose.addEventListener("click",function(){
 sidenav.style.right= "-50%"
})