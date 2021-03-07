/*4.1 Написать функцию которая генерирует массив случайных значений, таким образом что все элементы результирующего массива являются уникальными. 
Генерациями происходит в рамках чисел от N до M, где N,M - могут быть как положительные так и отрицательными, 
и еще одним параметром количество значений которые нужно сгенерировать. 
Если количество генерируемых значений больше чем чисел в диапазоне - отдавать пустой массив. */

let  ArrayGeneration = function(N, M, arraylength){
let array = [],
    min = Math.abs(N),
    max = Math.abs(M);
  if (arraylength > min + max){
    console.log(array);
  }
  else {
    for (i = N, j=0; j<arraylength; j++, N++){
      if (N < M){
      array.push(N);
      }
    }
  let currentIndex = array.length, 
      tValue, 
      randomIndex;
    for (; 0 !== currentIndex; ){
      randomIndex = Math.floor(Math.random() * currentIndex);
      --currentIndex;

      tValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tValue;
    }
  console.log(array);
  }
}
ArrayGeneration(-50, 100, 150); // N - мин значение, M - макс. значение, arraylength - количество значений.


//4.2 Использовать функцию из предыдущего задания чтобы получить массив из нужного количества значений. 
//Найти процентное соотношение отрицательных, положительных и нулевых элементов массива.

let  ArrayGeneration = function(N, M, arraylength){
let array = [],
    min = Math.abs(N),
    max = Math.abs(M);
  if (arraylength > min + max){
    console.log(array);
  }
  else {
    for (i = N, j=0; j<arraylength; j++, N++){
      if (N < M){
      array.push(N);
      }
    }
  let currentIndex = array.length, 
      tValue, 
      randomIndex;
    for (; 0 !== currentIndex; ){
      randomIndex = Math.floor(Math.random() * currentIndex);
      --currentIndex;

      tValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tValue;
    }
  //console.log(array);
  }
  console.log(array);
  return array;
}
percentarr = ArrayGeneration(-135, 15, 150);// N - мин значение, M - макс. значение, arraylength - количество значений.
percent = function(array){
    let bzValue = 0,
        zValue = 0,
        azValue = 0;
    for (i = 0; i<array.length; i++){
      if (array[i] < 0){
        bzValue += 1;
      }
      else if (array[i] === 0){
        zValue += 1;
      }
      else if (array[i] > 0){
        azValue += 1;
      }     
    }
    bzValue = bzValue/array.length * 100;
    console.log(bzValue + "% отрицательных значений");
    
    zValue = zValue/array.length * 100;
    console.log(zValue + "% нулевых значений");
    
    azValue = 100 - zValue - bzValue;
    console.log(azValue + "% положительных значений");
}
percent(percentarr);

//4.3




//4.4 Задано предложение - подсчитать количество вхождений каждого слова в предложении. 
//Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось

words = function(str){
  let wordCount = str.match(/(\w+)/g).length
  space = " ";
  let result = {};
  sArray = str.split(space);
  for (let i = 0; i<sArray.length; i++){
    let a = sArray[i];
      if (result[a] != undefined){
        ++result[a];
      }
      else {
        result[a] = 1;
      }
    }
    for (let key in result){
      console.log(key, result[key]);
    }
}
words("lal lal lal lal on alon on lal lal");

//4.5 Написать рекурсивную функцию которая выводит абсолютно все элементы ассоциативного массива (объекта) - любого уровня вложенности

let recurse = function(obj){
  for (let key in obj){
    console.log(key, obj[key]);
    if (obj[key] != undefined) {
      recurse(obj[key]);
    }
  }
  
}
recurse({
  value : 3,
  next: {
    value1: 5,
    next1: {
      value2: 7,
      next2: {
        value3: 8
      }
    }
  }
})
