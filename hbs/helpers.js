var hbs = require('hbs');

//helpers de HBS

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

//Coloca en mayusculas la primera posición
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
})