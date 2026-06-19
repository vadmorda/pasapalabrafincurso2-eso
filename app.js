// PASAPALABRA REUTILIZABLE · HISTORIA 2.º ESO
// Cada letra tiene dos preguntas: la primera para el Equipo A y la segunda para el Equipo B.
// Para reutilizarlo, cambia prompt y answer dentro de QUESTION_BANK.
const QUESTION_BANK = {
  A: [
    { prompt: 'Con la A. Territorio de la península ibérica gobernado por musulmanes desde el año 711.', answer: 'Al-Ándalus' },
    { prompt: 'Con la A. Población indígena americana que los castellanos encontraron en el Caribe al iniciar la conquista.', answer: 'Arahuacos' }
  ],
  B: [
    { prompt: 'Con la B. Imperio cristiano oriental que sobrevivió a la caída del Imperio romano de Occidente.', answer: 'Bizantino' },
    { prompt: 'Con la B. Estilo artístico del siglo XVII caracterizado por el movimiento, el dramatismo y la decoración abundante.', answer: 'Barroco' }
  ],
  C: [
    { prompt: 'Con la C. Rey franco coronado emperador en el año 800 y protagonista del renacimiento carolingio.', answer: 'Carlomagno' },
    { prompt: 'Con la C. Viaje militar y religioso de los cristianos medievales a Tierra Santa.', answer: 'Cruzada' }
  ],
  D: [
    { prompt: 'Con la D. Impuesto que entregaban los campesinos a la Iglesia y que solía equivaler a una parte de la cosecha.', answer: 'Diezmo' },
    { prompt: 'Con la D. Territorio gobernado por un duque.', answer: 'Ducado' }
  ],
  E: [
    { prompt: 'Con la E. Cada uno de los grupos sociales de la sociedad medieval y moderna.', answer: 'Estamento' },
    { prompt: 'Con la E. Institución colonial española en América para explotar la tierra con trabajadores indígenas.', answer: 'Encomienda' }
  ],
  F: [
    { prompt: 'Con la F. Sistema político, económico y social basado en relaciones de dependencia entre señores y vasallos.', answer: 'Feudalismo' },
    { prompt: 'Con la F. Documento o privilegio concedido a una ciudad medieval para regular sus derechos y obligaciones.', answer: 'Fuero' }
  ],
  G: [
    { prompt: 'Con la G. Barco utilizado en la Edad Moderna.', answer: 'Galeón' },
    { prompt: 'Con la G. Asociación de artesanos medievales de un mismo oficio que regulaba precios, calidad y aprendizaje.', answer: 'Gremio' }
  ],
  H: [
    { prompt: 'Con la H. Movimiento cultural del Renacimiento que situó al ser humano y la razón en el centro del pensamiento.', answer: 'Humanismo' },
    { prompt: 'Con la H. Doctrina contraria a las creencias oficiales de la Iglesia.', answer: 'Herejía' }
  ],
  I: [
    { prompt: 'Con la I. Religión nacida en Arabia en el siglo VII y predicada por Mahoma.', answer: 'Islam' },
    { prompt: 'Con la I. Aparato creado por Gutenberg que permitió multiplicar los libros y difundir las ideas.', answer: 'Imprenta' }
  ],
  J: [
    { prompt: 'Con la J. Barrio de las ciudades medievales habitado por población judía.', answer: 'Judería' },
    { prompt: 'Con la J. Artista ambulante que recitaba poemas y cantaba historias en la Edad Media.', answer: 'Juglar' }
  ],
  K: [
    { prompt: 'Con la K. Santuario de La Meca hacia el que oran los musulmanes.', answer: 'Kaaba' },
    { prompt: 'Contiene la K. Pueblo navegante del norte de Europa que realizó incursiones durante la Edad Media.', answer: 'Vikingo' }
  ],
  L: [
    { prompt: 'Con la L. Rey francés que representa el absolutismo y es conocido como el Rey Sol.', answer: 'Luis XIV' },
    { prompt: 'Con la L. Reino cristiano peninsular surgido en la Edad Media y vinculado a la Corona de Castilla.', answer: 'León' }
  ],
  M: [
    { prompt: 'Con la M. Profeta del islam.', answer: 'Mahoma' },
    { prompt: 'Con la M. Pueblo indígena americano con una gran civilización en Mesoamérica.', answer: 'Mayas' }
  ],
  N: [
    { prompt: 'Con la N. Reino de la península ibérica que mantuvo su independencia hasta su incorporación a Castilla en el siglo XVI.', answer: 'Navarra' },
    { prompt: 'Con la N. Grupo social privilegiado de la sociedad feudal dedicado a la guerra y al gobierno de tierras.', answer: 'Nobleza' }
  ],
  Ñ: [
    { prompt: 'Contiene la Ñ. Territorio europeo que en la Edad Moderna formó una gran monarquía con posesiones en varios continentes.', answer: 'España' },
    { prompt: 'Contiene la Ñ. Empresas comerciales de algunas potencias de la Edad Moderna..', answer: 'Compañías' }
  ],
  O: [
    { prompt: 'Con la O. Imperio turco que conquistó Constantinopla en 1453.', answer: 'Otomano' },
    { prompt: 'Con la O. Forma de trabajo artesanal medieval realizada en talleres dirigidos por maestros.', answer: 'Oficio' }
  ],
  P: [
    { prompt: 'Con la P. Viaje religioso a un lugar sagrado.', answer: 'Peregrinación' },
    { prompt: 'Con la P. Institución representativa de algunos reinos.', answer: 'Parlamento' }
  ],
  Q: [
    { prompt: 'Con la Q. Gobernador o juez musulmán que impartía justicia en las ciudades islámicas.', answer: 'Qadí' },
    { prompt: 'Contiene la Q. Templo de la religión musulmana..', answer: 'Mezquita' }
  ],
  R: [
    { prompt: 'Con la R. Movimiento artístico y cultural de los siglos XV y XVI inspirado en la Antigüedad clásica.', answer: 'Renacimiento' },
    { prompt: 'Con la R. Reforma religiosa iniciada por Lutero que rompió la unidad de la cristiandad occidental.', answer: 'Reforma protestante' }
  ],
  S: [
    { prompt: 'Con la S. Campesino medieval que dependía de un señor y no podía abandonar libremente el feudo.', answer: 'Siervo' },
    { prompt: 'Con la S. Territorio controlado por un señor feudal.', answer: 'Señorío' }
  ],
  T: [
    { prompt: 'Con la T. Soldados de infantería de la Monarquía Hispánica famosos en Europa durante los siglos XVI y XVII.', answer: 'Tercios' },
    { prompt: 'Con la T. Ciudad castellana que fue capital del reino visigodo.', answer: 'Toledo' }
  ],
  U: [
    { prompt: 'Con la U. Forma de vida propia de las ciudades, que creció con el comercio y la artesanía medieval.', answer: 'Urbana' },
    { prompt: 'Con la U. Unión de Coronas que permitió formar grandes monarquías en la Edad Moderna como la de los Reyes Católicos.', answer: 'Unión dinástica' }
  ],
  V: [
    { prompt: 'Con la V. Persona que juraba fidelidad a un señor a cambio de protección o tierras.', answer: 'Vasallo' },
    { prompt: 'Con la V. Pueblo germano que saqueó Roma y dio nombre a un reino en el norte de África.', answer: 'Vándalos' }
  ],
  W: [
    { prompt: 'Con la W. Ciudad alemana donde se celebró la Dieta que juzgó a Lutero', answer: 'Worms' },
    { prompt: 'Contiene la W. Parlamentario puritano que se enfrentó a la corona inglesa en una guerra civil.', answer: 'Cromwell' }
  ],
  X: [
    { prompt: 'Contiene la X. Castigo impuesto por la Iglesia que excluía a una persona de la comunidad cristiana..', answer: 'Excomunión' },
    { prompt: 'Contiene la X. Persona que recorre territorios desconocidos, como en América.', answer: 'Explorador' } 
  ],
  Y: [
    { prompt: 'Contiene la Y. Persona que gobernaba en nombre del rey en América.', answer: 'Virrey' },
    { prompt: 'Con la Y. Guerra santa musulmana.', answer: 'Yihad' }
  ],
  Z: [
    { prompt: 'Con la Z. Mercado de las ciudades islámicas donde se compraban y vendían productos.', answer: 'Zoco' },
    { prompt: 'Contiene la Z. Dinastía del reino de Granada.', answer: 'Nazarí' }
  ]
};

