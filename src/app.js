/* Script to submit a message in smtpjs as email */

/* const formFields = document.querySelector(".formFields");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
    const name = document.querySelector("#name");
    const subject = document.querySelector("#subject")
    const email = document.querySelector("#email");
    const Message = document.querySelector("#message");
    const errors = ['You must provide a name!', 'You must provide an email!', 'You must provide a message!'];
    const fields = [name, email, Message];

    for (let i=0; i<errors.length; i++;) {
        if (fields[i].value = "") {
          $("#errorList").append('<li>$(errors[i])</li>');
          $("#errorList").style.display=block;
          console.log('test');
      } else {
        Email.send({
        SecureToken : "6a6904e6-3f8a-499c-96dd-54e0d96ca7a9",
        To : 'atoniolo76@gmail.com',
        From : "atoniolo76@gmail.com",
        Subject : 'Form submission: ${subject}',
        Body : "This is an form submission off of the official Sushi Yoshino website<br>  From ${name} at ${email}:<br>${Message}"
    }).then();
 }
}
}
*/

// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the header
var header = document.getElementsByClassName("cover-nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}