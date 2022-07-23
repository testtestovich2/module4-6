// Третья задача:

// Напишите функцию addPrefix 
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически

// Входящий массив:
// const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];


// Вызов функции:
// addPrefix(names, 'Mr')

// Результат функции:
// ['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];

const addPrefix = (arr, prefix) => {    
    const newArr = arr.map((index) => {
        return `${prefix} ${index}`;
    });
    console.log(newArr);
} 

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
addPrefix(names, 'Mr');