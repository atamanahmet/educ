// let msg = 10;
// document.getElementById("title").textContent = "you have " + msg +" messages"

// var nameInput = prompt("Input name");
// let capi = nameInput.slice(0, 1).toUpperCase();
// alert("Hello " + capi + nameInput.slice(1).toLowerCase());
// !!!
// document.getElementById("btn").onclick = function(){
//     let dogAge = document.getElementById("dogAge").value
//     let result = (dogAge-2)*4 +21;
//     document.getElementById("title").textContent = "Your Dog's Human Age is " + result;
// }

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]
var rawUserName = prompt("Enter Your Name").toLowerCase();
var userName = rawUserName.slice(0,1).toUpperCase()+rawUserName.slice(1)

guestCheck(userName);
function guestCheck(userName){
  if (guestList.includes(userName)) {
    console.log("Go on");
  }
  else{
    console.log("F Off");
  }
}