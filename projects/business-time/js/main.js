
//book page forms

try {
    document.package1.addEventListener("submit", doNothing);
    document.package2.addEventListener("submit", doNothing);
    document.package3.addEventListener("submit", doNothing);
}

catch {
    //skip
}

//contact page forms

try {
    document.newsletterForm.addEventListener("submit", submitNewsletter);
    document.contactForm.addEventListener("submit", submitContact);
}
catch {
    //skip
}



function doNothing(e) {
    e.preventDefault();
}

function submitContact(e) {
    e.preventDefault();
    if(document.contactForm.name.value === "" && (document.contactForm.email.value === "" || document.contactForm.phone === "")) {
        const dialogue = document.getElementById("send-dialogue");
        dialogue.textContent = "Please enter email address or phone number.";
        return;
    }
    
    document.contactForm.name.value = "";
    document.contactForm.email.value = "";
    document.contactForm.phone.value = "";
    const dialogue = document.getElementById("send-dialogue");
    dialogue.textContent = "Thanks! We'll get back to you soon.";
}

function submitNewsletter(e) {
    e.preventDefault();
    if(document.newsletterForm.formEmail.value === "") {
        const dialogue = document.getElementById("sign-up-dialogue");
        dialogue.textContent = "Please enter a valid email address.";
        return;
    }

    document.newsletterForm.formEmail.value = "";
    const dialogue = document.getElementById("sign-up-dialogue");
    dialogue.textContent = "Thanks for subscribing!";

}