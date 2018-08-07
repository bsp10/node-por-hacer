const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new error('No se puedo grabar', err);
        
    });
}

const cargaDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
   
}

const crear = (descripcion) => {
    cargaDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargaDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;   
    }

}

const borrar = (descripcion) => {
    cargaDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(index)
    if(index >= 0){
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
