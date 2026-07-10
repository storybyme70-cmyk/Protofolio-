// Loading Screen
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Reveal Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section,.card,.project-card,.glass").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// Navbar Shadow
window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>30){

nav.style.background="rgba(5,8,22,.85)";
nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}
else{

nav.style.background="rgba(255,255,255,.06)";
nav.style.boxShadow="none";

}

});

// Typing Effect
const text="Creating Cinematic AI Experiences";
const heading=document.querySelector(".hero h2");

let i=0;

heading.innerHTML="";

function type(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(type,60);

}

}

type();
