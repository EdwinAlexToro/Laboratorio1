var inpPalindromo = document.querySelector("#inpPalindromo");
var resPalindromo = document.querySelector("#resPalindromo");
var btnPalindromo = document.querySelector("#btnPalindromo");

$("#btnBorrar").fadeOut();
$("#resPalindromo").fadeOut();
function isPalindromo(palabra){

    if(palabra == null || palabra.length == 0 || palabra ==""){
        resPalindromo.innerHTML ="No has ingresado un valor aceptable !!";
    }else if(!isNaN(palabra)){
        resPalindromo.innerHTML="!!Campo vacio, Ingresa un valor"
    }else{
        
    var arreglo  = palabra.split("");
    var reverso = arreglo.reverse();
    return palabra == reverso.join("") ? resPalindromo.innerHTML ="Es un palindromo" : resPalindromo.innerHTML = "No es palindromo";
    }
}

btnPalindromo.addEventListener('click', function () {
    isPalindromo(inpPalindromo.value);
    $("#resPalindromo").fadeIn();
    $("#btnPalindromo").fadeOut();
    $("#btnBorrar").fadeIn();
    $("#btnBorrar").click(function(){
        inpPalindromo.value = "";
        resPalindromo.innerHTML="";
        $("#btnPalindromo").fadeIn();
        $("#btnBorrar").fadeOut();
    });
    
});


var inpFirstNumber = document.querySelector("#inpFirstNumber");
var inpSecondNumber = document.querySelector("#inpSecondNumber");
var btnIsBigNumber = document.querySelector("#btnIsBigNumber");
var btnIsBigBorrar = document.querySelector("#btnIsBigBorrar");
var resBigNumber = document.querySelector("#resBigNumber");



$("#btnIsBigBorrar").fadeOut();
$("#resBigNumber").fadeOut();
function isBigNumber(n1, n2){


    if(n1 ==""&& n2 ==""){
        resBigNumber.innerHTML="!!Campos vacios, Ingresa un valor"
    }else if(n1 ==""|| n2 ==""){
        resBigNumber.innerHTML ="Prueba con dos numeros !!";
    }else if(n1 == n2){
        return resBigNumber.innerHTML= "Son iguales"
    }else{
    return n1 > n2 ? resBigNumber.innerHTML =`${n1}Es mayor` : resBigNumber.innerHTML = `${n2} Es mayor`;
    }
}

btnIsBigNumber.addEventListener('click', function () {
    isBigNumber(inpFirstNumber.value,inpSecondNumber.value);
    $("#resBigNumber").fadeIn();
    $("#btnIsBigNumber").fadeOut();
    $("#btnIsBigBorrar").fadeIn();
    $("#btnIsBigBorrar").click(function(){
        inpFirstNumber.value = "";
        inpSecondNumber.value = "";
        resBigNumber.innerHTML="";
        $("#btnIsBigNumber").fadeIn();
        $("#btnIsBigBorrar").fadeOut();
    });
    
});



var inpVocales = document.querySelector("#inpVocales");
var btnVocales = document.querySelector("#btnVocales");
var btnVocBorrar = document.querySelector("#btnVocBorrar");
var resVocales = document.querySelector("#resVocales");

var dicSinTilde = ['a','e','i','o','u'];
var dicConTilde = ['á','é','í','ó','ú'];
var dicMayConT = ['Á','É','Í','Ó','Ú'];
var dicMaySinT = ['A','E','I','O','U'];
var pila;

$("#btnVocBorrar").fadeOut();
$("#resVocales").fadeOut();
function vocales(frase){
    pila = "";
    
    var pal = frase.split(" ");//seleciona las palabras
    var par = pal.join("");    // Junta todo sin espacios
    pal = par.split("");       //crea una lista sin espacios
    for(var i = 0; i < pal.length;i++){
        for(var j = 0; j < 5; j++){
            if(pal[i] == dicSinTilde[j] ||pal[i] == dicConTilde[j] || pal[i] == dicMaySinT[j] || pal[i] == dicMayConT[j]){
                pila+=pal[i];
            }
        }
    }
    return pila;
}


btnVocales.addEventListener('click', function () {
    resVocales.innerHTML=vocales(inpVocales.value);
    $("#resVocales").fadeIn();
    $("#btnVocales").fadeOut();
    $("#btnVocBorrar").fadeIn();
    $("#btnVocBorrar").click(function(){
        inpVocales.value = "";
        resVocales.innerHTML="";
        $("#btnVocales").fadeIn();
        $("#btnVocBorrar").fadeOut();
    });
    
});




var inpNumVocales = document.querySelector("#inpNumVocales");
var btnNumVocales = document.querySelector("#btnNumVocales");
var btnNumVocBorrar = document.querySelector("#btnNumVocBorrar");
var resNumVocales = document.querySelector("#resNumVocales");

// let dicPlantilla = {'a':0,'e':0,'i':0,'o':0,'u':0,
//                    'á':0,'é':0,'í':0,'ó':0,'ú':0,
//                    'Á':0,'É':0,'Í':0,'Ó':0,'Ú':0,
//                    'A':0,'E':0,'I':0,'O':0,'U':0};
// var pila2=  vocales(inpNumVocales.value);

// $("#btnNumVocBorrar").fadeOut();
// $("#resNumVocales").fadeOut();


// function numVocales(paramPila,diccionario){
//     for(let vocal of paramPila){
//         for(const [llave, valor] of Object.entries(diccionario)){
//             if(vocal == llave ){
//                 diccionario[llave] += 1;
//                 break;
//             }
            
//         }
//     }
//     var salida= "" ;
//     for(const[key,val] of Object.entries(diccionario)){
//         if(val == 0){
//             continue;
//         }else{
//             salida += key;
//             salida += ":";
//             salida += val +",";
//         }
//     }
//     return salida;
// }


btnNumVocales.addEventListener('click', function () {
    var dicActual = dicPlantilla;
    resNumVocales.innerHTML =numVocales(pila2, dicActual);
    
    $("#resNumVocales").fadeIn();
    $("#btnNumVocales").fadeOut();
    $("#btnNumVocBorrar").fadeIn();
    $("#btnNumVocBorrar").click(function(){
        inpNumVocales.value = "";
        resNumVocales.innerHTML="";
        $("#btnNumVocales").fadeIn();
        $("#btnNumVocBorrar").fadeOut();
    });
    
});