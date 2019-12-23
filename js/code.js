"use strict";

var game = {},
    escena = $('#container'),
    marcador = $('#marcador'),
    acciones = $('#areatexto'),
    fecha = new Date();

game.year = fecha.getFullYear();
game.month = fecha.getMonth();

var mazo = shuffle(tarjetas);

function inicial() {

    game.score = {
        politica: 3 + Math.floor(Math.random() * 4),
        economia: 3 + Math.floor(Math.random() * 4),
        popular: 3 + Math.floor(Math.random() * 4),
        corrupcion: 0
    };
    game.player = {
        nombre: nombres[Math.floor(Math.random() * nombres.length)],
        apellido: apellidos[Math.floor(Math.random() * apellidos.length)],
        partido: partidos[Math.floor(Math.random() * partidos.length)]
    };
    game.turn = 0;

    escena.removeClass();
    escena.html('');

    //pantalla de inicio presentando la situación
    escena.addClass('conferencia');
    escena.append('<h1>Renovación en la Diputación</h1><h2><strong>' + game.player.nombre + ' ' + game.player.apellido + '</strong> del <strong>' + game.player.partido + '</strong> ha sido elegido ' + valorpolitica[Math.floor((game.score.politica - 2) / 2)] + ' nuevo presidente de la Diputación de Málaga.</h2><p>Las arcas públicas están ' + valoreconomia[Math.floor((game.score.economia - 2) / 2)] + ', y los ciudadanos ven el nombramiento con ' + valorpopular[Math.floor((game.score.popular - 2) / 2)] + '.</p>');
    dibujar_puntuacion();


    acciones.append('<button class="start">¡Vamos a gobernar!</button>');
    acciones.find('button.start').click(function () {
        $(this).remove();
        turno();
    });

}

function dibujar_puntuacion() {

    marcador.find('.year').html(game.year + ' <span>' + meses[game.month] + '</span>');

    marcador.find('.pol span').css({
        'height': game.score.politica * 10 + '%'
    });
    marcador.find('.eco span').css({
        'height': game.score.economia * 10 + '%'
    });
    marcador.find('.pop span').css({
        'height': game.score.popular * 10 + '%'
    });

}

function turno() {
    if (game.turn > 0) {
        game.month++;
        if (game.month > 11) {
            game.year++;
            game.month = 0;
        }
    }
    game.turn++;

    //check si se acaba el juego
    if (game.score.economia < 1) {
        final(0);
    } else if (game.score.economia > 9) {
        final(1);
    } else if (game.score.politica < 1) {
        final(2);
    } else if (game.score.politica > 9) {
        final(3);
    } else if (game.score.popular < 1) {
        final(4);
    } else if (game.score.popular > 9) {
        final(5);
    } else {
        dibujar_puntuacion();
        escena.removeClass();
        escena.html('');
        escena.addClass('despacho');
        acciones.html('');

        game.carta = sacacarta();

        escena.append('<h1>' + game.carta.titulo + '</h1>');
        escena.append('<p class="descripcion">' + game.carta.texto + '</p>');

        acciones.append('<div class="respuesta" id="si">' + game.carta.accion2 + '</div> <div class="respuesta" id="no">' + game.carta.accion1 + '</div>');
        acciones.removeClass('esconder');

        acciones.one('mouseup', '.respuesta', function () {
            if ($(this).attr('id') == 'si') {
                var accion = game.carta.resultado.si;


            } else {
                var accion = game.carta.resultado.no;
            }

            game.score.economia += accion.economia;
            game.score.politica += accion.politica;
            game.score.popular += accion.popularidad;
            game.score.corrupcion += accion.corrupcion;
            $(this).remove();
            acciones.off();
            acciones.addClass('esconder');
            setTimeout(turno, 500);
        });

    }
}

function sacacarta() {
    if (mazo.length == 0) {
        mazo = shuffle(tarjetas);
    }
    let carta = mazo.pop();
    return carta;
}

function shuffle(array) {
    var mimazo = Array.from(array);
    var salida = [];
    while (mimazo.length > 0) {
        var cual = Math.floor(Math.random() * mimazo.length);
        salida.push(mimazo[cual]);
        mimazo.splice(cual, 1);
    }
    return salida;
}

function final(elegir) {
    escena.removeClass();
    escena.html('');
    escena.addClass('final');
    acciones.html('');
    escena.append('<h1>final</h1>');
    escena.append('<p>' + finales[elegir].texto + '</p>');
    acciones.append('<button class="start">Intentarlo de nuevo</button>');
    acciones.find('button.start').click(function () {
        $(this).remove();
        inicial();
    });
}

$(document).ready(function () {

    tippy('[data-tippy-content]');
    inicial();

});
