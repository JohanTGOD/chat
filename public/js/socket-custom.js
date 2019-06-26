var socket = io();

var params = new URLSearchParams(window.location.search);

if (!params.has('nombre')) {
    window.location = 'index.html'
    throw new Error('EL nombre es necesario')
}

var usuario = {
    nombre: params.get('nombre')
};

socket.on('connect', function () {
    console.log('Conectado al servidor');
    socket.emit('entrarChat', usuario, function (res) {
        console.log("Usuarios Conectados", res);
    })
});



// escuchar
socket.on('disconnect', function () {

    console.log('Perdimos conexión con el servidor');

});

socket.on('crearMensaje', function(mensaje){
    console.log({"servidor":mensaje});
})

socket.on('listaPersona', function(per){
    console.log({per});
})


// // Enviar información
// socket.emit('enviarMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function (resp) {
//     console.log('respuesta server: ', resp);
// });

// // Escuchar información
// socket.on('enviarMensaje', function (mensaje) {

//     console.log('Servidor:', mensaje);

// });