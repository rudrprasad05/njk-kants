// nav
let car = document.getElementById("car")
let nav = document.getElementById("nav");
let ham1 = document.getElementById("ham1");
let ham2 = document.getElementById("ham2");
let ham3 = document.getElementById("ham3");
let body = document.getElementById("body")
let hamButton = document.getElementById("nav-open-btn")
const width = window.innerWidth
const scrollHeight = body.scrollHeight

let isNavOpen = false;

let copyright = document.querySelector(".copyright")
const d = new Date();
let year = new Date().getFullYear();


function navOpen(){
  try{
    car.classList.toggle("car-gone");
  }catch{

  }
  
  nav.classList.toggle("toggle-nav-open");
  ham1.classList.toggle("ham1-open-nav");
  ham2.classList.toggle("ham2-open-nav");
  ham3.classList.toggle("ham3-open-nav");

  

}


try{

  if (width < 475)
  {
    car.style.display = 'none';


  }
  else if (width > 475){
    car.style.display = 'block';
    window.addEventListener('scroll', carScroll)
  }

}catch{

}


function carScroll()
{
  let value = window.scrollY


  if (value > 100 && value < (scrollHeight - 800)){
    car.style.bottom = "10px"
  }
  else{
    car.style.bottom = "-200px"
  }

}



copyright.textContent = `© ${year} Bismuth Web Designs. All rights reserved.`

