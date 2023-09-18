function bodyFunction() {
    document.body.style.background = 'red';
    setTimeout(() => document.body.style.background = 'rgb(41, 41, 41)', 3000);
}

function myFunction() {
    document.getElementById("dateTime").innerHTML = Date();
}

function myFunction2() {
    document.getElementById("dateTime").innerHTML = "";
}