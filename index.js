//1
// Напишите функцию, которая принимает массив и переносит все 0 в конец,
// не изменяя порядок остальных элементов массива.
// Например:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
//console.log(moveZeros(arr));

//2
// Найдите недостающую букву.
// Напишите функцию, которая принимает в качестве параметра массив букв, 
// расположенных по алфавиту и возвращает массив с недостающей буквой. 
// Длина входного массива не меньше 2 и он содержит буквы только одного регистра.
// Например:
// findMissingLetter(['a','b','c','d','f']) --> 'e'

let alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
arr = ['a', 'b', 'c', 'd', 'f'];

function findMissingLetter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabetArr[i]) {
      return alphabetArr[i];
    }
  }
}

//console.log(findMissingLetter(arr));

//3
// Вы, наверное, знаете систему «лайков» по Facebook и другим страницам. 
// Люди могут "лайкать" сообщения в блогах,изображения или другие предметы. 
// Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию likes :: [String] -> String, которая 
// должна принимать входной массив, содержащий имена людей,которым нравится элемент. 
// Он должен возвращать отображаемый текст, как показано в примерах:
// Например:
// likes([]) --> 'no one likes this'
// likes(['Peter']) --> 'Peter likes this'
// likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
// likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
// likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'

function likesSystem(arr) {
  switch (arr.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return arr[0] + ' likes this';
    case 2:
      return arr[0] + ' and ' + arr[1] + ' like this'
    case 3:
      return arr[0] + ', ' + arr[1] + ' and ' + arr[2] + ' like this'
    default:
      return arr[0] + ', ' + arr[1] + ' and 2 others like this'
  }
}

let likes = ['Alex', 'Jacob', 'Mark', 'Max'];
//console.log(likesSystem(likes))

//4
// Что такое анаграмма?
// Два слова являются анаграммами между собой,если
// они оба содержат одинаковые буквы. 
// Например: 'abba' & 'baab' == true
// Напишите функцию, которая находит все анаграммы слова из списка. 
// В качестве параметра даны слово и массив слов. 
// Функция должна возвращать массив всех анаграмм или пустой массив,
// если анаграмм не обнаружено.
// Например:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) --> ['aabb', 'bbaa']

function makeSortedArr(str) {
  return str.split('').sort();
}

function findAnagrams(word, arr) {
  let arrWithAnagrams = [];
  let wordArr = makeSortedArr(word);

  for (let i = 0; i < arr.length; i++) {
    let anagramaArr = makeSortedArr(arr[i]);
    if (wordArr.toString() === anagramaArr.toString()) {
      arrWithAnagrams.push(arr[i])
    }
  }
  return arrWithAnagrams;
}

//console.log(findAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

//5
// Представим автобус, забирающий и высаживающий людей на каждой остановке. 
// Дан массив массивов, первый элемент которых равен числу пассажиров,
// вошедших в автобус на остановке, а второй - числу пассажиров,
// вышедших на остановке.
// Ваша Задача написать функцию, которая возвращает число людей,
// оставшихся в автобусе после последней остановки (массива).
// Хоть это и последняя остановка,
// в автобусе все еще находятся люди (они, наверное, уснули :D ).
// Помните, что число оставшихся людей в автобусе всегда >= 0
// Значение второго числа первого элемента массива = 0, 
// потому что автобус пустой на первой остановке.
// Например:
// busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17
let sum = 0;

function busStops(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][0];
    sum -= arr[i][1];
  }
  return sum;
}

//console.log(busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));

//6
// Даны две строки, которые содержат только буквы от a - z.
// Ваша задача написать функцию, которая возвращает
// новую отсортированную (по порядку) строку,
// которая содержит буквы двух строк, повторяющихся только один раз.
// Например:
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"

function longest(firstStr, secondStr) {
  let arr = [...firstStr.split(''), ...secondStr.split('')];
  let lettersSet = new Set(arr);
  arr = Array.from(lettersSet);
  arr.sort();
  return arr.join('');
}

//console.log(longest("wwxyaabbbccccdef", "xxxxyyyyabklmopq"));


//7
// Ваша задача написать функцию, которая принимает
// в качестве параметра целое число и возводит в квадрат каждую цифру числа.
// Результат также необходимо вернуть в виде целого числа.

// Например:
// squareDigits(9119) --> 811181

function squareDigits(num) {
  let squareStr = '';
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    squareStr += Math.pow(Number(str[i]), 2);
  };
  return Number(squareStr);
}

//console.log(squareDigits(9119));

//8
// Для того, чтобы обеспечить безопасность данных при оплате онлайн,
// нам необходимо замаскировать все цифры банковского счета, кроме последних четырех.
// Ваша задача написать функцию, которая принимает в качестве
// параметра строку, состоящую из цифр, заменяет все элементы на  '#',
// кроме последних четырех и возвращает ее.
// Например:
// maskify("4556364607935616") --> "############5616"

function maskify(str) {
  let maskifyArr = str.split('');
  for (let i = 0; i < maskifyArr.length - 4; i++) {
    maskifyArr[i] = '#';
  }
  return maskifyArr.join('');
}

//console.log(maskify("4556364607935616"));