const optsCrear = {
    descripcion:{
        demand: true,
        alias: 'd'
    }
}

const optsActualizar = {
    descripcion:{
        demand: true,
        alias: 'd'
    },
    completado:{
        alias: 'c',
        default: true
    }
}

const optsBorrar = {
    descripcion: {
        demand: true,
        alias: 'r'
    }
}

const argv = require('yargs')
            .command('crear', 'Crear un elemento por hacer', optsCrear)
            .command('actualizar', 'Actualiza el estado completado de una tarea', optsActualizar)
            .command('borrar', 'elimina una tarea', optsBorrar)
            .help()
            .argv;

module.exports = {
    argv
}