const progress=document.getElementById("progress");const menu=document.getElementById("menu");const nav=document.getElementById("navLinks");
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+"%"});
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
