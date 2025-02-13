//Создайте класс Worker. Класс должен содержать свойства name, surname.
// Создайте на его основе объект worker. Выведите в консоль созданный объект.
class Worker {
    constructor (name,surname) {
      this.name = name
      this.surname = surname
    }
}
const worker = new Worker('Тата', 'Хачатрян');
console.log(worker);
//Добавьте в класс Worker метод fullName, который будет возвращать
//полное имя работника в формате "Фамилия, Имя". Создайте объект worker
//на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName
class Worker {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    fullName(){
        return this.surname+','+this.name
    }
  }
  const worker2 = new Worker('Тата', 'Хачатрян');
  console.log(worker2.fullName())









 // Создайте два класса EmployeeAmazon и EmployeeApple.
//- EmployeeAmazon, EmployeeApple должны содержать свойства 
//name, position и salary, a EmployeeApple должен содержать 
//еще и метод calculateBonus, который будет увеличивать зарплату
// на процент, который ты ему передашь аргументом, и менять ее в поле salary.

//- Создайте обьекты employeeAmazon и employeeApple и заполните их данными:
//Josh работает в компании Amazon менеджером, и его зарплата составляет 12 000$ в год.
//Frank работает в компании Apple разработчиком и его зарплата составляет 220 000$ в год.

//- В этом году Josh получит повышение на 15% процентов, а Frank получит повышение на 25%.

//- Используя метод calculateBonus из обьекта employeeApple, повысьте зарплаты этим сотрудникам, не создавая метод calculateBonus в классе EmployeeAmazon.

//- Для изменения зарплаты Josha используйте функцию bind.

//- После изменений зарплат, создайте переменную salaryInfo, в которой будет лежать строка содержащая информацию о зарплатах вот в таком формате :
//Frank salary:указать зарплату Franka за год после повышения, Josh salary:указать зарплату Josha за год после повышения

//Выведите переменную salaryInfo в консоль.
class EmployeeAmazon {
    constructor (name,position,salary) {
        this.name = name
        this.position = position
        this.salary=salary
      }
  }
  class EmployeeApple {
    constructor (name,position,salary) {
        this.name = name
        this.position = position
        this.salary=salary
      }
  
  
    calculateBonus(bonus) {
        this.salary = (this.salary * bonus) / 100 + this.salary;
    }
}
const employeeAmazon = new EmployeeAmazon("Josh", "Manager", 12000);
const employeeApple = new EmployeeApple("Frank", "Developer", 220000);
//вызов метода calculateBonus c другим контекстом обьекта 
employeeApple.calculateBonus.bind(employeeAmazon)(15);
employeeApple.calculateBonus(25);
const salaryInfo = `Frank salary:${employeeApple.salary}, Josh salary:${employeeAmazon.salary}`;
console.log(salaryInfo);

//Создайте класс Product. Класс должен содержать свойства name, 
//price и quantity. Создайте метод displayInfo, который будет выводить
// все данные в консоль одной строкой :
//Название продукта:ноутбук, Цена продукта:999, Количество продукта:5
class Product {
    constructor (name,price,quantity) {
        this.name = name
        this.price = price
        this.quantity=quantity
      }
      displayInfo(){
        console.log(
            `Название продукта:${this.name}, Цена продукта:${this.price}, Количество продукта:${this.quantity}`
          );
      }
}
    const product1 = new Product('ноутбук',150000,1)
    product.displayInfo();

    //Добавьте в класс Product метод calculateTotalPrice, который будет
    // возвращать общую стоимость продукта (произведение цены на количество).
    // Создайте объект product на основе класса Product с ценой 10 и количеством 5.
    // Выведите общую стоимость продукта в консоль с помощью метода calculateTotalPrice.
    class Product {
        constructor(name, price, quantity) {
          this.name = name;
          this.price = price;
          this.quantity = quantity;
        }
        displayInfo() {
          console.log(
            `Название продукта:${this.name}, Цена продукта:${this.price}, Количество продукта:${this.quantity}`
          );
        }
        calculateTotalPrice(){
            return this.price*this.quantity;
        }
      }
      const product2 = new Product('мячик',10,5);
      console.log(product2.calculateTotalPrice());

     // Создайте класс Triangle. Класс должен содержать свойства side1, side2 и side3, 
     //которые представляют длины сторон треугольника. Создайте на его основе объект 
     //triangle с параметрами 3, 4 и 5. Добавьте в класс Triangle метод 
     //calculatePerimeter, который будет возвращать периметр треугольника 
     //(сумма длин всех сторон). Выведите периметр треугольника в консоль
     // с помощью метода calculatePerimeter.
     class Triangle {
        constructor(side1, side2, side3) {
          this.side1 = side1;
          this.side2 = side2;
          this.side3 = side3;
        }
        calculatePerimeter(){
            return this.side1 + this.side2 + this.side3;
        }
      }
      const triangle = new Triangle(15,15,10);
      console.log(triangle.calculatePerimeter());