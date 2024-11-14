const firstName = prompt("Введіть ваше імʼя");
/*
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 */

// function greet(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// greet('Oleksii', 'Repin');

// function sum(numA, numB) {
//   const result = numA + numB;

//   return result;
// }

// console.log(sum(10, 20));

/*
? Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
? Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/
// function getRectArea(sideA, sideB) {
//   const rectArea = sideA * sideB;

//   return rectArea;
// }

// console.log(getRectArea(8, 11)); // 88
// console.log(getRectArea(18, 11)); // 198
// console.log(getRectArea(8, 21)); // 168

/*
 ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 ? маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти.
 ?
 ? Вага та висота будуть спеціально передані як рядки.
 ?
 ? Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */
// function calcBMI(weight, height) {
//   weight = Number(weight);
//   height = Number(height);

//   const resultBmi = weight / height ** 2;

//   return resultBmi.toFixed(1);
// }

// const bmi = calcBMI('88.3', '1.75');

// console.log(bmi); // 28.8

modul 2.1

/*
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/
// const userNumber = Number(prompt('Введіть число 10'));

// if (userNumber === 10) {
//   console.log('Вірно');
// } else {
//   console.log('Невірно');
// }

/*
? Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.
*/
// const balance = 1000;

// if (balance > 0) {
//   console.log('Positive');
// } else {
//   console.log('Negative');
// }

/*
? Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
?
? Якщо до дедлайну 0 днів - виведи рядок "Today"
? Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
? Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
? Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
? В інших випадках - виведи рядок "Incorrect value of days"
 */
// const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else if (daysUntilDeadline >= 3) {
//   console.log('Date in the future');
// } else {
//   console.log('Incorrect value of days');
// }

/*
? Перепишіть конструкцію if з використанням тернарного оператора.
*/
// const numA = 1;
// const numB = 1;

// let result = numA + numB < 4 ? 'Мало' : 'Багато';

// // if (numA + numB < 4) {
// //   result = 'Мало';
// // } else {
// //   result = 'Багато';
// // }

// console.log(result);

/*
?  Перепишіть if..else за допомогою декількох тернарних операторів.
*/
// const login = 'Співробітник';
// let message = login === 'Співробітник' ? 'Привіт' : login === 'Директор' ? 'Вітаю' : login === '' ? 'Немає логіну' : '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);



/*
 * Оператор switch
 */

/*
? Напиши скрипт вибору опції доставки товара.
? Опція зберігається в змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
?
? В змінну message записати повідомлення в залежності від опції.
? - 'Ви можете забрати товар завтра з 12:00 в нашому офісі'
? - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
? - 'Посилку буде відправлено сьогодні'
? - 'Вам передзвонить менеджер'
 */

const option = 3;
let message = '';

switch (option) {
  case 1: {
    message = 'Ви можете забрати товар завтра з 12:00 в нашому офісі';

    break;
  }

  case 2: {
    message = 'Курʼєр доставить замовлення завтра з 9:00 до 18:00';

    break;
  }

  case 3: {
    message = 'Посилку буде відправлено сьогодні';

    break;
  }

  default: {
    message = 'Вам передзвонить менеджер';
  }
}

console.log(message);

/*
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false

// console.log(Boolean(3.14));
// console.log(Boolean(-10));
// console.log(Boolean('hello'));
// console.log(Boolean('false'));

/**
 * --------------------------------
 */

// console.log(5 && 4);
// console.log(5 && 'mango');
// console.log(0 && 'mango');

// const someNumber = 30;

// if (someNumber >= 5) {
//   if (someNumber <= 20) {
//     console.log('Done!');
//   }
// }

// if (someNumber >= 5 && someNumber <= 20) {
//   console.log('Done!');
// }

/**
 * --------------------------------
 */

// console.log(null || 5);
// console.log(0 || null);
// console.log(5 || null);

// const username = prompt('Enter your first name') || 'anonymus';

// console.log(username);

/**
 * --------------------------------
 */

