function onLoad () {
    const button = document.querySelector("button");
    button.addEventListener("click" , handleSubmit);
    const firstName = document.getElementById("firstName");
    const firstNameError = document.getElementsByClassName("first-name-error")[0];

    const lastName = document.getElementById("lastName");
    const lastNameError = document.getElementsByClassName("last-name-error")[0];

    const email = document.getElementById("email");
    const emailError = document.getElementsByClassName("email-error")[0];

    const enquiry = document.getElementById("enquiry");
    const enquiryContainer = document.getElementsByClassName("query-box-enquiry")[0];
    enquiry.addEventListener("click", addStyle);

    const request = document.getElementById("request");
    const requestContainer = document.getElementsByClassName("query-box-request")[0];
    request.addEventListener("click", addStyle);

    const queryError = document.getElementsByClassName("query-error")[0];
   
    const message = document.getElementById("message");
    const textareaError = document.getElementsByClassName("textarea-error")[0];

    const agree = document.getElementById("agree");
    agree.addEventListener("click", addStyle);
    const agreeError = document.getElementsByClassName("checkbox-error")[0];

    const completedMessage = document.getElementsByClassName("completed")[0];
    
    function addStyle () {
        if (enquiry.checked === true) {
            enquiryContainer.style.border = "1px solid #0c7d69";
            enquiryContainer.style.backgroundColor = "#dff1e7";
            queryError.style.display = "none";
        } else {
            enquiryContainer.style.border = "1px solid  #87a3a6";
            enquiryContainer.style.backgroundColor = "white";
        }

        if (request.checked === true) {
            requestContainer.style.border = "1px solid #0c7d69";
            requestContainer.style.backgroundColor = "#dff1e7";
            queryError.style.display = "none";
        } else {
            requestContainer.style.border = "1px solid  #87a3a6";
            requestContainer.style.backgroundColor = "white";
        }

        if (agree.checked === true) {
            agreeError.style.display = "none";
        }
    }

    function handleSubmit (e) {
        e.preventDefault();
        let firstNameOK;
        let lastNameOK;
        let emailOK;
        let messageOK;
        let queryOK;
        let agreeOK;

        /* First Name */
        if (firstName.value === "") {
            firstNameError.style.display = "block";
            firstName.style.border = "1px solid red";
            firstNameOK = false;
        } else {
            firstNameError.style.display = "none";
            firstName.style.border = "1px solid #0c7d69";
            firstNameOK = true;
        }

        /* Last Name */
        if (lastName.value === "") {
            lastNameError.style.display = "block";
            lastName.style.border = "1px solid red";
            lastNameOK = false;
        } else {
            lastNameError.style.display = "none";
            lastName.style.border = "1px solid #0c7d69";
            lastNameOK = true;
        }

        /* Email */
        if (email.value === "") {
            emailError.style.display = "block";
            email.style.border = "1px solid red";
            emailOK = false;
        } else if (email.value !== "") {
            const regexp = /^[a-zA-Z0-9]+@[a-z]+.[a-z]{2,3}$/gm;
            const validate = regexp.test(email.value);
            
            if (validate) {
                emailError.style.display = "none";
                email.style.border = "1px solid #0c7d69";
                emailOK = true;
            } else {
                emailError.textContent = "Invalid Email";
                emailError.style.display = "block";
                email.style.border = "1px solid red";
                emailOK = false;
            }
        } 

        /* Query */
        if (enquiry.checked === false && request.checked === false) {
            queryError.style.display = "block";
        } else if (enquiry.checked === true || request.checked === true) {
            queryOK = true;
        }   

        /* Message */
        if (message.value === "") {
            textareaError.style.display = "block";
            message.style.border = "1px solid red";
            messageOK = false;
        } else {
            textareaError.style.display = "none";
            message.style.border = "1px solid #0c7d69";
            messageOK = true;
        }

        /* Agreed */
        if (agree.checked === false ) {
            agreeError.style.display = "block";
            message.style.border = "1px solid red";
            agreeOK = false;
        } else {
            agreeError.style.display = "none";
            message.style.border = "1px solid #0c7d69";
            agreeOK = true;
        }

        if (firstNameOK && lastNameOK && emailOK && messageOK && queryOK && agreeOK) {
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            message.value = "";
            agree.checked = false;
            enquiry.checked = false;
            request.checked = false;
            enquiryContainer.style.border = "1px solid  #87a3a6";
            enquiryContainer.style.backgroundColor = "white";
            requestContainer.style.border = "1px solid  #87a3a6";
            requestContainer.style.backgroundColor = "white";
            completedMessage.style.display = "block";

            setTimeout(() => {
                completedMessage.style.display = "none";
            },3000);
        }
    };
};