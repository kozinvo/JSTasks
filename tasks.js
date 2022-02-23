// Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

let arr1 = [2, 5, 13, 8, 3, 6];

// let sum1 = 0;
// arr1.forEach(function (item) {

//   if (item % 2 == 0) {
//     sum1 += item ** 0.5;
//   }
// });
// console.log(sum1);

console.log(arr1.reduce((sum, item) => sum + (item % 2 ? 0 : item) ** 0.5, 0));


// Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?

const apple = 1.15,
  orange = 2.30,
  sum2 = apple + orange;
console.log(+sum2.toFixed(2));

// Треугольник. Напишите цикл,  выводит такой треугольник:
// *
// **
// ***
// ****
// *****
// ******

let triangleDoWhile = '';
do {
  triangleDoWhile += '*';
  console.log(triangleDoWhile);
} while (triangleDoWhile.length < 6);

let triangleFor = '';
for (let i = 0; i < 6; i++) {
  triangleFor += '*';
  console.log(triangleFor);
}

// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Напишите скрипт, который считает количество секунд в часе.
const secondsInHour = 60 * 60;
console.log(secondsInHour);

// Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.

const nickname = prompt('What is your name?');
alert(`Hello, ${nickname}!`);

// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

const str7 = 'abcde';
console.log(str7[0] + ' ' + str7[2] + ' ' + str7[4]);

// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

const arr8 = [2, 5, 3, 9],
  result = (arr8[0] * arr8[1]) + (arr8[2] * arr8[3]);
console.log(result);

//  Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4из этого массива.

const arr9 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(arr9[1][0]);

//Создайте асооциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.

var obj = {
  'Коля': '1000',
  'Вася': '500',
  'Петя': '200',
};
console.log(`Salary Пети ${obj['Петя']}`);
console.log(`Salary Коли ${obj['Коля']}`);


// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

const min10 = 44;
if (min10 >= 0 && min10 < 15) {
  console.log(`Число ${min10} находится в 1 четверти`);
} else if (min10 < 30) {
  console.log(`Число ${min10} находится вo 2 четверти`);
} else if (min10 < 45) {
  console.log(`Число ${min10} находится в 3 четверти`);
} else if (min10 < 60) {
  console.log(`Число ${min10} находится в 4 четверти`);
}


// Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при  a, равном 1, 0, -3.

let a11 = -3;
a11 >= 0 ? console.log('Верно') : console.log('Неверно');

//  Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при  test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

let test12 = true;
test12 ? console.log('Верно') : console.log('Неверно');

if (test12) {
  console.log('Верно');
} else {
  console.log('Неверно');
}


// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

const num13 = 3;
switch (num13) {
  case 1:
    console.log('Winter');
    break;
  case 2:
    console.log('Spring');
    break;
  case 3:
    console.log('Summer');
    break;
  case 4:
    console.log('Fall');
    break;
}

//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла forвыведите все эти элементы на экран.

const arr14 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr14.length; i++) {
  console.log(arr14[i]);
}

//  Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
const a15 = 10,
  b15 = 3;
console.log(a15 % b15);

// Возведите 2 в 10 степень. Результат запишите в переменную st.
const st16 = 2 ** 10;
console.log(st16);

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
const num17 = 379;
console.log(+(num17 ** 0.5).toFixed(0));
console.log(+(num17 ** 0.5).toFixed(1));
console.log(+(num17 ** 0.5).toFixed(2));

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
const arr18 = [4, -2, 5, 19, -130, 0, 10];
let min18, max18;
arr18.sort((a, b) => a - b); //функция сортировка не строк а чисел
min18 = arr18[0],
  max18 = arr18[arr18.length - 1];
console.log(`Min = ${min18}, Max = ${max18}`);

//  Выведите на экран случайное целое число от 1 до 100.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(getRandomIntInclusive(1, 100));

//  Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
const str20 = 'aaa bbb ccc';
console.log(str20.substr(4, 3)); // (start, length)
console.log(str20.substring(4, 7)); // ([start, end ))
console.log(str20.slice(4, 7)); // ([start, end ))

// Дана строка 'js'. Сделайте из нее строку 'JS'.
const str21 = 'js';
console.log(str21.toUpperCase());

//  Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
const str22 = 'я учу javascript!';
console.log(str22.length);

// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
const str23 = 'я учу javascript!';
console.log(str23.indexOf('учу'));

// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
const str24 = 'Я-учу-javascript!';
let newStr24 = '';
for (let i = 0; i < str24.length; i++) {
  str24[i] === '-' ? newStr24 += '!' : newStr24 += str24[i];
}
console.log(newStr24);

// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
const str25 = 'я учу javascript!';
let arr25 = str25.split(' ');
console.log(arr25);

// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

const arr26 = ['я', 'учу', 'javascript', '!'];
let str26 = arr26.join('+');
console.log(str26);

// Преобразуйте первую букву строки в верхний регистр.
const str27 = 'frontend';
let newStr27 = str27[0].toUpperCase() + str27.slice(1);
console.log(newStr27);