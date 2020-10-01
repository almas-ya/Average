var num1 = +prompt("Введите первое число")
if (!isNaN(num1)){
   console.log(num1);
} else {
    console.log("Ошибка!");
}
var num2 = +prompt("Введите второе число")
if (!isNaN(num2)){
   console.log(num2);
} else {
    console.log("Ошибка!");
}
var num3 = +prompt("Введите третье число")
if (!isNaN(num3)){
   console.log(num3);
} else {
    console.log("Ошибка!");
}
if (num1>=num2 || num1<=2){
    alert("Среднее число: " + num1)
}
else if (num2>=num3 || num2<=3){
    alert("Среднее число: " + num2)
}
else if (num3>=num1 || num3<=num1){
    alert("Среднее число: " + num3);
} else {
    alert("Ошибка!");
}