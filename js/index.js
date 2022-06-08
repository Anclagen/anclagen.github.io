/*--------- Updates page nav links on scroll ------------*/

window.addEventListener("scroll", updateNavActiveLink);
const sections = document.querySelectorAll("#home, #about, #projects, #contact");
const navLinks = document.querySelectorAll(".nav-links li");
updateNavActiveLink()

//https://dev.to/areeburrub/change-nav-link-s-style-as-you-scroll-4p62

function updateNavActiveLink(){
  let currentPosition = "";
  sections.forEach((section) => {
    const currentSection = section.offsetTop;
    if(window.scrollY >= currentSection - 150){
      currentPosition = section.getAttribute("id");
    }
  });

  navLinks.forEach((li) => {
    li.classList.remove("current-section");
    if(li.firstChild.href.includes(currentPosition)){
      li.classList.add("current-section");
    }
  })
}

/*------- Add Navigation Listeners -------*/
const menuBtn = document.querySelector(".menu-button");
const menuLinks = document.querySelector(".nav-links");
const hamTopLine = document.querySelector(".line1");
const hamMidLine = document.querySelector(".line2");
const hamBotLine = document.querySelector(".line3");

menuBtn.addEventListener("click", openCloseMenu);

//Open/close menu phone
function openCloseMenu(){
  menuLinks.classList.toggle("hide-menu");
  hamTopLine.classList.toggle("menu-open-rotate1");
  hamBotLine.classList.toggle("menu-open-rotate3");
  hamMidLine.classList.toggle("menu-open-transparent");
}
/*----------------- silly eyes ---------------------*/
//https://www.geeksforgeeks.org/design-smiley-face-eyes-that-follow-mouse-cursor-using-css-and-js/
const body = document.querySelector("body")
const eyes = document.querySelectorAll(".iris");

body.addEventListener("mousemove", (event) => {
  let x = -(window.innerWidth / 2 - event.pageX) / 50;
  let y = -(window.innerHeight / 2 - event.pageY) / 50;
  //preventing white eyes demonic possession
  if(x > 18){
    x=18
  }else if(x < -10){
    x=-10
  }

  if(y > 7){
    y=7
  }else if(y < -11){
    y=-11
  }
  
  eyes.forEach(eye => {
    eye.style.transform = `translateY(${y}px)  translateX(${x}px)`;
  })         
}); 

/*------------ Display content on scroll ----------*/

const projectItems =document.querySelectorAll(".project-content");

const fadeInOnObservation = new IntersectionObserver(
  function(items, fadeInOnObservation){
    items.forEach(item => {
      if(!item.isIntersecting){
        return
      }else{
        item.target.classList.add("observed-item");
        fadeInOnObservation.unobserve(item.target);
      }
    })
  }, {threshold:0.6}
);

projectItems.forEach(project => {
  fadeInOnObservation.observe(project)
  }
)

