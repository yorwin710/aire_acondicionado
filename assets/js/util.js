'use string'

function validarFormulario(){
    debugger
    var codigo = $('#codigo').val();
    var nombre = $('#nombre').val();
    var email = $('#email').val();
    var asunto = $('#asunto').val();
    var mensaje = $('#mensaje').val();

    if (codigo == "") {
        codigo = localStorage.getItem('codigo');
        $('#codigo').val(codigo);
        return;
    }

    if(nombre == ""){
        $('#errorNombre').html("No puede estar vacio");
        return;
    }

    if (email == "") {
        $('#errorEmail').html("No puede estar vacio");
        return;
    }

    if (asunto == "") {
        $('#errorAsunto').html("No puede estar vacio");
        return;
    }

    if (mensaje == "") {
        $('#errorMensaje').html("No puede estar vacio");
        return;  
    }

    $('#formularioContacto').submit();
}

function quitarError(){
    if (nombre != "") {
        $('#errorNombre').html("");
    }

    if (email != "") {
        $('#errorEmail').html("");
    }

    if (asunto != "") {
        $('#errorAsunto').html("");
    }

    if (mensaje != "") {
        $('#errorMensaje').html("");
    }
}

function pasarId1() {
    debugger
    var codigo = $("#codigo1").html();
    localStorage.setItem('codigo', codigo);
}

function pasarId2() {
    debugger
    var codigo = $("#codigo2").html();
    localStorage.setItem('codigo', codigo);
}

function pasarId3() {
    debugger
    var codigo = $("#codigo3").html();
    localStorage.setItem('codigo', codigo);
}

function pasarId4() {
    debugger
    var codigo = $("#codigo4").html();
    localStorage.setItem('codigo', codigo);
}

function pasarId5(){
    debugger
    var codigo = $("#codigo5").html();
    localStorage.setItem('codigo', codigo);
}

function pasarId6(){
    debugger
    var codigo = $("#codigo6").html();
    localStorage.setItem('codigo', codigo);
}


