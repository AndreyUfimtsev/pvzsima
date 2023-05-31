'use strict';

const calcBrand = document.querySelector('.calc_blockBrand');
const calcNotBrand = document.querySelector('.calc_blockNotBrand');
const summ_1 = document.getElementById("summ1");
const summ_2 = document.getElementById("summ2");
const input1 = document.getElementById("summ_input_1");
const input2 = document.getElementById("summ_input_2");
const input3 = document.getElementById("summ_input_3");
const input4 = document.getElementById("summ_input_4");
const calcValueChange1 = document.querySelector('.calc_valueChange1');
const calcValueChange2 = document.querySelector('.calc_valueChange2');
const calcValueChange3 = document.querySelector('.calc_valueChange3');
const calcValueChange4 = document.querySelector('.calc_valueChange4');
let count1 = 1;
let count2 = 0;
let count3 = 0;
let count4 = 0;

function calcFu1() {
    let result1;

    if (count2 >= 0 && count2 < 1000000) {
        result1 = count2 * 0.1;
    } else if (count2 >= 1000000 && count2 < 2000000) {
        result1 = ((count2 - 1000000) * 0.05) + 100000;
    } else if (count2 >= 2000000) {
        result1 = ((count2 - 2000000) * 0.03) + 150000;
    }
    return result1;
}

input1.addEventListener('input', e => {
    count1 = Math.round(e.target.value);
    summ_1.textContent = calcFu1(count2) * count1;
    summ_2.textContent = summ_1.textContent - (count3 * count1) - (count4 * count1);
    calcValueChange1.textContent = count1;
    calcValueChange1.style.left = (Math.round(count1 * 34)) - 19 + 'px';
    console.log(calcFu1());
});

input2.addEventListener('input', e => {
    count2 = Math.round(e.target.value);
    summ_1.textContent = calcFu1(count2) * count1;
    summ_2.textContent = summ_1.textContent - (count3 * count1) - (count4 * count1);
    calcValueChange2.textContent = count2 + ' p.';
    calcValueChange2.style.left = (Math.round(count2 / 29500)) - 19 + 'px';
    console.log(calcFu1());
});

input3.addEventListener('input', e => {
    count3 = Math.round(e.target.value);
    summ_2.textContent = summ_1.textContent - (count3 * count1) - (count4 * count1);
    calcValueChange3.textContent = count3;
    calcValueChange3.style.left = (Math.round(count3)) / 280 - 19 + 'px';
    console.log(calcFu1());
});
input4.addEventListener('input', e => {
    count4 = Math.round(e.target.value);
    summ_2.textContent = summ_1.textContent - (count3 * count1) - (count4 * count1);
    calcValueChange4.textContent = count4;
    calcValueChange4.style.left = (Math.round(count4 * 34)) / 4800 - 19 + 'px';
    console.log(calcFu1());
});