// console.log(!5);
// console.log(!0);
// console.log(!true);


/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/
// const minutes = 66;

// if (minutes >= 0 && minutes < 15) {
//   console.log('перша чверть години');
// } else if (minutes >= 15 && minutes < 30) {
//   console.log('друга чверть години');
// } else if (minutes >= 30 && minutes < 45) {
//   console.log('третя чверть години');
// } else if (minutes >= 45 && minutes < 60) {
//   console.log('четверта чверть години');
// } else {
//   console.log('некоректна кількість хвилин!');
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/
// const number = Number(prompt('Введіть число між 0 та 3'));

// switch (number) {
//   case 0: {
//     console.log('Ви ввели число 0');

//     break;
//   }

//   case 1: {
//     console.log('Ви ввели число 1');

//     break;
//   }

//   case 2:
//   case 3: {
//     console.log('Ви ввели число 2, а може й 3');

//     break;
//   }

//   default: {
//     console.log('Ви ввели якесь інше число');
//   }
// }

// if (number === 0) {
//   console.log('Ви ввели число 0');
// } else if (number === 1) {
//   console.log('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   console.log('Ви ввели число 2, а може й 3');
// } else {
//   console.log('Ви ввели якесь інше число');
// }

/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
 */
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// let canOpenChat = isOnline && isFriend && !isDnd;

// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
 ? Що буде виведено в консоль?
 */
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);




modul 2.2

/*
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

// const firstName = null;
// const lastName = null;

// const fullName = `${firstName ?? 'Anonymus'} ${lastName ?? 'Anonymus'}`;

// console.log(fullName);

// const fullName = '  Oleksii Repin  ';

// const result = fullName.trim();

// console.log(fullName);
// console.log(result);

/*
? Нормалізація рядка
?
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/
// const answer = 'ECMAScript';
// let userInput = prompt('Яка «офіційна» назва JavaScript?');

// if (userInput.toLowerCase() === answer.toLowerCase()) {
//   console.log('Вірно!');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

/*
? Форматування посилання (endsWith)
?
? Напиши скрипт який перевіряє чи закінчується значення
?  змінної link символом /. Якщо ні, додай до кінця
?  значення link цей символ.
? Використовуй конструкцію if...else.
*/
// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   // link = link + '/';
//   link += '/';
// }

// console.log(link);

/*
? Форматування посилання (includes та логічне «І»)
? Напиши скрипт який перевіряє чи закінчується значення
? змінної link символом /. Якщо ні, додай до кінця
? значення link цей символ, але тільки в тому випадку,
? якщо в link є підрядок "my-site".
? Використовуй конструкцію if...else або тернарний оператор.
*/
// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// console.log(link);

/*
? Пошук у рядку методом includes()
?
? Напиши функцію isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2),
? яка буде перевіряти чи є у рядку заборонені слова.
? Параметри функції:
? string - рядок;
? blacklistedWord1 - перше заборонене слово;
? blacklistedWord2 - друге заборонене слово.
? Функція має повернути true або false.
*/
// Повна версія функції isStrIncludesForbiddenWords
// function isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2) {
//   const normalizedStr = string.toLowerCase();

//   const result = normalizedStr.includes(blacklistedWord1) || normalizedStr.includes(blacklistedWord2);

//   return result;
// }

// const string1 = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// console.log(isStrIncludesForbiddenWords(string1, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string2, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string3, 'spam', 'sale'));

// Скорочена версія функції isStrIncludesForbiddenWords
// function isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2) {
//   return string.toLowerCase().includes(blacklistedWord1) || string.toLowerCase().includes(blacklistedWord2);
// }

// const string1 = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// console.log(isStrIncludesForbiddenWords(string1, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string2, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string3, 'spam', 'sale'));


/*
 * Цикли
 *
 * - Інкремент і декремент
 * - Цикли while і do...while
 * - Цикл for
 */

// let a = 10;
// const b = --a;

// console.log(a);
// console.log(b);

