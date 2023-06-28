var num = Math.floor(Math.random() * (10 - 0 + 1) + 0 )
var n;
for (var i = 1; i <= 3; i++){
    n = prompt("Adivinhe um numero de 0 até 10");
    if (n == num){
        alert("Muito bem!!!");
        i = 3;
    } else {
            if (i < 3){
            alert("Errou, tente novamente");
        } else {
            alert("Foram bons chutes, o numero era "+num+". Sorte na proxima vez");
        }
    }
}
alert("Obrigado pela participação");