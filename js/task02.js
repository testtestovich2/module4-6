// Вторая задача:


// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа

// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

// const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];


const getAverageValue = (arr) => {
    if(arr.length === 0)
        return 0;
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return Math.floor(sum / arr.length);
}

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
console.log(getAverageValue(allCashbox));