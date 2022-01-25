/* Задача 2. Вы просите пользователя ввести сумму его зарплаты. Затем рассчитываете:

Добавку в виде премии в сумме 15% от зарплаты.
Налоги в сумме 10% от суммы всех начислений (зарплата + премия).
Трату в магазине в сумме 190.
Разделяете оставшуюся сумму между пользователем и его "женой"/"мужем".*/


function getSalary() {
    let inputSalaryValue = document.querySelector(".inputSalary").value;

    let salary = document.querySelector(".salary");
    salary.innerHTML += inputSalaryValue;

    let prize = document.querySelector(".prize");

    let formula = inputSalaryValue * 0.15 + Number(inputSalaryValue);
    prize.innerHTML += formula;

    let tax = document.querySelector(".tax");
    tax.innerHTML += formula - formula * 0.1;

    let inputShopValue = document.querySelector(".inputShop").value;
    let remainsBeforeShop = document.querySelector(".remainsBeforeShop");
    let remains = document.querySelector(".remains");

    remainsBeforeShop.innerHTML += (formula - formula * 0.1) - inputShopValue;
    remains.innerHTML += ((formula - formula * 0.1) - inputShopValue) / 2;
}










