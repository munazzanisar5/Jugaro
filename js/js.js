let btn = document.querySelector(".page_drop");
let pages = document.querySelector(".more_pages");

btn.onclick= ()=>{
    if(pages.style.display==="block"){
        pages.style.display="none";
    }
    else{
        pages.style.display="block";
    }
}