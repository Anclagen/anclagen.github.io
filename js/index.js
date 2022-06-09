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
    if(window.scrollY >= currentSection - 170){
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

/*------------- Contact Form -------------*/

const displayFormBtn = document.querySelector(".display-form");
const contactFormContainer = document.querySelector(".contact-form");

displayFormBtn.addEventListener("click", createForm);

function createForm(){
  contactFormContainer.innerHTML = `<form id="contact-form">
                                    <div id="form-reporting-container"></div>
                                    <label for="your-name">Name*</label>
                                    <input type="text" id="your-name" name="name" />
                                    <div class="error" id="error-name"></div>
                                    <label for="your-email">E-mail*</label>
                                    <input type="email" id="your-email" name="email" />
                                    <div class="error" id="error-email"></div>
                                    <label for="your-subject">Subject*</label>
                                    <input type="text" id="your-subject" name="subject" />
                                    <div class="error" id="error-subject"></div>
                                    <label for="your-message">Message*</label>
                                    <textarea id="your-message" name="message"></textarea>
                                    <div class="error" id="error-message"></div>
                                    <input type="submit" value="Submit" class="cta form-submit-btn" id="contact-form-submit" disabled />
                                    </form>`;
  addValidation();
}

function addValidation(){
  //get variables
  const contactForm = document.querySelector("#contact-form");
  const contactFormSubmit = document.querySelector("#contact-form-submit");
  const fullname = document.querySelector("#your-name");
  const errorName = document.querySelector("#error-name");
  const errorEmail = document.querySelector("#error-email");
  const subject = document.querySelector("#your-subject");
  const errorSubject = document.querySelector("#error-subject");
  const message = document.querySelector("#your-message");
  const errorMessage= document.querySelector("#error-message");
  const formReporting = document.querySelector("#form-reporting-container");



}