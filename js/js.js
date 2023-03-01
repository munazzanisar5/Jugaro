let btn = document.querySelector(".page_drop");
let pages = document.querySelector(".nav_dropdown");

btn.onclick= ()=>{
    if(pages.style.display==="none"){
        pages.style.display="block";
    }
    else{
        pages.style.display="none";
    }
}


// for mobile
let Btn = document.querySelector(".page_drop1");
let Pages = document.querySelector(".nav_dropdown1");

Btn.onclick= ()=>{
    if(Pages.style.display==="none"){
        Pages.style.display="block";
    }
    else{
        Pages.style.display="none";
    }
}


// menu 

let hamburg_nav = document.getElementById("hamburg_nav");

let mobile = document.getElementById("menu_mobile");

hamburg_nav.onclick = function() {
    // mobile.style.display = "block";


    if (mobile.style.display === "block") {
        mobile.style.display = "none";
      } else {
        mobile.style.display = "block";
      }
  }

