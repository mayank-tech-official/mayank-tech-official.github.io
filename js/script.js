const menu = document.getElementById("menu");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

openBtn.addEventListener("click", () => {
    menu.style.right = "0";
});
closeBtn.addEventListener("click", () => {
    menu.style.right = "-100%";
});

const words = [
    "Web Developing",
    "UI Designing",
    "Python",
    "C",
    "Bash",
    "Java",
    "Ethical Hacking"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){

        typingElement.textContent =
        currentWord.substring(0, charIndex--);

    }else{

        typingElement.textContent =
        currentWord.substring(0, charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length + 1){

        speed = 1500;
        isDeleting = true;

    }else if(isDeleting && charIndex === 0){

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

fadeElements.forEach((el)=>{
    observer.observe(el);
});
