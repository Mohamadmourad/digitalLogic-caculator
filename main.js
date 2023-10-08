document.getElementById('button').onclick = () => {
    let number = document.getElementById('number').value;
if(document.getElementById('from').value != 16 && document.getElementById('to').value != 16){ // not hexa decimal
    if(rangeCheck(number) && number >= 0){
        positiveDecimal(number);
    }
    else{
        document.getElementById('result').innerHTML = "You are out of range of " + document.getElementById('from').value ;
    }
} 

else{
    hexaNum(number);
}

}

function toDecimal(number){
    let counter = 0;
    let result = 0;
    let from =  document.getElementById('from').value;
    while(number!=0){
      result += (number%10) * Math.pow(from,counter++);
      number = Math.floor(number/10);
    }

    return result;
}

function fromDecimal(number){
    let result = 0;
    let to =  document.getElementById('to').value;
    let array = [];
    let resultString = "";
    while(number!=0){
        array.push(number%to);
        number = Math.floor(number/to);
      }
      array.reverse();
      for(let i = 0 ; i< array.length ; i++){
        resultString += array[i];
      }

      return  resultString;
}

function fromHexa(number){
    let from =  document.getElementById('from').value;
    let result = 0;
    let counter = 0;
    for(let i = number.length-1;i>= 0;i--){
        let digit = checkfromHexa(number.charAt(i));
        result += Math.floor(digit) * Math.pow(from,counter++);
    }
    return result;
}

function toHexa(number){
    let result = 0;
    let to =  document.getElementById('to').value;
    let array = [];
    let resultString = "";
    while(number!=0){
        let digit = checkToHexa(number%to);
        array.push(digit);
        number = Math.floor(number/to);
      }
      array.reverse();
      for(let i = 0 ; i< array.length ; i++){
        resultString += array[i];
      }

      return  resultString;
}




function rangeCheck(number){
    let from = document.getElementById('from').value;
    while(number != 0){
        if(number%10<0 || number%10 >= from)
        return false;
        number = Math.floor(number/10);
    }
    return true;
}

function positiveDecimal(number){
    if(document.getElementById('from').value == 10){
        document.getElementById('result').innerHTML =  fromDecimal(number);
    }
    else if(document.getElementById('to').value == 10){
        document.getElementById('result').innerHTML = toDecimal(number);
    }
    else{
    document.getElementById('result').innerHTML = fromDecimal(toDecimal(number));
   }
}

function hexaNum(number){
    if(document.getElementById('from').value == 16 && document.getElementById('to').value == 16){
        document.getElementById('result').innerHTML =  number.toUpperCase();
    }

   else if(document.getElementById('to').value == 16){
        document.getElementById('result').innerHTML =  toHexa(toDecimal(number)); // it turn the number to decimal afterward to hexa
    }

   else if(document.getElementById('from').value == 16){
        document.getElementById('result').innerHTML =  fromDecimal(fromHexa(number));// it transform from hexa to decimal afteward from decimal to in input
    }
}

function checkfromHexa(digit){
      if(digit == 'a' || digit == 'A')
      return 10;
      else if(digit == 'b' || digit == 'B')
      return 11;
      else if(digit == 'c' || digit == 'C')
      return 12;
      else if(digit == 'd' || digit == 'D')
      return 13;
      else if(digit == 'e' || digit == 'E')
      return 14;
      else if(digit == 'f' || digit == 'F')
      return 15;
    else
    return digit;
    }
    
    function checkToHexa(digit){
      if(digit == 10)
      return 'A';
      else if(digit == 11)
      return 'B';
      else if(digit == 12)
      return 'C';
      else if(digit == 13)
      return 'D';
      else if(digit == 14)
      return 'E';
      else if(digit == 15)
      return 'F';
    else
    return digit;
    }