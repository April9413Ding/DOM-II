// Your code goes here
const pageBody = document.querySelector("body");
const navBar = document.querySelector(".main-navigation");
const allH1 = document.querySelectorAll("h1");
const allH2 = document.querySelectorAll("h2");
const allH4 = document.querySelectorAll("h4");
const allParagrah = document.querySelectorAll("p");
const footerArea = document.querySelector("footer");
const logo = document.querySelector(".logo-heading");
const navItem = document.querySelectorAll("nav a");
const heroImg = document.querySelector(".intro img");
const contentImg = document.querySelectorAll(".img-content img");

//heroImg Hover
heroImg.addEventListener("mouseenter", ()=>{
    heroImg.style.transform = "scale(1.1)";
    heroImg.style.boxShadow = "0px 10px 10px rgba(0,0,0,0.2)";
    heroImg.style.transition = "0.4s";
});
heroImg.addEventListener("mouseleave", ()=>{
    heroImg.style.transform = "scale(1)";
    heroImg.style.boxShadow = "none";
    heroImg.style.transition = "0.4s";
});

//DarkMode
logo.addEventListener("dblclick",(event)=>{
    if(navBar.style.backgroundColor == "black"){
    pageBody.style.backgroundColor = "white";
    navBar.style.backgroundColor = "white";
    footerArea.style.backgroundColor = "#FFEBCD";
    allH1.forEach(item=>{item.style.color = "black";});
    allH2.forEach(item=>{item.style.color = "black";});
    allH4.forEach(item=>{item.style.color = "black";});
    allParagrah.forEach(item=>{item.style.color = "black";});
    navItem.forEach(item=>{item.style.color = "black";});
    event.stopPropagation();
    }else{
        pageBody.style.backgroundColor = "black";
        navBar.style.backgroundColor = "black";
        footerArea.style.backgroundColor = "black";
        allH1.forEach(item=>{item.style.color = "white";});
        allH2.forEach(item=>{item.style.color = "white";});
        allH4.forEach(item=>{item.style.color = "white";});
        allParagrah.forEach(item=>{item.style.color = "white";});
        navItem.forEach(item=>{item.style.color = "white";});
        event.stopPropagation();
    }
});

//contentImg Click
contentImg.forEach(item => {
    item.addEventListener("click",(event) =>{
        item.style.border = "1px solid blue";
        item.style.opacity = "0.5";
        event.stopPropagation();
    });
});

pageBody.addEventListener("click",() =>{
    pageBody.style.backgroundColor = "whitesmoke";
})

//scroll
window.addEventListener("scroll",()=>{
    allH2.forEach(item =>{
        item.style.color = "rebeccapurple";
    });
});

//keydown
window.addEventListener("keydown",() =>{
    allParagrah.forEach(item =>{item.style.textAlign="center";});
});
