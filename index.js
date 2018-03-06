function plantillaManual(){
    console.log("DOM Cargado");
    var vista={
        titulo: "Mi título",
        calculada:function(){
            return 2+4;
        }
    };
    var plantilla="{{titulo}} texto {{calculada}}";
    var salida=Mustache.render(plantilla,vista);
    document.getElementById("salida").innerHTML=salida;
}
function plantillaScript(){
    var plantilla=document.getElementById("plantilla").innerHTML;
    Mustache.parse(plantilla);
    var objeto={
        persona:"Pepe"
    };
    var renderizado=Mustache.render(plantilla,objeto);
    document.getElementById("salida2").innerHTML=renderizado;
}
function plantillaExterna(){
    $.get("plantilla.html",function(plantilla){
        //console.log(plantilla);
        var objeto={
            persona:"Pepe"
        };
        var renderizado=Mustache.render(plantilla,objeto);
        //console.log(renderizado);
        $("#salida3").html(renderizado);
    });
}
function plantillaBucle(){
    $.get("bucle.html",function(plantilla){
        //console.log(plantilla);
        var objeto={
            miarray:[
                {name:"uno"},
                {name:"dos"},
                {name:"tres"},
            ],
            otroarray:[
                "uno",
                "dos",
                "tres",
            ]
        };
        var renderizado=Mustache.render(plantilla,objeto);
        //console.log(renderizado);
        $("#salida4").html(renderizado);
    });
}
function plantillaHandleBars(){
    var codigo=$("#plantilla-handlebars").html();
    
    var plantilla=Handlebars.compile(codigo);
    
    var objeto={
        titulo:"Mi título molón"
    };
    var html=plantilla(objeto);
    //console.log(html);
    $("#salida5").html(html);
}
function plantillaHandleBarsExterna(){
    $.get("plantilla.handlebars",function(codigo){
        
        var plantilla=Handlebars.compile(codigo);

        var objeto={
            titulo:"Pepe",
            codigo_escapado:"<h2>código escapado</h2>",
            booleano:true,
            objeto_complejo:{
                nombre:"Pepe",
                apellido:"López"
            },
            miarray:[
                {name:"uno"},
                {name:"dos"},
                {name:"tres"},
            ]
        };
        var html=plantilla(objeto);
        //console.log(html);
        $("#salida6").html(html);
    });
    
}
Handlebars.registerHelper("ayuda",function(parametro){
    if(parametro){
        return "true";
    }else{
        return "false";
    }
});

function plantillasCompiladas(){
    //hay que tener instalado handlebars como comando
    //npm install -g handlebars
    // y ejecutar handlebars . -f templatesCompiled.js
    var objeto={
            titulo:"Pepe",
            codigo_escapado:"<h2>código escapado</h2>",
            booleano:true,
            objeto_complejo:{
                nombre:"Pepe",
                apellido:"López"
            },
            miarray:[
                {name:"uno"},
                {name:"dos"},
                {name:"tres"},
            ]
    };
    //porque ha compilado la plantilla.handlebars
    var html=Handlebars.templates.plantilla(objeto);
    //console.log(html);
    $("#salida7").html(html);
}
function init(){
    plantillaManual();
    plantillaScript();
    plantillaExterna();
    plantillaBucle();
    plantillaHandleBars();
    plantillaHandleBarsExterna();
    plantillasCompiladas();
}
document.addEventListener("DOMContentLoaded",init);