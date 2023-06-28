var resp, tip, item, remov
var frutas = []; 
var frios = []; 
var doces = []; 
var laticinios  = [];
var verduras = [];
var carne = [];
resp = prompt("Deseja adicionar uma comida na sua lista de compras?");
while (resp == 'sim'||resp == 's') {
    item = prompt("Qual é a comida?");
    tip = prompt("Em qual categoria esse alimento se encaixa: frutas, verduras, carne doces, frios ou laticínios?");
    if (tip == 'frutas'||tip == 'fruta'){
        frutas.push(item);
    } else if (tip == 'doces'||tip == 'doce'){
        doces.push(item);
    } else if (tip == 'frios'||tip == 'frio'){
        frios.push(item);
    } else if (tip == 'laticinios'||tip == 'laticinio'){
        laticinios.push(item);
    } else if (tip == 'verduras'||tip == 'verdura' ){
        verduras.push(item);
    } else if (tip == 'carne'||tip == 'carnes' ){
        carne.push(item);
    }
    item = ('');
    remov = prompt("Deseja remover algum item da lista?")
    if(remov == 'sim'||remov == 's') {
        remov = prompt("Gostaria remover de qual lista, Frutas, verduras, carne doces, frios ou laticínios?");
        if (remov == 'frutas'||remov == 'fruta') {
            alert(frutas);
            item = prompt("Informe qual é o alimento que quer remover");
            remov = frutas.indexOf(item);
            frutas.splice(remov, 1);
        } else if (remov == 'doces'||remov == 'doce') {
            alert(doces);
            item = prompt("Informe qual é o alimento que quer remover");
            remov = doces.indexOf(item);
            doces.splice(remov, 1);
        } else if (remov == 'frios'||remov == 'frio') {
            alert(frios);
            item = prompt("Informe qual é o alimento que quer remover");
            remov = frios.indexOf(item);
            frios.splice(remov, 1);
        } else if (remov == 'laticinios'||remov == 'laticinio') {
            alert(laticinios);
            item = prompt("Informe qual é o alimento que quer remover");
            remov = laticinios.indexOf(item);
            laticinios.splice(remov, 1);
        } else if (remov == 'verduras'||remov == 'verdura') {
            alert(verduras);
            item = prompt("Informe qual é o alimento que quer remover");
            remov = verduras.indexOf(item);
            verduras.splice(remov, 1);
        } else if (remov == 'carne'||remov == 'carnes') {
            alert(carne);
            item = prompt("Informe qual é o alimento que quer remover");
            remov = carne.indexOf(item);
            carne.splice(remov, 1);
        }
    }
    resp = prompt("Deseja adicionar uma comida na sua lista de compras?");
}
console.log("frutas: "+frutas);
console.log("frios: "+frios);
console.log("doces: "+doces);
console.log("laticinios: "+laticinios);
console.log("verduras: "+verduras);
console.log("carne: "+carne);