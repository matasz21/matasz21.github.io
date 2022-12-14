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

document.querySelectorAll(".card").forEach((el) => el.classList.add("animation"))
document.querySelectorAll(".exp-box").forEach((el) => el.classList.add("animation"))

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

      if(entry.isIntersecting && entry.target.classList.value.includes("animation")) {
        entry.target.classList.remove("animation")
      }
  })
})

document.querySelectorAll(".animation").forEach(element => observer.observe(element));