function afficheResult() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operation = (document.getElementById('operation').value);
    var result;
    // dataResult.innerHTML = 1
    // console.log(dataResult)
    console.log(number1);
    console.log(number2);
    if (operation === '+') {
        result = number1 + number2;
    }
    if (operation === '-') {
        result = number1 - number2;
    }
    if (operation === '*') {
        result = number1 * number2;
    }
    if (operation === '/') {
        if ((number2 === 0) && (number1 === 0)) {
            // document.getElementById('result').innerHtml = "Cette operation est impossible";
        }
        else {
            result = number1 / number2;
        }
    }
    console.log(result);
    var ResulteP = document.getElementById('result');
    ResulteP.innerText = result;
}
