// let msg = 10;
// document.getElementById("title").textContent = "you have " + msg +" messages"

// var nameInput = prompt("Input name");
// let capi = nameInput.slice(0, 1).toUpperCase();
// alert("Hello " + capi + nameInput.slice(1).toLowerCase());

document.getElementById("btn").onclick = function(){
    let dogAge = document.getElementById("dogAge").value
    let result = (dogAge-2)*4 +21;
    document.getElementById("title").textContent = "Your Dogs Human Age is " + result;
}
