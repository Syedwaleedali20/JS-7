// for loop
//   for (var i = 0; i < 10; i++) {
//       console.log("for loop", i);
//   }


// while loop
// var i = 0;
// while (i < 10) {
//     console.log("while loop", i);
//     i++;
// }

// // do loop
// var i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 10);


// alert("hellO wolrd");



// function login() {
//     var name = document.getElementById("name");
//     var email = document.getElementById("email");

//     if (name.value && email.value) {
//         console.log(name.value);
//         console.log(email.value);

//     } else {
//         alert("first fill the entire field..");
//     }
// }


// function submit() {
//     var tablenumber = document.getElementById("table");
//     var length = document.getElementById("tablevalue");

//     for (var i = 1; i <= length.value; i++) {

//         document.write(tablenumber.value, " x ", i, " = ", i * tablenumber.value, "<br>")  
//     } 
// }

//Q1

// function greet() {
//     var input = Number(prompt("Enter a table"));
//     var input2 = Number(prompt("Enter the table length"));
//     for (var i = 1; i <= input2; i++) {

//         document.write(input, " x ", i, " = ", i * input2, "<br>")
//     }
// }
// greet()

//Q2
// function hideElement() {
//     var elementTohide = document.getElementById("elementTohide");
//     elementTohide.style.display = "non";
// }

//Q3 check my HTML

//Q4
// var srLink = document.getElementById("srLink");
// srLink.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth '
//     });
// });

//Q5
// var soundLink = document.getElementById("soundLink");
// var sound = document.getElementById("sound");
// soundLink.addEventListener("click", () => {
//     sound.play();
// });

//Q6
// var windowLink = document.getElementById("windowLink");
// windowLink.addEventListener("click", () => {
//     window.open("https://www.instagram.com/")
// });