


function afficheResult(){

  let number1: number = parseFloat((<HTMLInputElement>document.getElementById('number1')).value);
  let number2: number = parseFloat((<HTMLInputElement>document.getElementById('number2')).value);
  let operation: string = ((<HTMLInputElement>document.getElementById('operation')).value);
  
  let result: number|any; 



  // dataResult.innerHTML = 1
// console.log(dataResult)


  console.log(number1);
  console.log(number2);

  if (operation === '+'){
    result = number1 + number2;
  }

  if (operation === '-'){
    result = number1 - number2;
  }
  
  if (operation === '*'){
    result = number1 * number2;
  }
  
  if (operation === '/'){
    if((number2 === 0)&&(number1 === 0)){
      // document.getElementById('result').innerHtml = "Cette operation est impossible";
    }else{
      result = number1 / number2;
    }
  }

  console.log(result);
  
  let ResulteP: HTMLParagraphElement|any = document.getElementById('result')
  ResulteP.innerText = result;

  
}
