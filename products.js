var menu = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")

menu.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


var search = document.getElementById("search")
var productcontainer = document.getElementById("pro")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function() {

    var enteredvalue= event.target.value.toUpperCase()

    for (count = 0; count<productlist.length; count=count+1) 
{
        var productname = productlist[count].querySelector("h1").textcontent

        if (productname. toUpperCase() .indexOf(enteredvalue)<0) 
        {
            productlist[count].style.display = "none"
        }

        else {
            productlist[count].style.display = "block"
        }
    }
})