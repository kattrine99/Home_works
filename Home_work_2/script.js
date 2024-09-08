let x, y, z;
let result = document.getElementsByClassName("result")[0];

// Функция для сложения
function sum() {
    x = Number(document.getElementsByName("FirstNum")[0].value);
    y = Number(document.getElementsByName("SecondNum")[0].value);
    z = x + y;
    result.innerHTML = "Result: " + z;
}

// Функция для вычитания
function sub() {
    x = Number(document.getElementsByName("FirstNum")[0].value);
    y = Number(document.getElementsByName("SecondNum")[0].value);
    z = x - y;
    result.innerHTML = "Result: " + z;
}

// Функция для умножения
function mult() {
    x = Number(document.getElementsByName("FirstNum")[0].value);
    y = Number(document.getElementsByName("SecondNum")[0].value);
    z = x*y;
    result.innerHTML = "Result: " + z;
}

// Функция для деления
function division() {
    x = Number(document.getElementsByName("FirstNum")[0].value);
    y = Number(document.getElementsByName("SecondNum")[0].value);
    z = x / y;
    result.innerHTML = "Result: " + z;
}

// Функция для возведения в степень
function pov() {
    x = Number(document.getElementsByName("FirstNum")[0].value);
    y = Number(document.getElementsByName("SecondNum")[0].value);
    z = x**y;
    result.innerHTML = "Result: " + z;
}