document.getElementById("new-user").onclick=function(event){
    event.preventDefault(); // Prevent the default action of the button click
    window.location.href = "/templates/signup.html";
    
}
document.getElementById("abt_btn").onclick=function(event){
    event.preventDefault(); // Prevent the default action of the button click
    window.location.href = "/templates/signup.html";
    
}

const showAni1 = document.querySelectorAll(".animation1");
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    });
});
showAni1.forEach((el) => observer1.observe(el));

const showAni2 = document.querySelectorAll(".leftR");
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    });
});
showAni2.forEach((el) => observer2.observe(el));

const showAni3 = document.querySelectorAll(".bottomU");
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    });
});
showAni3.forEach((el) => observer3.observe(el));