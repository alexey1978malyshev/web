function calc(){
    let num1 = parseInt(prompt("Введите первое число:"));
    let action = prompt("Введите действие: '+','-','*','/'");
    let num2 = parseInt(prompt("Введите второе число:"));
    switch (action) {
        case "+":
            alert(`${num1} ${action} ${num2} = ${num1+num2}`);            
            break;
        case "-":
            alert(`${num1} ${action} ${num2} = ${num1-num2}`);            
            break;
        case "*":
            alert(`${num1} ${action} ${num2} = ${num1*num2}`);            
            break;
        case "/":
            alert(`${num1} ${action} ${num2} = ${num1/num2}`);            
            break;
    
        default:
            alert("недопустимая операция");
            break;
    }
}