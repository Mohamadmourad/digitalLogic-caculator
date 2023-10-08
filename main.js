document.getElementById('button').onclick = () => {
    let number = document.getElementById('number').value;
if(rangeCheck(number)){
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
else{
    document.getElementById('result').innerHTML = "You are out of range of " + document.getElementById('from').value ;
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

function rangeCheck(number){
    let from = document.getElementById('from').value;
    while(number != 0){
        if(number%10>=0 && number%10 < from)
        console.log('good')
        else
        return false;
        number = Math.floor(number/10);
    }
    return true;
}