const LETTERS = Object.keys(QUESTION_BANK);
const teams = {
  A: { score: 0, index: 0, states: Object.fromEntries(LETTERS.map(l => [l, 'empty'])) },
  B: { score: 0, index: 0, states: Object.fromEntries(LETTERS.map(l => [l, 'empty'])) }
};
let activeTeam = 'A';
let started = false;

const $ = id => document.getElementById(id);
const rosco = $('rosco');

function buildRosco(){
  rosco.innerHTML = '';
  const radius = 43;
  LETTERS.forEach((letter, i) => {
    const angle = (i / LETTERS.length) * Math.PI * 2 - Math.PI / 2;
    const el = document.createElement('button');
    el.className = 'letter';
    el.textContent = letter;
    el.style.left = `${50 + radius * Math.cos(angle)}%`;
    el.style.top = `${50 + radius * Math.sin(angle)}%`;
    el.title = `Ir a la ${letter}`;
    el.addEventListener('click', () => { teams[activeTeam].index = i; render(); });
    rosco.appendChild(el);
  });
}

function currentLetter(){ return LETTERS[teams[activeTeam].index]; }
function currentQuestion(){
  const teamVariant = activeTeam === 'A' ? 0 : 1;
  return QUESTION_BANK[currentLetter()][teamVariant] ?? QUESTION_BANK[currentLetter()][0];
}
function pending(team){ return LETTERS.filter(l => !['ok','bad'].includes(teams[team].states[l])).length; }