/*
? Виведіть числа від 1 до 50
*/
// let i = 1;

// while (i <= 50) {
//   console.log(i);

//   i++;
// }

/*
? Напишіть цикл, який пропонує prompt ввести число більше за 100.
? Якщо відвідувач введе інше число – попросити ввести ще раз, і так далі.
*/
// let userNumber;

// do {
//   userNumber = Number(prompt('Введіть число більше за 100'));
// } while (userNumber <= 100);

// console.log(userNumber);

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

/*
? Напиши цикл for, який виводить у консоль браузера
? числа за зростанням від a до b, але тільки якщо число кратне 5.
*/
// const a = 20;
// const b = 100;

// for (let i = a; i <= b; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

/*
? Напиши скрипт, який підраховує суму всіх парних чисел,
? які входять в діапазон чисел у змінних від min до max.
? Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
*/
// const min = 0;
// const max = 5;

// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }

// console.log(total);


module 3.1

/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */

// const courses = ['HTML', 'CSS', 'JS'];

// console.log(courses);

// console.log(courses[0]);
// console.log(courses[1]);
// console.log(courses[2]);

// courses[0] = 'React';

// console.log(courses);

// const firstElement = courses[0];

// console.log(firstElement);

// const lastElement = courses[courses.length - 1];

// console.log(lastElement);


/*
 * Присвоєння за посиланням і за значенням
 *
 * Примітиви і складні типи
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10;
// const b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Змініть елемент в масиві arr1 і ще раз виведіть обидва масиви в консоль
*/

const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log(arr1);
console.log(arr2);

arr2[0] = 10;

console.log(arr1);
console.log(arr2);


/*
 * Методи масиву
 *
 * - join
 * - split (Метод рядка)
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

/*
? -------------------------
*/

// const allUsers = ['Elva Harper', 'Lily Wilkins', 'Derek Medina', 'Derek Medina'];
// const allUsersStr = allUsers.join(', ');

// console.log(allUsers);
// console.log(allUsersStr);

/*
? -------------------------
*/

// const phoneNumbersStr = '+380961111111,+380961111234,+380961111876';
// const phoneNumbersArr = phoneNumbersStr.split(',');

// console.log(phoneNumbersStr);
// console.log(phoneNumbersArr);

/*
? -------------------------
*/

// const allUsers = ['Elva Harper', 'Lily Wilkins', 'Derek Medina', 'Charlie Boyd', 'Jon Rowe'];
// const allUsersCopy = allUsers.slice(2, 4);

// console.log(allUsers);
// console.log(allUsersCopy);

// allUsersCopy[0] = 'Noah Brady';

// console.log(allUsers);
// console.log(allUsersCopy);

/*
? -------------------------
*/

// const oldCourses = ['HTML', 'CSS', 'JavaScript'];
// const newCourses = ['React', 'NodeJS'];
// const allCoruses = newCourses.concat(oldCourses);

// console.log(allCoruses);

// allCoruses.push('Angular');
// allCoruses.pop();
// allCoruses.pop();

// allCoruses.unshift('Angular');
// allCoruses.shift();
// allCoruses.shift();

// console.log(allCoruses);


/*
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.log('friends:', friends);

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// for (const el of friends) {
//   console.log(el);
// }

/*
? Напиши скрипт для перебору масиву fruits.
? Для кожного елемента масиву виведи в консоль рядок
? у форматі номер_елемента: значення_елемента.
? Нумерація елементів повинна починатися з 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍎', '🍋'];

// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }


/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const rectSides = values.split(' ');
// const rectArea = Number(rectSides[0]) * Number(rectSides[1]);

// console.log('values:', values);
// console.log('rectSides:', rectSides);
// console.log('rectArea:', rectArea);

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4];
// let total = 0;

// console.log('numbers: ', numbers);

// for (const num of numbers) {
//   if (num % 2 === 0) {
//     total += num;
//   }
// }

// console.log('total: ', total);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// console.log('names:', names);
// console.log('phones:', phones);

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log('namesArr:', namesArr);
// console.log('phonesArr:', phonesArr);

// for (let i = 0; i < namesArr.length; i++) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
*/

