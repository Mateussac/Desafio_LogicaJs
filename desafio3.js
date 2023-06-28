var nome = prompt("Diga qual é o seu nome:");
alert("Olá "+nome+", qual destino quer seguir?");
var escolha = prompt("Insira 'F' para Front-End, caso queira aprender React ou Vue, ou 'B' para Back-End, caso queira aprender C# ou Java."); 
if (escolha == 'F'){
    alert("Front-End, boa escolha!!!");
}else if (escolha == 'B'){
    alert("Back-End, boa escolha!!!");
}

var lista = [];

alert("Gostaria de seguir se especializando na área escolida ou seguir se desenvolvendo para se tornar Fullstack?");
var escolha2 = prompt("Escolha '1', para se especializar na área escolida, ou '2', para se tornar Fullstack.");
if (escolha2 == '1'){
    alert("Muito bem!");
}else if (escolha2 == '2'){
    alert("Muito bem!");
}

var esp = prompt(nome+" teria alguma tecnologia que você gostaria se especializar? 's' para SIM e 'n' para NÃO");
if (esp == 's'){
    var lesp 
    alert("Adicione as tecnologias que gostaria aprender, e quando não tiver mais escreva '1'");
    let i = 0
    while (i = 1){
        if (lesp != '1'){
            lesp = prompt("Tecnologias:");
        } else if(lesp == '1'){
            i = i + 1
        }
    } 

} else if(esp == 'n'){
    alert("Obrigado pela participação");
}
alert(lista);
