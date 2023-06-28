function salvar() {
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var ling = document.getElementById("ling");
    
    alert("Olá "+nome.value+", você tem "+idade.value+" anos e já está aprendendo "+ling.value+"!");
    
    var extra = prompt("Você gosta de estudar "+ling.value+"? Responda com o número 1 para SIM ou 2 para NÃO.");
    if (extra == 1){
        alert("Muito bom! Continue estudando e você terá muito sucesso;");
    } else if(extra == 2){
        alert("Ahh que pena... Procure outras linguagens, você conserteza irá gostar de alguma.");
    }
}
