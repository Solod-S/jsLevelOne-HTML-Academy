//Рекурсия
console.log("_______________________Рекурсия______________________");
const washObject = function (items) {
  items -= 1; //(items--)
  if (items > 0) {
    console.log(`Осталось помыть`, items);
    washObject(items);
  }
};

washObject(10);

console.log("_______________________while______________________");

const washObjectWhile = function (items) {
  //пока while возвращает true код выполняеться => while (true)
  // while ((items -= 1)) {
  //   console.log(`Осталось помыть`, items);
  // } // -10 сломает этот код
  while (items-- > 0) {
    console.log(`Осталось помыть`, items);
  }
};
washObjectWhile(10);
console.log("_______________________Random______________________");
//генератор случайного числа случайные числа
//Math.floor округляет к нижнему числу (ceil к верхнему)
//Math.random генерирует
// задаем диапазон
const random = [Math.floor(Math.random() * 999)];

console.log(random);
