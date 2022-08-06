// Два велосипедиста одновременно выехали навстречу
// друг-другу из двух поселков и встретились через
// 3 часа. Первый велосипедист ехал со скоростью
// 12 км/ч, а второй — 14 км/ч. На каком расстоянии
// находятся поселки? -->
console.log("___________________велосипедисты __________________________");
// const speedOfFirstCyclist = 12;
// const speedOfSecondCyclist = 14;
// const time = 3;

const calculateDistance = function (
  time,
  speedOfFirstCyclist,
  speedOfSecondCyclist
) {
  // Алгоритм
  // 1. Найти расстояние, которое проехал первый
  //    велосипедист, умножив скорость на время
  const distanceOfFirstCyclist = speedOfFirstCyclist * time;

  // 2. Найти расстояние, которое проехал второй
  //    велосипедист
  const distanceOfSecondCyclist = speedOfSecondCyclist * time;

  // 3. Сложить полученные расстояния
  const totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;
  console.log(`Расстояние = `, totalDistance);
  return totalDistance;
};

calculateDistance(4, 12, 14);
console.log("_____________________________________________");
//логический оператор if + тернарник === операторы ветвления
// Жена отправляет мужа-программиста в магазин:
// — Купи батон хлеба, если будут яйца — возьми десяток.
// Муж возвращается из магазина с десятью батонами.
// — Ты зачем столько хлеба купил?
// — Так ведь яйца были...
const BuySomeBread = function (eggs) {
  // if (eggs) {
  //   return 10;
  // } else {
  //   return 1;
  // }
  return eggs ? 10 : 1;
};
console.log(BuySomeBread(0));
