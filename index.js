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


