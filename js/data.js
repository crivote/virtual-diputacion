// inicializar variables
var nombres = ['Antonio', 'Luis', 'Juan', 'Pablo', 'Mariano', 'Pedro', 'Ramón', 'Felipe'];
var apellidos = ['Rajoy', 'Sánchez', 'Iglesias', 'Ramírez', 'Garzón', 'Rodríguez', 'Lucas'];
var partidos = ['PHP', 'PDP', 'UL', 'UDS', 'PSA', 'CPI'];
var valorpolitica = ['tras un pacto minoritario', 'en 2ª vuelta por mayoría simple', 'por mayoría absoluta'];
var valoreconomia = ['en mala situación', 'en equilibrio', 'muy saneadas'];
var valorpopular = ['descontento', 'aprobación', 'gran ilusión'];
var finales = [{
    titulo: 'En quiebra',
    texto: 'La Diputación están en bancarrota. El ministerio de Hacienda ha intervenido las cuentas y has sido cesado fulminantemente.'
        }, {
    titulo: 'bajo sospecha',
    texto: 'Las arcas están tan llenas que las sospechas se disparan y el tribunal de Cuentas están investigando tu gestión. Renuncias al cargo.'
        }, {
    titulo: '',
    texto: 'Has perdido la confianza de los cargos del partido. Se produce una moción de censura por sorpresa y se elige a otro presidente.'
        }, {
    titulo: '',
    texto: 'Tienes tanto apoyo político que te lanzas al vacío y formas un nuevo partido contigo como líder absoluto.'
        }, {
    titulo: '',
    texto: 'Hay manifestaciones multitudinarias todos los días. El personal de la Diputación está en huelga. La situación es insostenible y dimites.'
        }, {
    titulo: '',
    texto: 'Los políticos tienen miedo de tu popularidad y te acusan de populista y antisistema. Eres expulsado del partido.'
}];

var eventos = [{
    titulo: 'Reparar carretera',
    texto: 'La comarcal MA-8301 entre Estepona y Jubrique tiene un tramo de 7 km de asfalto en muy mal estado.',
    accion1: 'Hay que arreglarlo',
    accion2: 'Puede aguantar así',
    pol1: 0,
    pop1: 1,
    eco1: -1,
    cor1: 0,
    pol2: 0,
    pop2: -1,
    eco2: 0,
    cor2: 0
        }, {
    titulo: 'Carril destrozado',
    texto: 'El carril de tierra MA-459 entre Almargena y Alamargen ha sido destrozado por las fuertes lluvias.',
    accion1: 'Mejor lo asfaltamos',
    accion2: 'Vamos a parchearlo',
    pol1: 1,
    pop1: 1,
    eco1: -2,
    cor1: 0,
    pol2: 0,
    pop2: 0,
    eco2: -1,
    cor2: 0
        }, {
    titulo: 'Recorte presupuestos',
    texto: 'Las cuentas de la Diputación presentan un deficit de 43 millones de euros. Habrá que hacer recortes.',
    accion1: 'Recortemos en gastos sociales',
    accion2: 'Bajemos en salarios y otras partidas',
    pol1: 0,
    pop1: -3,
    eco1: 2,
    cor1: 0,
    pol2: -2,
    pop2: 1,
    eco2: 1,
    cor2: 0
        }, {
    titulo: 'Pueblo envejecido',
    texto: 'En Faraján el 35% de la población supera los 65 años. Si no tomamos alguna medida el pueblo se quedará vacío.',
    accion1: 'Invertiremos para atraer población',
    accion2: 'La vida es dura...',
    pol1: 2,
    pop1: 1,
    eco1: -2,
    cor1: 0,
    pol2: 0,
    pop2: -1,
    eco2: 0,
    cor2: 0
        }, {
    titulo: 'Problemas de idioma',
    texto: 'La población extranjera de Mijas (42% del total) reclama intérpretes y señalización multilingüe en los servicios públicos.',
    accion1: 'No vamos a hacer nada',
    accion2: 'Atenderemos sus demandas',
    pol1: 1,
    pop1: -1,
    eco1: 0,
    cor1: 0,
    pol2: -1,
    pop2: 1,
    eco2: -1,
    cor2: 0
        }, {
    titulo: 'Gestión de residuos',
    texto: 'Los contenedores disponibles en Colmenar son insuficientes (menos de 1l por persona). La basura se amontona y la gente se queja.',
    accion1: 'Montar una planta de gestión y reciclaje de residuos',
    accion2: 'Vale, pondremos algunos contenedores',
    pol1: -1,
    pop1: 2,
    eco1: -2,
    cor1: 0,
    pol2: 1,
    pop2: 1,
    eco2: -1,
    cor2: 0
}];
