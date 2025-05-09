// Изменяем "prototype"
// важность: 5
// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true
// Добавим одну строчку (выделенную в коде ниже). Что вызов console.log покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};



let rabbit2 = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit2.eats ); // true
// …А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit3 = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit3.eats ); // false //перезаписали свойство в прототип
// Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit4 = new Rabbit();

delete rabbit.eats;

console.log( rabbit4.eats ); // true
// Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit5 = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit5.eats ); // ?





// Создайте новый объект с помощью уже существующего
// важность: 5
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

// let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.