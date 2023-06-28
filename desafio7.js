var resp = 'sim'
alert("Calculadora js");
while (resp == 'sim'||resp == 's') {
    function soma() {
        return (+n1) + (+n2);
    }
    function subtração(){ 
        return +n1 - (+n2)
    }
    function multiplicação(){
        return (+n1) * (+n2)
    }
    function divisão(){
        if (n2 != 0){
            return (+n1) / (+n2);
        } else {
            alert ('Não é possível dividir por zero.');
        }
    }

    var n1 = prompt("Informe o 1° um número");
    var n2 = prompt("Informe o 2° um número");

    var tip = prompt("Escolha a operação: Soma '+', Subtração '-', Multiplicação '*' ou divisão'/'.")
    switch (tip) {
        case '+':
            alert(soma());
            break;
        case '-':
            subtração;
            alert(subtração());
            break;
        case '*':
            multiplicação;
            alert(multiplicação());
            break;
        case '/':
            divisão;
            alert(divisão());
            break;
        default:
            alert("Operação inválida");
            break;
    }
    resp = prompt("Gostaria de fazer outro calculo?")
}
