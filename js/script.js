let inputInDistance = document.querySelector('.input-in-distance');
let inputInConsuotion = document.querySelector('.input-in-consuotion');
let inputInPrice = document.querySelector('.input-in-price');
let button = document.querySelector('.button');
let buttonClear = document.querySelector('.button-clear');
let div = document.querySelector('.div');
let summe = 0;

button.onclick = function () {
    if (inputInDistance.value <= 0 || inputInConsuotion.value <= 0 || inputInPrice.value <= 0)
    {
        alert("Введите данные! (Только положительные числа)");
    }
    else {
        console.log('Работает!');
        let distance = inputInDistance.value;
        let consuotion = inputInConsuotion.value;
        let price = inputInPrice.value;
        let summ = distance / 100 * consuotion * price;
        console.log(summ);
        summe = summ.toFixed(2);
        div.innerHTML = 'Поездка обойдется в ' + summe + ' рублей';
    }
}
buttonClear.onclick = function () {
    inputInDistance.value = '';
    inputInConsuotion.value = '';
    inputInPrice.value = '';
    div.innerHTML = '';
}