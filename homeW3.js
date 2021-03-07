//3.1  Все скрипты которые писали в рамках первого и второго задания - оформить в виде функций. Выполнено



//3.3 Написать функцию, которая транспонирует матрицу
let MatrixTranspose = function(array, totallength){
    let reverce = [];
    for (let i = 0; i<totallength; i++){
      reverce.push([]);
    }
    for (let b = 0; b<totallength; b++){
      for (let j = 0; j<totallength; j++){
        reverce[j].push(array[b][j]);
      }
    }
    console.log(reverce);
  }
  MatrixTranspose([[1,2,3],[1,2,3],[1,2,3]], 3);
  
  
  //3.4 Написать функцию, которая суммирует две матрицы
  let MatrixSum = function(array, sarray, totallength){
    for (let b = 0; b<totallength; b++){
      for (let j = 0; j<totallength; j++){
        array[b][j] += sarray[b][j];
      }
    }
    console.log(array);
  }
  MatrixSum([[3,2,3],[6,2,6],[1,2,3]], [[3,4,3],[1,2,3],[7,2,3]], 3);
  
  
  //3.5 Найти номер столбца двумерного массива сумма которого является максимальной (аналогично для строки)
  let MatrixStr = function(array, totallength){
      let number;
      let res = 0
      for (let b = 0; b<totallength; b++){
        let sum = 0
          for (let j = 0; j<totallength; j++){
            sum += array[b][j];
            if (res < sum){
              res = sum;
              number = b;
          }
        }
      }
      console.log(number);
    }
    MatrixStr([[8,8,8],[7,9,9],[33,2,3]], 3);
  
    let MatrixStolbec = function(array, totallength){
      let number;
      let res = 0
      for (let b = 0; b<totallength; b++){
        let sum = 0
          for (let j = 0; j<totallength; j++){
            sum += array[j][b];
            if (res < sum){
              res = sum;
              number = b;
          }
        }
      }
      console.log(number);
    }
    MatrixStolbec([[8,3,8],[7,9,9],[3,2,7]], 3);

//3.6 Удалить из массива все столбцы которые не имеют ни одного нулевого элемента и сумма которых положительна - оформить в виде функции

  let MatrixDeleteStolbec = function(array, totallength){
    let counter = 0;
    for (let b = 0; b<totallength;){
      let sum = 0;
      let zeroFactor = false;
      let deleteFactor = false;
        for (let j = 0; j<totallength; j++){
          sum += array[j][b];
          console.log(sum);
          if (array[j][b] === 0){
              zeroFactor = true;
          }
          if ( j === totallength-1 ){
              if ((sum > 0 && zeroFactor === false)){
                  deleteFactor = true;
              }
          }
        }
        if (deleteFactor === true){
            for (let c = 0; c<totallength; c++){
                array[c].splice(b, 1); 
            }
            counter+=1;
        }
        else if(deleteFactor === false){
            b++;
            counter+=1;
        }
        if (counter === totallength){
            break;
        }
    }
    console.log(array);
};
MatrixDeleteStolbec([[-5,3,8],[7,9,5],[3,2,0]], 3);
