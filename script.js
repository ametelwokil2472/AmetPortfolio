const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const registrationForm = document.getElementById("registrationForm");
const email = document.getElementById("email");
const fullName = document.getElementById("fullName");
const textarea = document.getElementById("textarea");
const errorMessage = document.getElementById("errorMessage");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
// let count = [];
// registrationForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let messages = [];

//   let emailValue = email.value;
//   let fullNameValue = fullName.value;
//   let textareaValue = textarea.value;

//   if (emailValue === "" || emailValue === null) {
//     messages.push("Email Address is Required");
//     count.push(1);
//   }
//   if (fullNameValue === "" || fullNameValue === null) {
//     messages.push("Full Name is Required");
//   }
//   if (textareaValue === "" || textareaValue === null) {
//     messages.push("Message is Empty");
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorMessage.style.display = "block";

//     for (let i = 0; i < messages.length; i++) {
//       errorMessage.innerHTML += messages[i] + "<br>";
//     }
//   }

//   if (messages.length === 0) {
//     errorMessage.style.display = "none";
//     clearFormFields();
//   }
// });
// function clearFormFields() {
//   email.value = "";
//   fullName.value = "";
//   textarea.value = "";
// }
