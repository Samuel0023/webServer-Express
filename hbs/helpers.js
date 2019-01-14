//Helpers 

const hbs = require('hbs');
//Un helper es una accion que se dispara cuando el template lo necesita

hbs.registerHelper('getAnio', () => new Date().getFullYear());


hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});