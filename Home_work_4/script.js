let moneyType = document.querySelector("#MoneyType");
let Currency = document.getElementById("cur");
let UZbMoney = document.getElementById("uzs");

moneyType.addEventListener("input", convertMoney)
function convertMoney(){
    let MoneyValue = document.getElementsByName("currency")[0].value;
    let currentMoneyType = moneyType.value;
    let Dollar = 12700;
    let Rubl = 133;
    let Euro = 13920;
    let money;

    if(currentMoneyType =="USD"){
        money = Dollar;
        Currency.innerHTML = "UZD";
    }
    else if (currentMoneyType =="RUB"){
        money = Rubl;
        Currency.innerHTML = "RUB";
    }
    else{
        money = Euro;
        Currency.innerHTML = "EUR";
    }
    let total = money * MoneyValue;
    UZbMoney.innerHTML = "UZS: " + total;
}
