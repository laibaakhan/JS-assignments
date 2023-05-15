// -------chp 9-11---
    //  Q:1
//     let  cityName = prompt("Enter your city name:");

// // Check if the entered city is "Karachi"
// if (cityName === "karachi") {
//   document.write("Wellcome to the city of lights");
// } else {
//   document.write("Wellcome");
// }
// Question no:2
// let  gender = prompt("Enter r gender:");
// gender = gender;
// if (gender === "male") {
//   document.write("GM Sir.");
// } else if (gender === "female") {
//   document.write("GM'am.");
// } else {
//   document.write("GM.");
// }
 // Q:3
//     let  color = prompt("Enter tcolor of the traffic signal (red, yellow, or green):");
// color = color;
// if (color === "red") {
//   document.write("Stop");
// } else if (color === "yellow") {
//   document.write(" be Ready to move");
// } else if (color === "green") {
//   document.write("gp now");
// } else {
//   document.write("Invalid color");
// }
//    Q:4
// let  fuel = +(prompt("Enter the remaining fuel in your car (in liters):"));
// if (fuel < 0.25) {
//   document.write("Please refill the fuel in your car.");
// } else {
//   document.writes("Fuel level is sufficient.");
// }
 //  Q:5

// let a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// // }
// let  b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else {
//     alert("give condition for variable b is false");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//  if("car" < "cat"){
//     alert("car is smaller than cat")
// }
//    Q:6
// let  subject1 = +(prompt("Enter marks obtained in Subject 1:"));
// let  subject2 = +(prompt("Enter marks obtained in Subject 2:"));
// let  subject3 = +(prompt("Enter marks obtained in Subject 3:"));
// let  totalMarks = +(prompt("Enter total marks:"));
// let  totalObtainedMarks = subject1 + subject2 + subject3
// let percentage = (totalObtainedMarks / totalMarks) * 100;
// let grade;
// if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }
// console.log("Total Marks: " + totalMarks);
// console.log("Marks Obtained: " + totalObtainedMarks);
// console.log("Percentage: " + percentage + "%");
// console.log("Grade: " + grade);
// if (grade === "Fail") {
//   console.log("Remarks: Sorry, you have failed.");
// } else {
//   console.log(" Reamrks :you need improve ");
// }
//    Q:7
// let secretNumber = 4;
// let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//    document.write("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//    document.write("Close enough to the correct answer.");
// } else {
//   document.write("Sorry, wrong guess.");
// }
// Q:8
// let  number = +(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     document.write("The number is divisible by 3.");
// } else {
//     document.write("The number is not divisible by 3.");
// }
//   Q:9
//   let num =+prompt("enter the number");
//   if(num%2==0){
//     document.write("Number is even");
//   }
//   else {
//     document.write("Number is odd");
//   }  
    // Q:10
//     let temperature = parseInt(prompt("Enter the temperature:"));
// if (temperature > 40) {
//   document.write("It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("The Weather today is Normal.");
// } else if (temperature > 20) {
//     document.write("Today's Weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today's weather is so Cool.");
// } else {
//     document.write("The temperature is too low.");
// }
//    Question no:11
// let num1 = +(prompt("Enter the first number:"));
// let num2 = +(prompt("Enter the second number:"));
// let  operation = prompt("Enter the operation (+, -, *, /, %):");
// let result;
// if (operation === "+") {
//   result = num1 + num2;
// } else if (operation === "-") {
//   result = num1 - num2;
// } else if (operation === "*") {
//   result = num1 * num2;
// } else if (operation === "/") {
//   result = num1 / num2;
// } else if (operation === "%") {
//   result = num1 % num2;
// } else {
//   document.write("Invalid operation entered.");
// }
// if (result !== undefined) {
//   document.write("Result: " + result);
// }