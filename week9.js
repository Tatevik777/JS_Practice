/*Выведи в консоль строку: "Нужно бежать со всех ног, чтобы только оставаться на месте, 
а чтобы куда-то попасть!" */
console.log(
  "Нужно бежать со всех ног, чтобы только оставаться на месте, a чтобы куда-то попасть!"
);

/*Выведи в консоль свое имя */
console.log("Тата");

/*Выведи в консоль номер месяца в котором ты родилась.
 Изучи, чем отличается вывод числа и строки.*/

console.log(9);

/*Выведи в консоль строку: 'Добро '+'пожаловать, '+ 'твое имя'*/

console.log("Добро" + " пожаловать," + " Тата");

/*Сложи слово 'Владивосток' и число 2000, а также добавь между ними пробел, 
 чтобы получилось название известной песни. Результат выведи в консоль.*/

console.log("Владивосток " + 2000);

/*Напиши код, который с помощью функции alert выведет число 2023. */

alert(2023);

/* С помощью console.log выведи результат операции 2023 + 1. */

console.log(2023 + 1);

/* Прокрастинируя дома, Русалка 128 минут переписывалась в мессенджере,
    254 минуты лайкала фотокарточки, 137 минут читала статьи Википедии и 201
     минуту смотрела стендапы на YouTube. Выведи в консоль, сколько часов 
     прокрастинировала Русалка.

    Не нужно самостоятельно суммировать числа, пусть JS сделает это за тебя ;) */

console.log((128 + 254 + 137 + 201) / 60);

/*Зарплата вечернего уборщика в городской поликлинике 40000 рублей,
      а педагога по вокалу 22000 рублей. Выведи в консоль число, сколько
      может зарабатывать вечерний уборщик, имея голос и педагогическое образование? */

console.log(40000 + 22000);

/* У тебя есть две переменные:
       const greetings = "Привет";
       const name = "Кот";
       Склей значение этих двух переменных и выведи в консоль значение «Привет, Кот». */

const greetings = "Привет";
const name = "Кот";
console.log(greetings + ", " + name);

/*Объяви переменную с именем fahrenheit и положи в неё значение 451.
      Добавь новую переменную celsius и запиши в неё значение, рассчитанное 
      по формуле перевода температуры из градусов по Фаренгейту в градусы Цельсия: 
      (fahrenheit - 32) / 1.8;
      Применив переменные и шаблонные строки, выведи в консоль строку,
       где _fahrenheit_и _celsius_ — это значения соответствующих переменных: 
       '_fahrenheit_ градуса по Фаренгейту — это _celsius_ градуса по Цельсию.'  */

let fahrenheit = 451;
let celcius = (fahrenheit - 32) / 1.8;
console.log(
  fahrenheit +
    " градуса по Фаренгейту — это " +
    celcius +
    " градуса по Цельсию."
);

/*Создай переменную str и присвой ей значение '15' как строку.

Затем преобразуй эту переменную в число и положи в новую переменную strAsNumber.

Выведи в консоль тип переменной strAsNumber с помощью typeof. */

let str = "15";
let strAsNumber = Number(str);
console.log(typeof(strAsNumber));
