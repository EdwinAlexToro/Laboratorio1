
var inpAjax = document.querySelector('#inpAjax');
var btnAjax = document.querySelectorAll('#btnAjax');
var btnClear = document.querySelectorAll('#btnClear');
var state__peticion = document.querySelector('#state__peticion');
var http__code__container = document.querySelector('.http__code--container');
var http__response = document.querySelector('#http__response');
var ajax__response__container = document.querySelector('.ajax__response--container');
var ajax__response = document.querySelector('#ajax__response');




function peticionAjax(url){

    ///Condicional para comprobar la inpAjax
    
    
    if(inpAjax == "" || inpAjax == 0 || inpAjax == null ){
        console.log("Ingreso al error");

        state__peticion.innerHTML = "Comporbando";

        setTimeout(function(){

            console.log("Error");
            state__peticion.innerHTML = "Error";
            $(http__code__container).fadeIn();
            http__response.innerHTML = "Ingresa una inpAjax valida";
            $(btnAjax).fadeOut();
            $(btnClear).fadeIn();
            
        },500);

        
        //Comprobar si hay algun resultado en pantalla
        //Antes de iniciar una nueva peticion
    }else if(state__peticion.innerHTML == "" ||state__peticion.innerHTML == "Sin iniciar"){
        console.log("Ingreso a la creacion");
        (() => { 

            //Crear objeto XHR
            const XHR = new XMLHttpRequest();

            //Guardar en una variable El nodo para la respuesta Http
            const $xhr = document.getElementById("ajax__response");

            //Crea un fracmento de documento el cual sera insertado en el documento con la respuesta del servido
            const $fragmento = document.createDocumentFragment();

            //Muestra por consola el objeto XHR
            console.log(XHR);

            //Crea un evento para la lectura del cambio de estado del objeto XHR
            XHR.addEventListener("readystatechange",(e) =>{ 


                state__peticion.innerHTML = "Comprobando...";
                //Comprobar el estado cargando
                if(XHR.readyState == 1){

                    setTimeout(function(){

                        console.log("Cargando...");
                        return state__peticion.innerHTML = "Cargando...";
                        },250);
                }
                //Comprobar estado completado
                if(XHR.readyState !== 4){

                    setTimeout(function(){

                        console.log("Completado...");
                        state__peticion.innerHTML = "Completado...";
                    },500)
                    return;
                }
                //Comprobar y mostrar el resultado de cabeceras de peticion
                setTimeout(function(){
                    //Si es una respuesta satisfactoria realiza las operaciones necesarias
                    //para mostrar la respuesta del servidor
                    if(XHR.status >=200 && XHR.status < 300){
                        console.log("!! Exito");
                        state__peticion.innerHTML = "!! Exito";

                        let ajaxRes = JSON.parse(XHR.responseText);
                        console.log(ajaxRes);

                        ajaxRes.forEach((element) => {

                            const $li = document.createElement("li");
                            $li.className = "lista";
                            $li.innerHTML = `<br>
                            Nombre: ${element.name} <br>
                            Email: ${element.email} <br>
                            Télefono: ${element.phone} <br><br>`;

                            $fragmento.appendChild($li);
                            
                        });


                        $xhr.appendChild($fragmento);
                        $(ajax__response__container).fadeIn();


                    //De lo contrario Muestra el error y la respuesta del servidor
                    }else{
                        console.log("Error");
                        state__peticion.innerHTML = "Error";
                        http__response.innerHTML = `${XHR.status}: Error en la Url..."`;
                        $(http__code__container).fadeIn();
                        
                    }
                    //Cambio de boton mostrar a boton borrar
                
                    $(btnAjax).fadeOut();
                    $(btnClear).fadeIn();

                },750);

            });
            //Metodos send y open
            XHR.open("GET", url);
            XHR.send();
            
        })();
    }else{
        document.write("No Ingreso");
    }
};
document.addEventListener("DOMContentLoaded", function(event) {
$(btnClear).fadeOut();
$(http__code__container).fadeOut();
$(ajax__response__container).fadeOut();

// btnAjax.addEventListener('click',function () {
btnAjax[0].addEventListener("click", function (){
    peticionAjax(inpAjax.value);
});

btnClear[0].addEventListener("click",function () {
    ajax__response.innerHTML="";
    http__response.innerHTML="";
    state__peticion.innerHTML= "Sin iniciar";
    $(btnAjax).fadeIn();
    $(btnClear).fadeOut();
});
});



//Evento mostrar 



//Evento borrar y cambio de boton borrar a mostrar




