//////////// NAv MENU //////////


const navMenu = document.querySelector(".nav-menu");

document.querySelector("#menu").addEventListener("click", () => {
    if (navMenu.style.top === "100px") {
        navMenu.style.top = "-500px";
    } else {
        navMenu.style.top = "100px";
    }
});

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 992){
        navMenu.style.top = "-500px";
    }
})