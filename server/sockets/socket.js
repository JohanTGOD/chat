const { io } = require('../server');
const { Usuario } = require('../classes/usuario')
const usuarios = new Usuario();


io.on('connection', (client) => {

    console.log('Usuario conectado');
    client.on('entrarChat',(data, callback)=>{
        console.log(data.nombre);
        if (!data.nombre) {
            return callback({
                error: true,
                mensaje:'EL nombre es necesario'
            })
        }

        let personas =usuarios.addPerso(client.id, data.nombre);
        client.broadcast.emit('listaPersona',usuarios.getAllPeople());
        callback(personas);
    })

    client.on('disconnect',()=>{

        let personaBorrada = usuarios.deletePerson(client.id);
        client.broadcast.emit('crearMensaje',{usuario:'Administrador', mensaje:`${personaBorrada.nombre} abandono el chat`})
        client.broadcast.emit('listaPersona',usuarios.getAllPeople());
    })


    // client.emit('enviarMensaje', {
    //     usuario: 'Administrador',
    //     mensaje: 'Bienvenido a esta aplicación'
    // });



    // client.on('disconnect', () => {
    //     console.log('Usuario desconectado');
    // });

    // Escuchar el cliente

});