
// Define Global Variables 
 let sections = document.querySelectorAll("section"),
 navBar = document.querySelector(".page__header"),
 heading = document.querySelector("#heading"),
 list = document.querySelector("#navbar__list"),
 topIcon = document.querySelector(".top-icon"),
 Body = document.querySelector("body"),
docFragment =document.createDocumentFragment();

// start of Intersection Observer function for better performance
  window.addEventListener("scroll" , toggleActiveState);
  function toggleActiveState(){
    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
      if(entry.isIntersecting){
       entry.target.classList.add("show")
        observer.unobserve(entry.target);
      }
      });
    }, {rootMargin: "0px 0px -200px 0px"});
    document.querySelectorAll('section').forEach(section => { observer.observe(section) });
    
  }


// build the nav menu
for(let i = 0 ; i < sections.length ; i++ ){
  let  listItem = document.createElement("li"),
    a = document.createElement("a");
  a.classList.add("menu__link");
  listItem.appendChild(a);
  a.innerHTML = sections[i].getAttribute("data-nav");
  a.href=  "#" + sections[i].getAttribute("id")
  docFragment.appendChild(listItem);
}
list.appendChild(docFragment);

// Add class 'active' to nav items when clicking

let  anchors = document.querySelectorAll(".menu__link");
for (let i = 0; i < anchors.length ; i++) { 
  anchors[i].addEventListener("click", () => {
    for (let j = 0; j < anchors.length ; j++) {
      anchors[j].classList.remove("item-active-class");
    }
    anchors[i].classList.add("item-active-class");

  });
}

// Add class 'active' to sections when near top of viewport

for(let i = 0 ; i <sections.length ; i++){
window.addEventListener("scroll" , ()=> {

  if(sections[i].getBoundingClientRect().top >= 0 && sections[i].getBoundingClientRect().bottom <= window.innerHeight ){

      sections[i].classList.add("your-active-class");
  }
  else {
    sections[i].classList.remove("your-active-class");
  }
})

}

// Scroll to anchor ID using scrollTO event

for(let i = 0 ; i < anchors.length ; i++){
  anchors[i].addEventListener("click" , function scrollToSection(e){
    e.preventDefault();
    sections[i].scrollIntoView({behavior:"smooth" , block:"center"});

  })
};

// show the top icon when scrolling

window.addEventListener("scroll", () => {
  if (Body.scrollTop < 500 ){
    topIcon.style.display = "none";
  }else{
    topIcon.style.display = "block";
  }
});

topIcon.addEventListener("click" , ()=>{
  heading.scrollIntoView({behavior:"smooth" , block:"center"});
});

// show nav bar only when scroll up
let previousValue = window.pageYOffset;
window.addEventListener("scroll", () => {
  let currentValue =window.pageYOffset;
  if(previousValue > currentValue){
    navBar.style.display= "block"
  }else{
    navBar.style.display= "none"
  }
  previousValue = currentValue;
    
});

// for responsive navbar 

let icon = document.createElement("i"),
  anchorForIcon = document.createElement("a");
  anchorForIcon.appendChild(icon);
  list.appendChild(anchorForIcon);

function dynamicWidth(){
  if(Body.clientWidth < 768)
  {
    icon.classList.add("fas","fa-bars");

  }else{
    icon.classList.remove("fas","fa-bars");

  }
}
setInterval(dynamicWidth,1000);

// icon.addEventListener("click", sideMenu);

// function sideMenu() {
//     icon.classList.toggle("active");
//     list.classList.toggle("active");
// }

// anchors.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     icon.classList.remove("active");
//     list.classList.remove("active");
// }





