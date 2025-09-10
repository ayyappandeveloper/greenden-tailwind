var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicons")
var navclose=document.getElementById("nav-close")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

navclose.addEventListener("click",function(){
 sidenav.style.right= "-50%"
})

// Search box
 var search = document.getElementById("search")
        var products = document.querySelector("#product-container")
        var productlist = products.querySelectorAll("div")

        search.addEventListener("keyup", function (event) {
            var enteredvalue = event.target.value.toUpperCase()

            for (count = 0; count < productlist.length; count++) {
                var productname = productlist[count].querySelector("h1").textContent

                if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
                    productlist[count].style.display = "none";
                }
                else {
                    productlist[count].style.display = "block";
                }
            }
        })