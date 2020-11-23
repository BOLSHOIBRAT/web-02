let number  = prompt("Введите ваше число:");
function oddOrEven(number) {
    return ( number & 1 ) ? "Нечетное" : "Четное";
  }
alert(`Ваше число: ` + oddOrEven(number));