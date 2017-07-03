    var game = {};

    $(document).ready(function () {

        var escena = $('#container');
        var marcador = $('#marcador');
        var acciones = $('#areatexto');

        var fecha = new Date();
        game.year = fecha.getFullYear();
        game.trimester = Math.floor(fecha.getMonth() / 4) + 1;

        inicial();



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


            marcador.find('.year').html(game.year + ' <span>T' + game.trimester + '</span>');

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
            console.log(game.year + ' T' + game.trimester);
            console.log(game.score);
            game.trimester++;
            if (game.trimester > 4) {
                game.year++;
                game.trimester = 1;
            }

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

                game.evento = eventos[Math.floor(Math.random() * eventos.length)];

                escena.append('<h1>' + game.evento.titulo + '</h1>');
                escena.append('<p class="descripcion">' + game.evento.texto + '</p>');


                acciones.append('<div class="respuesta" id="si">' + game.evento.accion2 + '</div> <div class="respuesta" id="no">' + game.evento.accion1 + '</div>');

                acciones.one('mouseup', '.respuesta', function () {
                    if ($(this).attr('id') == 'si') {
                        game.score.economia += game.evento.eco2;
                        game.score.politica += game.evento.pol2;
                        game.score.popular += game.evento.pop2;
                        game.score.corrupcion += game.evento.cor2;
                    } else {
                        game.score.economia += game.evento.eco1;
                        game.score.politica += game.evento.pol1;
                        game.score.popular += game.evento.pop1;
                        game.score.corrupcion += game.evento.cor1;
                    }
                    $(this).remove();
                    acciones.off();
                    turno();
                });

            }
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
    });
