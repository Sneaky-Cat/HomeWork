/*1.1 Переменная хранит в себе значение от 0 до 9. 
Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1. 
Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. Реализовать двумя способами. */

let sum = function(){
  let sum = 0;
  for(let i = 0; i<10; i++){
      if(i==1) {
          console.log("один");
          continue;
      }
      else if(i==2) {
          console.log("два");
          continue;
      }
      else if(i==3) {
          console.log("три");
          continue;
      }
      else if(i==4) {
          console.log("четыре");
          continue;
      }
      else if(i==5) {
          console.log("пять");
          continue;
      }
      else if(i==6) {
          console.log("шесть");
          continue;
      }
      else if(i==7) {
          console.log("семь");
          continue;
      }
      else if(i==8) {
          console.log("восемь");
          continue;
      }
      else if(i==9) {
          console.log("девять");
          continue;
      }
  }
}
sum();

let sum = function(){ 
  let mas = [0, "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
  for(let i = 1; i<mas.length; i++){
      console.log(mas[i]);
  }
}
sum();

/*1.2 Переменная хранит в себе значение, 
напишите скрипт которое выводит информацию о том, 
что число является нулевым либо положительным либо отрицательным. */


let informer = function(value){
  if (value == 0) {
      console.log("число = 0")
  }
  else if (value >0) {
      console.log("число больше 0")
  }
  else if (value <0) {
      console.log("число меньше 0")
  }
}
informer(0);

//1.3 перевод различных значений в байты 
let converter = function(){
  let size = "mb";
  let value = 624;
  let res = value;
  if (size === "byte"){
    res = value;
    console.log(res);
  }
  else if(size === "kb"){
    res*=1024
    console.log(res);
  }
  else if(size === "mb"){
    res*=1024*1024
    console.log(res);
  }
  else if(size === "gb"){
    res*=1024*1024*1024
    console.log(res);
  }
}
converter();


// Задание 1.4 Про кредит
let credit = function(percent, credit_value, credit_time){
  let cmp_inst = Math.pow((1+percent/100), credit_time); // compound interest - сложнные проценты.
  cmp_res = Math.round((cmp_inst-1)*100) + " процентов от общей суммы клиент заплатит за всё время."
  console.log(cmp_res);

  let valuepy = credit_value*(1+percent/100)-credit_value + " - сумма которая начислится за первый год"; // 8 процентов заплатит клиент за один год value per year
  console.log(valuepy);

  let total_value = Math.round(credit_value*cmp_inst) + " - сумма которую клиент выплатит за всё время."; 
  console.log(total_value);

  let bank_earn = Math.round(credit_value*cmp_inst-credit_value) + " - сумма которую клиент отдаст за кредит.";
  console.log(bank_earn);
  }
credit(8, 4000, 3);
