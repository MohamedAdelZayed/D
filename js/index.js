
document.addEventListener("scroll", function(){

    var navbar = document.getElementById("navbar-example");

    if(window.scrollY > 600){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")        
    }


})