function render(){
  const letter = currentLetter();
  const q = currentQuestion();
  $('scoreA').textContent = teams.A.score;
  $('scoreB').textContent = teams.B.score;
  $('pendingA').textContent = `${pending('A')} pendientes`;
  $('pendingB').textContent = `${pending('B')} pendientes`;
  $('currentTeam').textContent = `Turno: Equipo ${activeTeam}`;
  $('currentLetter').textContent = letter;
  $('question').textContent = started ? q.prompt : 'Pulsa “Empezar” para iniciar el rosco.';
  $('answer').textContent = started ? q.answer : '—';
  $('teamAcard').classList.toggle('active', activeTeam === 'A');
  $('teamBcard').classList.toggle('active', activeTeam === 'B');

  [...rosco.children].forEach((el, i) => {
    const l = LETTERS[i];
    el.className = `letter ${teams[activeTeam].states[l]}`;
    if (l === letter) el.classList.add('current');
  });
}

function nextAvailable(){
  const team = teams[activeTeam];
  for(let step = 1; step <= LETTERS.length; step++){
    const next = (team.index + step) % LETTERS.length;
    if(!['ok','bad'].includes(team.states[LETTERS[next]])){
      team.index = next;
      return;
    }
  }
}

function mark(state){
  if(!started) started = true;
  const letter = currentLetter();
  const team = teams[activeTeam];
  const previous = team.states[letter];
  if(previous === 'ok') team.score--;
  team.states[letter] = state;
  if(state === 'ok') team.score++;
  nextAvailable();
  render();
}

function switchTeam(){ activeTeam = activeTeam === 'A' ? 'B' : 'A'; render(); }
function resetGame(){
  for(const t of ['A','B']){
    teams[t].score = 0; teams[t].index = 0;
    teams[t].states = Object.fromEntries(LETTERS.map(l => [l, 'empty']));
  }
  activeTeam = 'A'; started = false; render();
}

$('startBtn').addEventListener('click', () => { started = true; render(); });
$('correctBtn').addEventListener('click', () => mark('ok'));
$('wrongBtn').addEventListener('click', () => mark('bad'));
$('passBtn').addEventListener('click', () => mark('pass'));
$('switchBtn').addEventListener('click', switchTeam);
$('resetGame').addEventListener('click', resetGame);
const variantSelect = $('variantSelect');
if (variantSelect) variantSelect.addEventListener('change', render);
document.addEventListener('keydown', e => {
  if(e.key === '1') mark('ok');
  if(e.key === '2') mark('bad');
  if(e.key === '3' || e.code === 'Space') { e.preventDefault(); mark('pass'); }
  if(e.key.toLowerCase() === 'c') switchTeam();
});

buildRosco();
render();
