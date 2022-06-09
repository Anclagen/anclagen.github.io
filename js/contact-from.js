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
                                    <input type="submit" value="Submit" class="cta form-submit-btn" id="contact-form-submit" disabled="disabled" />
                                    </form>`;
  addValidation();
}

function addValidation(){
  //get variables
  const contactForm = document.querySelector("#contact-form");
  const contactFormSubmit = document.querySelector("#contact-form-submit");
  const fullname = document.querySelector("#your-name");
  const errorName = document.querySelector("#error-name");
  const email = document.querySelector("#your-email");
  const errorEmail = document.querySelector("#error-email");
  const subject = document.querySelector("#your-subject");
  const errorSubject = document.querySelector("#error-subject");
  const message = document.querySelector("#your-message");
  const errorMessage= document.querySelector("#error-message");
  const formReporting = document.querySelector("#form-reporting-container");

  function submitForm(submission) {
  submission.preventDefault();
  //probably not needed but just in case some manages to clear an input and submit or something
  if(validateLength(fullname, 5) && validateLength(message, 25) && validateEmail(email) && validateLength(subject, 15)){
    //clear success/error container .
    formReporting.innerHTML = "";
    let formData = new FormData();
    formData.append("your-name", fullname.value);
    formData.append("your-subject", subject.value);
    formData.append("your-message", message.value);
    formData.append("your-email", email.value);
    
    //post form
    postQuery(formData, formReporting);

    //reset contact form
    contactForm.reset();
    resetBorders(fullname);
    resetBorders(message);
    resetBorders(email);
    resetBorders(subject);
    contactFormSubmit.setAttribute('disabled', 'disabled');
    }
  }

  //inline validation
  function validateInputs(event){
  if(event.target.name === "name"){
    if(!validatedInputLength(fullname, 5, errorName)){
      fullname.style.border ="4px solid orange";
      errorName.innerText = "";
      event.target.addEventListener("focusout", function(){validatedInputLength(fullname, 5, errorName);});
      }
    } else if(event.target.name === "email"){
      if(!validateEmailInput(email, errorEmail)){
        email.style.border ="4px solid orange";
        errorEmail.innerText = "";
        event.target.addEventListener("focusout", function(){validateEmailInput(email, errorEmail);});
      }
    } else if(event.target.name === "subject"){
      if(!validatedInputLength(subject, 15, errorSubject)){
        subject.style.border ="4px solid orange";
        errorSubject.innerText = "";
        event.target.addEventListener("focusout", function(){validatedInputLength(subject, 15, errorSubject);});
      }
    }else if(event.target.name === "message"){
      if(!validatedInputLength(message, 25, errorMessage)){
        message.style.border ="4px solid orange";
        errorMessage.innerText = "";
        event.target.addEventListener("focusout", function(){validatedInputLength(message, 25, errorMessage);});
      }
    } 
    //check if all inputs are valid to enable button
    if(validateLength(fullname, 5) && validateLength(message, 25) && validateEmail(email) && validateLength(subject, 15)){
      contactFormSubmit.disabled = false;
    } else{
      contactFormSubmit.setAttribute('disabled', 'disabled');
    }
  }

  //post to existing wordpress install will update later
  function postQuery(data, formReportingContainer){
    fetch("https://fluffypiranha.one/exam_project_1/wp-json/contact-form-7/v1/contact-forms/113/feedback", 
          {method: "POST",
          body: data, 
            }).then((response) => {
              if(response.status === 200){
                formReportingContainer.innerHTML = `<div class="success"><p>Success your message has been sent</p></div>`;
                console.log(response);
              }
          }).catch(error => 
            console.log('error', error),
            createErrorMessage(formReporting));
    formReportingContainer.innerHTML = `<div class="success"><p>Success your message has been sent</p></div>`;
  }

  //add event listeners
  contactForm.addEventListener("submit", submitForm);
  contactForm.addEventListener("input", validateInputs);

}

/*------------------------------ Form Validation Functions ----------------------------------*/

export function createErrorMessage(container){
  container.innerHTML = `<div class="error-submission">
                          <p> An error occurred while submitting the data. </p>
                          <p> Please try again.</p>
                        </div>`;
}

export function resetBorders(input){
  input.style.border = "none";
}

//validates text inputs
export function validatedInputLength(input, length, errorContainer) {
  if (input.value.trim().length > length) {
    errorContainer.innerText = "";
    input.style.border ="3px solid green";
    return true;
  } else {
    input.style.border ="3px solid red";
    errorContainer.innerText = `Your ${input.name} must have a minimum of ${length + 1} characters.`;
    return false;
  }
}

//validate emails
export function validateEmailInput(email, errorContainer) {
  const emailRegEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const validateEmail = emailRegEx.test(email.value);
  if (validateEmail){ 
    errorContainer.innerText = "";
    email.style.border ="3px solid green";
    return true;
  } else {
    errorContainer.innerText = `Please enter a valid email address`;
    email.style.border ="3px solid red";
    return false;
  }
}


//Validators without error messaging
export function validateLength(input, length) {
  if (input.value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

export function validateEmail(email) {
  const emailRegEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const validateEmail = emailRegEx.test(email.value);
  if (validateEmail){ 
    return true;
  } else {
    return false;
  }
}