// const string = 'Our office is closed so we`re working from home today.';
// const wordsArr = string.split(' ');

// for (let i = 1; i < wordsArr.length - 1; i++) {
//   console.log(wordsArr[i]);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [17, -10, 94, -30, 1, 23, -20];
// let min = values[0];

// for (let i = 1; i < values.length; i++) {
//   if (values[i] < min) {
//     min = values[i];
//   }
// }

// console.log(min);

/*
? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// let total = 0;

// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);


modul 3.2

/*
 * - Function expression
 * - Псевдомасив arguments и Array.from
 */

// Function declaration
// console.log(sum(10, 20));

// function sum(numA, numB) {
//   return numA + numB;
// }

// Function expression
// const sum = function (numA, numB) {
//   return numA + numB;
// };

// console.log(sum(10, 20));

// const fn = function () {
//   console.log(arguments);

//   console.log(arguments[0]);
//   console.log(arguments[1]);
// };

// fn('Hello', 'world');

/*
? Напиши функцію add для складання довільної кількості аргументів (чисел)
*/

// const add = function () {
//   console.log(arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     // total = total + arg;

//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
? Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
? та розраховує середнє арефметичне.
*/

// const calculateAverage = function () {
//   console.log(arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total / arguments.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2


/*
 * - Стек викликів
 * - Порядок виконання
 */

//http://latentflip.com/loupe/

const fn1 = function () {
    console.log('fn1 execution');
  
    console.log('Before fn2 execution');
    fn2();
    console.log('After fn2 execution');
  };
  
  const fn2 = function () {
    console.log('fn2 execution');
  };
  
  fn1();


/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const getRectArea = function (dimensions) {
//   const sidesArr = dimensions.split(' ');

//   console.log(dimensions);
//   console.log(sidesArr);

//   return Number(sidesArr[0]) * Number(sidesArr[1]);
// };

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
? В параметр letter будуть передавати рядок із однією літерою.
? Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// const checkCaseOfLetter = function (letter) {
//   return letter.toLowerCase() === letter ? 'lower case' : 'upper case';
// };

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
? Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
? В параметр str будуть передавати рядок.
*/

// const changeCaseOfLetters = function (str) {
//   let result = '';

//   console.log(str);

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       // result = result + str[i].toUpperCase();

//       result += str[i].toUpperCase();
//     } else {
//       // result = result + str[i].toLowerCase();

//       result += str[i].toLowerCase();
//     }
//   }

//   return result;
// };

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл,
? який для кожного елемента масиву буде виводити в консоль повідомлення у
? форматі <номер елемента> - <значення елемента>. Нумерація елементів
? повинна починатися з 1.
?
? Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
? індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

// const logItems = function (items) {
//   console.log(items);

//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Метод splice().
?
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// console.log(courses);

// const addCourse = function (courseName) {
//   if (courses.includes(courseName)) {
//     console.log(`У вас вже є курс ${courseName}`);
//   } else {
//     courses.push(courseName);
//   }
// };

// const removeCourse = function (courseName) {
//   const idxOfCourse = courses.indexOf(courseName);

//   if (idxOfCourse === -1) {
//     return console.log(`Курс ${courseName} не знайдено!`);
//   }

//   courses.splice(idxOfCourse, 1);
// };

// const updateCourse = function (oldCourseName, newCourseName) {
//   const idxOfCourse = courses.indexOf(oldCourseName);

//   courses.splice(idxOfCourse, 1, newCourseName);
// };

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('React'); // 'Курс з такою назвою не знайдено'

// updateCourse('HTML', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

/*
? Напиши функцію printInfo(names, phones) яка виводить
? у консоль ім'я та телефонний номер користувача. У параметри
? names та phones будуть передані рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках
? вказують на відповідність. Кількість імен та телефонів
? гарантовано однакова.
*/

// printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');