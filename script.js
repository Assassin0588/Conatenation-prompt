// alert("welcome")
// concatenate
let a = "Awais ";
b = "good morning";
c = "!";
d = a + b + c;
console.log("concatenate =", d);
document.getElementById("concatenate").onclick = () => {
    document.getElementById("realState").innerHTML = ""
    document.getElementById("out").innerText = d
};
// ask name from user 
document.getElementById("askName").onclick = () => {
    let fullName = prompt("Whats your name");
    document.getElementById("realState").innerText = fullName + " " + "good morning"
    document.getElementById("out").innerText = fullName + " " + "good morning"
};

// if else

document.getElementById("comparsion").onclick = () => {
    let num1 = 2
    let num2 = 3
    if (num1 > num2) {
        console.log("num1", "num1 is bigger")
        document.getElementById("out").innerText = "num1 is bigger"
    } else {
        console.log("num2", "num2 is bigger")
        document.getElementById("out").innerText = "num2 is bigger"
    }
    document.getElementById("realState").innerText = "let num = 2\n let num2 = 3\n if (num > num2) {\n console.log(\"num\", \"num is bigger\")\n document.getElementById(\"out\").innerText = \"num is bigger\"\n} else {\n console.log(\"num2\", \"num2 is bigger\")\n document.getElementById(\"out\").innerText = \"num2 is bigger\"\n}"
}

// ifElseIf

document.getElementById("ifElseIf").onclick = () => {
    let age = prompt("enter your age")
    if (age < 18) {
        console.log("age", "you are under 18")
        document.getElementById("out").innerText = "you are under 18"
    } else if (age >= 18 && age < 60) {
        console.log("age", "you are adult")
        document.getElementById("out").innerText = "you are adult"
    } else {
        console.log("age", "you are senior citizen")
        document.getElementById("out").innerText = "you are senior citizen"
    }
    document.getElementById("realState").innerText = 'let age = 18\n if (age < 18)\n {\n console.log("age", "you are under 18")\n document.getElementById("out").innerText = "you are under 18"\n} else if (age >= 18 && age < 60) {\n console.log("age", "you are adult")\n document.getElementById("out").innerText = "you are adult"\n} else {\n console.log("age", "you are senior citizen")\n document.getElementById("out").innerText = "you are senior citizen"\n}'
}

// login

document.getElementById("login").onclick = () => {
    let username = prompt("Enter your username")
    let password = prompt("Enter your password")
    if (username === "Awais" && password === "123") {
        alert("Login Success")
        document.getElementById("realState").innerText = "login successfully"
        document.getElementById("out").innerText = "login successfully"
    }
    else {
        alert("Login Failed")
        document.getElementById("realState").innerText = "login failed"
        document.getElementById("out").innerText = "login failed"
    }
}
document.getElementById("reg").onclick = () => {
    let username = prompt("Enter your username")
    let password = prompt("Enter your password")
    if (username === "Awais" && password === "123") {
        alert("register Success")
        document.getElementById("realState").innerText = "register successfully"
        document.getElementById("out").innerText = "register successfully"
    }
    else {
        alert("register Failed")
        document.getElementById("realState").innerText = "register failed"
        document.getElementById("out").innerText = "register failed"
    }
}
// clear statement 
let clearState = () => {
    document.getElementById("realState").innerHTML = ""
};

let clearOut = () => {
    document.getElementById("out").innerHTML = ""
};