function calculator(string) {
    function romanNumerals(number) {
      var numberArray = number.toString().split("").reverse();
      var result = "";
      var numerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C"]];
  
      if (otv < 0) {
         err_ = true;
      }
      for (var i in numberArray) {
        result = numerals[i][parseInt(numberArray[i])] + result;
      };
      otv = result;
      return otv;
    };
  
    let arr = string.split(' ');
    let a = arr[0]; // первое число
    let c = arr[1]; // (знак)
    let b = arr[2]; // второе число
  
    let otv = null; // ответ
    let answer = true; // проверка на корректность 
    let Rim = false; // проверка на римское 1 число 
    let arabic = false; // проверка на арабские числа 
    let err = false;
    let err_ = false;
  
    let arrRim = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    let arrArabic = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  
    if (typeof arr[3] == 'string') {
      throw new Error(`Неккоректная операция!`)
    }
  
    if (arrRim.includes(a) & arrRim.includes(b)) {
      // console.log('рим');
      Rim = true;
      for (i = 0; i < arrRim.length; i++) {
        if (a == arrRim[i]) {
          a = arrArabic[i]
        };
        if (b == arrRim[i]) {
          b = arrArabic[i]
        };
      }
    } else if (arrArabic.includes(a) & arrArabic.includes(b)) {
  
    } else throw new Error(`Два разных числа!`);
  
    a = Number(a);
    b = Number(b);

    if (c == '+') {
      otv = a + b;
    } else if (c == '-') {
      otv = a - b;
    } else if (c == '*') {
      otv = a * b;
    } else if (c == '/') {
      if (a === 0 || b === 0) {
        err = true;
      } else otv = a / b;
    } else throw new Error (`Неккоректная операция!`);
  
    if (err) {
      return console.log('На ноль делить нельзя ')
    }

    try {
      if (Rim) {
        otv = parseInt(otv);
        if (otv < 0) {
          otv = '';
        }
        romanNumerals(otv);
        otv = String(otv);
        return otv;
      } else {
        otv = parseInt(otv);
          otv = String(otv)
          return otv
      }
    } catch { 
       if (true) {
        throw new Error(`Некорректные данные`)
      }
}



  };

calculator('1 + 0');
