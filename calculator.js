function calculator (){
    var operation = prompt ('Which operation do you want to carry out?(addition/subtraction/multiplication/division/power/square root)')
    var num1 = prompt('Enter number 1:')
    var num2= prompt('Enter num 2:')
    if (operation == "addition"){
        var result = alert(+ num1 + + num2);
    }
    else if (operation == "subtraction"){
        var result = alert(num1 - num2);
    }
    else if (operation == "multiplication"){
        var result = alert(num1 * num2);
    }
    else if (operation == "division"){
        var result = alert(num1/num2);
    }
    else if (operation == "power"){
        var result = alert(Math.pow(num1,num2))
    }
    else if (operation == "square root"){
        var result = alert(Math.sqrt(num1))
    }
}
