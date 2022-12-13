/* Nav hamburger */
function hamburger() {
    const x = document.getElementById("burger");
    x.classList.toggle("display");
  }

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
    const x = document.getElementById("burger");
    if (x.classList.contains("display")) {
      x.classList.remove("display");
    }
  });
});

// Onload animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.target.classList.value === "exp-box") {
      entry.target.classList.add("animation")
    }
    if(entry.isIntersecting) {
      entry.target.classList.remove("animation")
    }
  })
})

document.querySelectorAll(".animation").forEach(element => observer.observe(element));
document.querySelectorAll(".exp-box").forEach(element => observer.observe(element));