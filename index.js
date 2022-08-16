/* Nav hamburger */
function hamburger() {
    var x = document.getElementById("burger");
    x.classList.toggle("display");
  }

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
    var x = document.getElementById("burger");
    if (x.classList.contains("display")) {
      x.classList.remove("display");
    }
  });
});
