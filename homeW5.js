//5.1 Задан двумерный массив - объединить каждый внутренний массив с верхнем массивом - только по уникальным значениям. 

let concat = function(array){
    jArray = [];
    for (i = 0; i < array.length; i++){
      if (array[i][0] != undefined){
        console.log(array[i]);
        jArray = jArray.concat(array[i]);
      }
      else {
        jArray.push(array[i]);
      }
      
    }
    console.log(jArray);
  }
  
  concat([[14,5], [2,4,6], 4, [5,67], 1, [969, 6, 7]]);
  
  //5.2 Написать функцию которая возвращает true/false в зависимости от того - все ли уникальные значения в массиве или есть не уникальные.
  
  unic = function(array){
    sArray = array;
    result = {};
    for (let i = 0; i<sArray.length; i++){
      let a = sArray[i];
        if (result[a] != undefined){
          ++result[a];
        }
        else {
          result[a] = 1;
        }
      }
      let unic = true;
      for (let key in result){
        if (result[key] > 1){
          unic = false;
        }
      }
      console.log(unic);
  }
  unic([1,4,6,2,3,1,7]);
  
  
  //5.3 Написать функцию которая возвращает: среднюю оценку студентов в разрезе каждого курса: 
  //{1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5} с учетом только тех студентов которые активны. 
  //Посчитать количество неактивных студентов в разрезе каждого курса и общее количество неактивных студентов.
  
  unic = function(array){
    result = {};
    notActiveCounter = 0;
    for (let i = 0; i<array.length; i++){
      let rdon = array[i]; // reduction - сокращение
      if (result[rdon.course] === undefined){
      result[rdon.course] = {
        counter: 0,
        sumEstimate: 0,
        notActiveCounter: 0,
      };
      }
      result[rdon.course].counter++;
      result[rdon.course].sumEstimate += rdon.esimate;
      if (rdon.active == false){
        notActiveCounter++;
        result[rdon.course].notActiveCounter++;
      }
    }
    for (let key in result){
      let avgEstimate = result[key].sumEstimate/result[key].counter;
      console.log(key + " курс имеет среднюю оценку " + avgEstimate.toFixed(1) + " и " + result[key].notActiveCounter + " неактивных студентов");
    }
    console.log("общее количество неактивных студентов " + notActiveCounter);
         
  }
  unic([{name: "Olya", course: 2, esimate: 2, active: true},
    {name: "Ivan", course: 1, esimate: 5, active: false},
    {name: "Alex", course: 3, esimate: 5, active: false},
    {name: "Kolya", course: 1, esimate: 4, active: true},
    {name: "Misha", course: 1, esimate: 5, active: false},
    {name: "Kostya", course: 4, esimate: 5, active: true},
    {name: "Masha", course: 2, esimate: 4, active: true},
    {name: "Inna", course: 3, esimate: 4, active: false},
    {name: "Olya", course: 2, esimate: 4, active: true},
    {name: "Liza", course: 3, esimate: 4, active: true},
    {name: "Katya", course: 4, esimate: 4, active: false},
    {name: "Sonya", course: 3, esimate: 4, active: true}]);
  