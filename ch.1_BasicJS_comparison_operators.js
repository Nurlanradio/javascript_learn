/*
При применении операторов сравнения возвращается логический тип. При сравнении строк сравнение идет по 
лексикографическому порядку. При сравнении переменных различных типов значения приводятся к числу.
Также, для исключения двусмысленности можно применить операторы строгого сравнения. Стоит быть осторожным
при сравнении переменных с null или undefined. 
*/



console.log(8 > 2);
console.log(10 == 10);
console.log('04' == 4);
console.log('Петя' > 'Вася');
console.log(null >= 0);
console.log(null === 0);
