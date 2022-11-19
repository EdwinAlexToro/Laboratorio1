var inpAjax = document.querySelector('#inpAjax');
var btnAjax = document.querySelectorAll('#btnAjax');
var reqStatus = document.querySelector('#reqStatus');
var resAjax = document.querySelector('#resAjax');


//se crea el objeto para realizar la peticion

var xhr = new XMLHttpRequest();

//Se obtiene el elemento del documento donde ira la respuesta en la pagina

var resAjax = document.getElementById('resAjax');

//Se crea el fracmento que hará parte del documento

var fracmento = document.createDocumentFragment();

btnAjax.addEventListener('oneclick',function(){
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.onload = (e) => {
    if(xhr.readyState === 4){
        if(xhr.status == 200){
            console.log(xhr.responseText);
        }

    }else{
        console.error(xhr.statusText);

    }

};
xhr.onerror = (e) =>{
    console.error(xhr.statusText);
};
xhr.send();

});



