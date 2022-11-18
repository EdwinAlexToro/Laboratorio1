////////////////////////////////////Palindromo/////////////////////////////////////////

$(function(){
    $("#flex__container--aside").fadeOut();
    $("#bars").click(function(){
        $("#flex__container--aside").fadeIn();
    });
});
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
////////////////////////////////////Numero mayor////////////////////////////////////

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

/////////////////////////////Vocales que existen dentro del parrafo////////////////////////////////////

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
///////////////////////////Contar el numero de vocales////////////////////////



var inpNumVocales = document.querySelector("#inpNumVocales");
var btnNumVocales = document.querySelector("#btnNumVocales");
var btnNumVocBorrar = document.querySelector("#btnNumVocBorrar");
var resNumVocales = document.querySelector("#resNumVocales");


$("#btnNumVocBorrar").fadeOut();
$("#resNumVocales").fadeOut();


function numVocales(arr){
    var a = ['a','á','A','Á'];
    var e = ['e','é','E','É'];
    var i = ['i','í','I','Í'];
    var o = ['o','ó','O','Ó'];
    var u = ['u','ú','U','Ú'];
    var A= 0;
    var E= 0;
    var I= 0;
    var O= 0;
    var U= 0;

    for( k of arr){
        for( m in a){
            if(k == a[m]){
                A++;
            }else if(k == e[m]){
                E++;
            }else if(k == i[m]){
                I++;
            }else if(k == o[m]){
                O++;
            }else if(k == u[m]){
                U++;
            }else{
                continue;
            }
        }
    }
    let salida = ("a:"+A+"  e:"+E+"  i:"+I+"  o:"+O+"  u:"+U);
    return salida;
}

btnNumVocales.addEventListener('click', function () {
    resNumVocales.innerHTML= numVocales(inpNumVocales.value);
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