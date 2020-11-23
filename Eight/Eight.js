let money  = prompt("Введите сумму денег:");
let chocolate  = prompt("Введите цену одной шоколадки:");
var change = money  / chocolate;
alert(`Вы можете купить, ${Math.floor(money  / chocolate)} шоколадок и ваша сдача :${change} `);