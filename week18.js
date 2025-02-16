//Создайте функцию makeOne которая записывает в Local Storage ключ games
// со значением 11 и вызовите ее.(все данные которые хранятся в
// local storage вы можете увидеть в console storage)
function makeOne() {
    localStorage.setItem("games", 11);
  }
  makeOne();
  //Создайте функцию makeTwo, которая сохраняет в Local Storage строку "7,6,5".
  // Ключ назовите numbers. После чего вызовите функцию.
  function makeTwo() {
    localStorage.setItem("numbers", "7,6,5");
  }
  makeTwo();
  //Создайте функцию makeThree, которая сохраняет в Local Storage строку 
  //"name=John,age=25". Ключ назовите users, после чего вызовите функцию.
  function makeThree() {
    localStorage.setItem("users", "name=John,age=25");
  }
  makeThree();
  //Создайте функцию makeFour, которая сохраняет в Local Storage логическое значение true. 
  //Ключ задайте bool и вызовите эту функцию.
  function makeFour() {
    localStorage.setItem("bool", true);
  }
  makeFour();
  //Создайте функцию makeFive, создайте в ней переменную key, в которую поместите строковое 
  //значение 'item', добавьте в Local Storage значение null, а ключ заберите из
  // переменной key и вызовите функцию.
  function makeFive() {
    const key = "item";
    localStorage.setItem(key, null);
  }
  makeFive();
  //Создайте функцию makeSix, которая сохраняет в Local Storage по ключу objectSix 
  //объект obj = { name: "Алиса", age: 30 }. Для преобразования объекта
  // в строку используйте метод JSON.stringify()
  function makeSix() {
    const obj = JSON.stringify({ name: "Алиса", age: 30 });
    localStorage.setItem("objectSix", obj);
  }
  makeSix();
  //Создайте функцию makeSeven, которая сохраняет в Local Storage по ключу objectSeven объект obj = {
   // city: "Лондон",
   // country: "Великобритания",
   // population: 8900000,
   // language: "английский"
   // }. Вызовите функцию.
   // Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()
   function makeSeven() {
    const obj = JSON.stringify( {
      city: "Лондон",
      country: "Великобритания",
      population: 8900000,
      language: "английский"
      });
    localStorage.setItem("objectSeven", obj);
  }
  makeSeven();
  //Создайте функцию makeEight, которая сохраняет в Local Storage по ключу objectEight объект obj = {
   // fruit: "Яблоко",
   // color: "красное",
   // quantity: 10,
    //price: 199
   // }. Вызовите функцию.
   //Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()
   function makeEight() {
    const obj = JSON.stringify({
      fruit: "Яблоко",
      color: "красное",
      quantity: 10,
      price: 199
      });
    localStorage.setItem("objectEight", obj);
  }
  makeEight();
  //Создайте функцию makeNine, которая сохраняет в Local Storage по ключу arrayNine
  // массив arr = [1, 2, 3, 4, 5]. Вызовите функцию.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
function makeNine() {
  const obj = JSON.stringify([1, 2, 3, 4, 5]);
  localStorage.setItem("arrayNine", obj);
}
makeNine();
//Создайте функцию makeTen, которая сохраняет в Local Storage по ключу arrayTen 
//массив arr = ["яблоко", "банан", "апельсин"]. Вызовите функция.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
function makeTen() {
  const obj = JSON.stringify(["яблоко", "банан", "апельсин"]);
  localStorage.setItem("arrayTen", obj);
}
makeTen();