var menu;
var platoPrincipal = '';
var acompanamiento = '';
var costoPrincipal = '';
var costoAcompañante = '';
var costoPostre = '';
var postre = '';
var costoTotal = '';
var acompanamiento = '';

//comentarios
const comentarios = [
    "¡Excelente elección!",
    "¡Delicioso! ¡No te arrepentirás!",
    "Una opción muy popular.",
    "Perfecto para empezar el día.",
    "¡Buena selección!",
    "Una combinación ganadora.",
    "¡Eso suena genial!",
    "Una elección clásica.",
    "¡Fantástico!",
    "¡Sabrosa elección!"
];
const obtenerComentario = () => {
    const indice = Math.floor(Math.random() * comentarios.length);
        return comentarios[indice];
};
while (true) {
    hora = prompt('Bienvenido a Bottega\n por favor, indica la hora de tu reserva para ofrete nuestro menu\n *Desayuno\n *Almuerzo\n *Cena \n en formato HH\n Recuerda que nuestro horario de atencion es de 8 AM hasta las 24 PM');
    if (8 <= hora && hora< 12 ) {
        alert('Te ofreceremos los mejores Desayunos de la ciudad');
        var menu = 'desayuno';
        break;
    }
    if (12 <= hora && hora < 19 ) {
        alert('Te ofreceremos los mejores Almuerzos de la ciudad');
        var menu = 'almuerzo';
        break;
    }
    if (19 <= hora && hora < 24 ) {
        alert('Te ofreceremos las mejores Cenas de la ciudad');
        var menu = 'cena';
        break;
    }
    else {
        alert('Opción no válida. \nPor favor, ingresa la hora de tu reserva en formato HH\n Dentro del horario de atención');
    }
}
if (menu.toLowerCase() === 'desayuno') {
    while (true) {
        platoPrincipal = prompt('Elige tu plato principal para el desayuno: \n*Tostadas.......(5 Euros) \n*Cruisant.......(4 Euros)\n*Frutas............(3 Euros)\n ¿Qué deseas comer hoy?');
        if (platoPrincipal.toLowerCase() === 'tostadas') {
            alert(obtenerComentario());
            var costoPrincipal = 5;
            break;
        }
        else if (platoPrincipal.toLowerCase() === 'cruisant'){
            alert(obtenerComentario());
            var costoPrincipal = 4;
            break;
        }
        else if (platoPrincipal.toLowerCase() === 'frutas'){
            alert(obtenerComentario());
            var costoPrincipal = 3;
            break;
        } else {
        alert('Opción no válida. Por favor entre Tostadas o Cruisant.');
        }
    }

    while (true) {
        acompanamiento = prompt('Elige tu acompañamiento para el desayuno: \n*Huevos.........(5 euros)\n*Tomates........(4 Euros)\n*Aguacates......(3 Euros)');
        if (acompanamiento.toLowerCase() === 'huevos' ) {
            alert(obtenerComentario());
            costoAcompañante = 5;
            break;
        } 
        else if (acompanamiento.toLowerCase() === 'tomates' ) {
            alert(obtenerComentario());
            costoAcompañante = 4;
            break;
        }
        else if (acompanamiento.toLowerCase() === 'aguacate' ) {
            alert(obtenerComentario());
            costoAcompañante = 3;
            break;
        }
        else {
        alert('Opción no válida. Por favor entre Huevos, Tomates o Aguacate');
        } 
    }
} 
if (menu.toLowerCase() === 'almuerzo') {
    while (true) {
        platoPrincipal = prompt('Elige tu plato principal para el almuerzo: \n* Pollo.......(5 Euros) \n*Ternera.......(4 Euros)\n*Salmón............(3 Euros)\n ¿Qué deseas comer hoy?');
        if (platoPrincipal.toLowerCase() === 'pollo') {
            alert(obtenerComentario());
            costoPrincipal = 5;
            break;
        }
        else if (platoPrincipal.toLowerCase() === 'ternera'){
            alert(obtenerComentario());
            costoPrincipal = 4;
            break;
        }
        else if (platoPrincipal.toLowerCase() === 'salmon'){
            alert(obtenerComentario());
            costoPrincipal = 3;
            break;
        } else {
        alert('Opción no válida. Por favor entre Tostadas o Cruisant.');
        }
    }

    while (true) {
        acompanamiento = prompt('Elige tu acompañamiento para el Almuerzo: \n*Arroz.........(5 euros)\n*Ensalada........(4 Euros)\n*Sopa......(3 Euros)');
        if (acompanamiento.toLowerCase() === 'arroz' ) {
            alert(obtenerComentario());
            costoAcompañante = 5;
            break;
        } 
        else if (acompanamiento.toLowerCase() === 'ensalada' ) {
            alert(obtenerComentario());
            costoAcompañante = 4;
            break;
        }
        else if (acompanamiento.toLowerCase() === 'sopa' ) {
            alert(obtenerComentario());
            costoAcompañante = 3;
            break;
        }
        else {
        alert('Opción no válida. Por favor entre Arroz, Ensalada o Sopa');
        } 
    }
} 
if (menu.toLowerCase() === 'cena') {
    while (true) {
        platoPrincipal = prompt('Elige tu plato principal para el desayuno: \n*Pasta.......(5 Euros) \n*Pizza.......(4 Euros)\n*Arepas............(3 Euros)\n ¿Qué deseas comer hoy?');
        if (platoPrincipal.toLowerCase() === 'pasta') {
            alert(obtenerComentario());
            costoPrincipal = 5;
            break;
        }
        else if (platoPrincipal.toLowerCase() === 'pizza'){
            alert(obtenerComentario());
            costoPrincipal = 4;
            break;
        }
        else if (platoPrincipal.toLowerCase() === 'arepas'){
            alert(obtenerComentario());
            alert('Las arepas estas rellenas de carne, queso y Mayo\n una elección FENOMENAL')
            costoPrincipal = 3;
            break;
        } else {
        alert('Opción no válida. Por favor entre Tostadas o Cruisant.');
        }
    }

    while (true) {
        acompanamiento = prompt('Elige tu acompañamiento para la Cena: \n*Ensalada.........(5 euros)\n*Pan..........(4 Euros)\n*Queso......(3 Euros)');
        if (acompanamiento.toLowerCase() === 'ensalada' ) {
            alert(obtenerComentario());
            costoAcompañante = 5;
            break;
        } 
        else if (acompanamiento.toLowerCase() === 'pan' ) {
            alert(obtenerComentario());
            costoAcompañante = 4;
            break;
        }
        else if (acompanamiento.toLowerCase() === 'queso' ) {
            alert(obtenerComentario());
            costoAcompañante = 3;
            break;
        }
        else {
        alert('Opción no válida. Por favor entre Ensalada, Pan o Queso');
        } 
    }
} 
while (true) {
    postre = prompt('es hora de Elegir el acompañamiento Dulce de la Ocación\nLas opciones que tenemos de postre son las siguientes:,\n*(1)Arroz con leche ............ 3 Euros\n*(2)Natilla........... 2 Euros\n*(3)Dulce de leche.......1 Euro \n Por favor elige entre 1, 2 o 3.')
    if (postre === '1' ) {
            alert(obtenerComentario());
            postre = 'Arroz con leche';
            costoPostre = 3;
            break;
        } 
        else if (postre === '2' ) {
            alert(obtenerComentario());
            costoPostre = 2;
            postre = 'Natilla';
            break;
        }
        else if (postre === '3' ) {
            alert(obtenerComentario());
            costoPostre = 1;
            postre = 'Dulce de leche';
            break;
        }
        else {
        alert('Opción no válida. Por favor entre 1, 2 o 3');
        }
}

costoTotal = costoPrincipal + costoAcompañante + costoPostre;
alert('Has elegido para tu ' + menu + ':\n' + platoPrincipal + ' ............ ' + costoPrincipal + ' Euros\n' + acompanamiento + ' .......... ' + costoAcompañante + ' Euros\n' + postre + ' ..........' + costoPostre + ' Euros\ntotal .............' + costoTotal + ' Euros\n Gracias por preferirnos' );

alert('Recomiendanos en tus redes');
alert('Invita a tus amigos y gana cupones de descuento');
alert('Disfruta tu comida')
