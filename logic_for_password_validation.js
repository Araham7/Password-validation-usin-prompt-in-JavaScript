// WAP for pasword validation:--

let correctPassword = 8918172922;
let password
while (password != correctPassword) {
  password = prompt("Enter the correct password : ");
  console.log("You have entered wrong password.");
}
console.log("You have entered the correct password");