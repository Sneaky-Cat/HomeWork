// 2.1 Строка в обратном порядке
let reverce = function(str){
    let strback = "";
    for (let i = str.length-1; i>=0 ; i--){
      strback += (str[i]);
    }  
    console.log(strback);
  }
  reverce("Hello");
  
  
  
  //2.2 факториал числа
  let factorial = function(value){
    let res = 1;
    for (let i = 1; i<=value; i++){
      res *= i;
    }
    console.log(res);
  }
  factorial(6);
  
  
  
  //2.3 Дано число - вывести первые N делителей этого числа нацело.
  let divider = function(value){
    for (let i = 1; i<value; i++){
      if (value % i === 0){
        console.log(i);
      }
    }
  }
  divider(50);
  
  
  //2.4 Найти сумму цифр числа которые кратны двум
  let sum = function(value){
    let res = 0;
    for (i = 0; i<=value; i++){
      if (i % 2 === 0){
        res += i;
      }
    }
    console.log(res);
  }
  sum(10);
  
  
  
  //2.5 Найти минимальное число которое больше 300 и нацело делиться на 17
  let something = function(){
    for (let i = 300; true; i++){
      if (i % 17 === 0){
        console.log(i);
        break;
      }
    }
  }
  something();
  
  
  //2.6 Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа.
  let grcmnfctr = function(firstv, secondv){ //grcmnfctr - greatest common factor, НОД
    if (firstv > secondv){
        for (j = secondv; j>0; j--){
          if (firstv % j === 0 && secondv % j === 0){
            console.log(j);
            break;
        }
      }
    }
    else {
      for (j = firstv; j>0; j--){
        if (firstv % j === 0 && secondv % j === 0){
          console.log(j);
          break;
        }
      }
    }
  }
  grcmnfctr(762, 492);