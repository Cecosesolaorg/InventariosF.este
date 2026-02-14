// --- LISTA DE COMPAÑEROS ---
const companions = [
    "LEYLA LIZETH AGUILAR MORENO", "YOHANNA BETZABE ALMAO BARRERA", "JOSE DANIEL ALVARADO DURAN",
    "NERWIN ANTONIO ALVARADO", "ROSA ELENA ALVARADO RODRIGUEZ", "MEURYS DEL ROSARIO ALVAREZ CRESPO",
    "JUANA ELISA ALVAREZ DE MORILLO", "JOSE MOISES ANGULO GALLARDO", "JONNAYKER ENRIQUE APONCIO SUAREZ",
    "JORGELYS ANNERYS APONCIO SUAREZ", "YEFERSON DANIEL ARANGURE TORREALBA", "FELIX DANIEL ARAQUE PEREZ",
    "OMAR ALBERTO ARAUJO RIVERO", "DASCHA MARYEILY BARRETO LOPEZ", "ESTREILI KATIUSKA BARRETO LOPEZ",
    "LUIS CARLOS BETANCOURT ANTIQUE", "GRICENY CAROLINA BORJAS LOYO", "YOLBER RAMON BRAVO ANGULO",
    "EDUARDO LUIS CAMACARO ALVAREZ", "MARIAXIS CAMERO CAMACHO", "SANTIAGO JOSE CAMERO CAMACHO",
    "JAVIER DE JESUS CAMERO NELO", "JOSE GREGORIO CAMERO NELO", "YORDANO RAFAEL CAMERO NELO",
    "OMAIRA DEL CARMEN CARRILLO", "ANTONY ERIBERTH CASTILLO VASQUEZ", "RICHARD DANIEL CHARACO LINARES",
    "DANIELA ALEJANDRA COLMENARES PALACIOS", "SABINA DEL CARMEN COLMENAREZ LUCENA", "JOSE MANUEL COLMENAREZ PEROZO",
    "MINERVA PASTORA CORDERO ALVAREZ", "JHONNY ANTONIO CORDERO", "GREYMARI CORDERO PIÑANGO",
    "JOSE RAFAEL CORDOVA", "MARIA DANIELA DAZA ARIAS", "DIAGNERY STHELA DE LEON LOPEZ",
    "WILIMAR JOSE DELGADO COLMENAREZ", "MANUEL ANTONIO DELGADO ELIAS", "LIZETH KARINA DELGADO ROMERO",
    "KELUHY ELIASIB DIAZ SUAREZ", "ADELYS ALEXANDER DOMINGUEZ TORRELBA", "CARLOS ALEJANDRO DURAN COLMENAREZ",
    "CARMEN LIJIA DURAN DE PARADA", "ROSA ALVIRA DURAN PEREZ", "GLENDA CAROLINA ESCALONA",
    "ANA PASTORA ESCALONA PERERA", "JESUS ANTONIO ESCOBAR BRACHO", "YOLEIDA PASTORA ESCOBAR",
    "FRANYE FERNANDEZ FERNANDEZ", "CRISTIAN EDUARDO GAMBOA SANCHEZ", "LUIS ALFONSO GARCIA GONZALEZ",
    "JHONNIER JOSE GARCIA MENDOZA", "SAMUEL JOSE GARCIA RODRIGUEZ", "MARIBEL DEL CARMEN GARFIDO PEREZ",
    "WILMER ALEJANDRO GIL RODRIGUEZ", "PABLO DAVID GOLLO MEDINA", "ANGIE PAOLA GOMEZ VALE",
    "YASGREINY GABRIELA GONZALEZ RODRIGUEZ", "SONIA BEATRIZ GOYO", "JACKELINE DEL CARMEN GUEDEZ RODRIGUEZ",
    "JENIN COROMOTO GUERE PEROZO", "DANNY JOSE GUTIERREZ ANGULO", "JOSE GREGORIO HERNANDEZ GOYO",
    "LEODANNY JOSE HERNANDEZ HERNANDEZ", "GAUDY DEL CARMEN HERNANDEZ RODRIGUEZ", "ERISBEL YOHANA IZARRA VIANA",
    "CESAR DANIEL JIMENEZ LUCENA", "RONNY ALBERTO JIMENEZ MEDINA", "ANGELICA DEL CARMEN LANDAETA LOYO",
    "OLDIANA LINAREZ GONZALEZ", "SUYIN NAYIBETH LINAREZ TONCEL", "ROSY CAROLINA LOPEZ VALERO",
    "ELIECER JOSUE MARCHAN MARCHAN", "ELIZAUL ELIAS MARCHAN MARCHAN", "HEILYN FABIOLA MARCHAN OVIEDO",
    "MARIANO EDUARD MARCHAN SIRA", "LUIS DANIEL MARTINES TORRELLAS", "JOSUE ENMANUEL MEDINA LEAL",
    "NIXON GREGORIO MEDINA", "EDUARDO ENRIQUE MEDIOMUNDO", "YOTXER DAVID MELENDEZ PIÑA",
    "NAYGEL COROMOTO MENDEZ GIL", "ANDREA VALENTINA MENDOZA PEREZ", "ELIAS RAFAEL MENDOZA PEREZ",
    "DANIERTH ANTONIO MENDOZA SANCHEZ", "KEIBER ANTONIO MERCADO GIMENEZ", "YONATHAN MERCADO GIMENEZ",
    "PUBLIO RAMÓN MOGOLLÓN CASTRO", "VICTOR MANUEL MONTILLA ANGULO", "DOUGLAS ALEJANDRO MONTILLA ESPINOZA",
    "BRAYAN ADOLFO MORALES APOSTOL", "ESLY ANTONIO MORENO", "JOSE MIGUEL MORILLO OLARTE",
    "DIEGO JOSE NAVAS MARAPATE", "EMILIO ANTONIO NELO", "CESAR ANTONIO NELO LOPEZ",
    "BRANDO ALEXANDER PADRON RODRIGUEZ", "MILAGRO DEL CARMEN PALACIOS PEREZ", "RIGOBERTO PARADAS ROJAS",
    "JOSE ARMANDO PERAZA VARGAS", "ADRIANNY PEREIRA RODRIGUEZ", "ALEXIS JOSÉ PEREZ ALMAO",
    "DANIEL ALEJANDRO PEREZ GRATEROL", "MAIKEL JAVIER PEREZ GRATEROL", "ANLIYER ESTEBALIS PEREZ MARTINEZ",
    "DIANA CAROLINA PETAQUERO RODRIGUEZ", "LINDA COROMOTO PINEDA SOTO", "EMILY RAICELYS PIÑA FUENTES",
    "JOSE MOISES QUERALES COLMENAREZ", "JANETH DEL CARMEN QUIJADA URDANETA", "GERSON ELIEZER RAMOS SALERO",
    "JOSUE ELIUD RAMOS SALERO", "EYKARIS MILANYERITH RIOS PALACIOS", "MOISES JOSE RODRIGUEZ RODRIGUEZ",
    "NERLIMAR COROMOTO RODRIGUEZ ALVARADO", "NERCY PASTORA RODRIGUEZ ALVARADO", "DILEXI JOSE RODRIGUEZ ALVAREZ",
    "DINEXIS JOSEFINA RODRIGUEZ ALVAREZ", "HENRY RAMON RODRIGUEZ CAMACARO", "ALEXANDER OLIVER RODRIGUEZ GONZALEZ",
    "ISMAEL ANTONIO RODRIGUEZ SUAREZ", "MARIELIS ALEXELIS RODRIGUEZ LOPEZ", "ABISAI DAVID RODRIGUEZ MORENO",
    "JOSSEANNYS YOHANDRELIS RODRIGUEZ PIRE", "DARNYD TAHITI RODRIGUEZ RAMOS", "WILMER ANTONIO RODRIGUEZ ROJAS",
    "YOHANDER ANTONIO ROJAS RANGEL", "YOSBELYS LILIANA ROJAS RANGEL", "JIMMY SEGUNDO ROJAS VARGAS",
    "JIMMY JOSE (HIJO) ROJAS YEPEZ", "EVA PATRICIA ROMERO CAMACARO", "EVER JAVIER ROMERO URBINA",
    "RONALD EFRAIN ROMERO URBINA", "FRANCISCO JOSE SALAS CALDERA", "JUAN DOMINGO SANCHEZ PEÑA",
    "SOL EDUARDO SANCHEZ REYES", "JOSE ANGEL SANTANA ANGULO", "MONICA ELISENA SEQUERA VILLALOBOS",
    "WILDER ALEXANDER SILVA PERAZA", "LEYDA MACRINA SIRA SANCHEZ", "YERALDIN ANNERYS SUAREZ PERDOMO",
    "JORGE AURELIO SUAREZ PINEDA", "YETZABETH PATRICIA SUAREZ", "JENER SKEN TIMAURE GUEDEZ",
    "NORMARYS YANETH TIMAURE TORRES", "DOMINGO ANTONIO TORREALBA AZUAJE", "OMARLYS PASTORA TORREALBA SUAREZ",
    "ANDERSON JOSE TORRES MEDINA", "MARY LUZ TORRES DE CALLES", "LUIMAR VANESSA TORRES MELENDEZ",
    "FRANYIMAR PASTORA TOVAR VASQUEZ", "YENNY ORIANA VALDERRAMA ROJAS", "RAIMON JOSE VALERO GARCIA",
    "CARLOS ALCIDES VALLES MONTERO", "LIZETH CAROLINA VARGAS CAMBERO", "RAMON VARGAS CECILIO",
    "JOSE RAFAEL VASQUEZ GONZALEZ", "NAYIBE PASTORA VASQUEZ VARGAS", "MAGALY JOSEFINA VILLANUEVA",
    "FRANCISCO JAVIER VILORIA GOMEZ", "MIGUEL ANGEL ZAMBRANO MORENO", "EVELIN NATHALY MEDINA VALDERRAMA",
    "ARANXA DEL CARMEN ROJAS CAMERO", "EMELYN MOISELYN ANGULO GARCES", "ISNAILY DEL CARMEN CASTAÑEDA ORELLANA",
    "ROBERTH JOSE SAHAVEDRA VARGAS", "JOHAN JAVIER PUERTA MANZANO", "FERNANDO ANTONIO MUJICA URBINA",
    "GIANFRANCO SANTORO ANGULO", "ALEXANDER SOTO", "ROSELYN PASTORA PERAZA SANCHEZ",
    "ISAMAR BEATRIZ TORREZ COLMENAREZ", "JESUS DANIEL CAMACHO GUEDEZ", "GREIMAR DUSLEYVIS CASTRO LAGUNA",
    "CARMEN COROMOTO MEDINA DE PEREZ", "WILMER RAFAEL MARQUEZ YEPEZ", "KLEIBER ADRIAN CASTILLO PERALTA"
];

// --- Elementos del DOM ---
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-input-btn');
const nameList = document.getElementById('name-list');
const loginScreen = document.getElementById('login-screen');
const welcomeMessage = document.getElementById('welcome-message');
const loginForm = document.getElementById('login-form');

// --- Lógica del Buscador ---
function filterNames(query) {
    if (query.trim().length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
    const filtered = companions.filter(name => name.toLowerCase().includes(query.toLowerCase()));
    renderNames(filtered);
}

function clearLoginInput() {
    searchInput.value = '';
    searchInput.focus();
    clearBtn.classList.add('hidden');
    renderNames(companions);
}

function renderNames(list) {
    nameList.innerHTML = '';
    if (list.length === 0) {
        nameList.classList.add('hidden');
        return;
    }
    list.forEach(name => {
        const div = document.createElement('div');
        div.className = 'name-item';
        div.textContent = name;
        div.onclick = () => selectName(name);
        nameList.appendChild(div);
    });
    nameList.classList.remove('hidden');
}

function selectName(name) {
    searchInput.value = name;
    clearBtn.classList.remove('hidden');
    nameList.classList.add('hidden');
}

// --- Manejo de Sesión ---
function handleLogin(event) {
    event.preventDefault();
    const name = searchInput.value.trim().toUpperCase(); 
    if (name === "") {
        alert("Por favor escriba un nombre.");
        return;
    }
    if (!companions.includes(name)) {
        companions.push(name);
        alert(`¡Bienvenido/a, ${name}!`);
    }
    setUserName(name);
    localStorage.setItem('cecosesolaUser', name);
}

function setUserName(name) {
    loginScreen.style.opacity = '0';
    setTimeout(() => loginScreen.classList.add('hidden'), 500);
    
    welcomeMessage.innerHTML = `
        <div class="flex items-center gap-3">
            <span>COMPAÑERO: ${name}</span>
            <button id="logout-btn" class="group bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 rounded-full p-1 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    `;
    welcomeMessage.classList.remove('hidden');
    document.getElementById('logout-btn').onclick = logout;
}

function logout() {
    localStorage.removeItem('cecosesolaUser');
    welcomeMessage.classList.add('hidden');
    clearLoginInput();
    loginScreen.classList.remove('hidden');
    setTimeout(() => loginScreen.style.opacity = '1', 50);
}

// --- Lógica del Mapa ---
const aisles = [
    { id: 1, name: 'PASILLO 1 PASTAS' }, { id: 2, name: 'PASILLO 2 CAFE' },
    { id: 3, name: 'PASILLO 3 PANES' }, { id: 4, name: 'PASILLO 4 GALLETAS' },
    { id: 5, name: 'PASILLO 5 SALSA' }, { id: 6, name: 'PASILLO 6 JABON' },
    { id: 7, name: 'PASILLO 7 PAPEL' }, { id: 8, name: 'PASILLO 8' },
    { id: 9, name: 'PASILLO GRANOS' }, { id: 10, name: 'CAVA CUARTO' },
    { id: 11, name: 'PASILLO ARRIBA 1-3' }, { id: 12, name: 'PASILLO ARRIBA 4-6' },
];

function renderAisles() {
    aisles.forEach(aisle => {
        const container = document.getElementById(`aisle-${aisle.id}-container`);
        if (container) {
            container.innerHTML = `
                <div id="aisle-${aisle.id}-node" class="aisle-node cursor-pointer">
                    <div class="flex flex-col items-center">
                        <span class="text-xl font-black gradient-text mb-1">${aisle.id}</span>
                        <h3 class="text-[10px] md:text-xs font-bold text-white uppercase tracking-tighter">${aisle.name}</h3>
                    </div>
                </div>
            `;
            document.getElementById(`aisle-${aisle.id}-node`).onclick = () => window.location.href = `pasillo-${aisle.id}.html`;
        }
    });
}

function getCenter(id) {
    const element = document.getElementById(id);
    if (!element) return null;
    const mapContainer = document.getElementById('map-view');
    const mapRect = mapContainer.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    return {
        x: ((rect.left + rect.width / 2 - mapRect.left) / mapRect.width) * 1000,
        y: ((rect.top + rect.height / 2 - mapRect.top) / mapRect.height) * 1000
    };
}

function drawConnections() {
    const central = getCenter('central-node');
    if (!central) return;
    let paths = '';
    for (let i = 1; i <= 12; i++) {
        const node = getCenter(`aisle-${i}-node`);
        if (node) {
            paths += `<path class="flow-line" d="M ${central.x} ${central.y} L ${node.x} ${node.y}"/>`;
        }
    }
    document.getElementById('connection-lines').innerHTML = paths;
}

// --- Event Listeners ---
searchInput.addEventListener('input', (e) => filterNames(e.target.value));
searchInput.addEventListener('focus', () => renderNames(companions));
clearBtn.addEventListener('click', clearLoginInput);
loginForm.addEventListener('submit', handleLogin);

document.addEventListener('click', (e) => {
    if (!e.target.closest('.select-container')) nameList.classList.add('hidden');
});

document.getElementById('deposito-abajo-node').onclick = () => window.location.href = 'deposito-abajo.html';
document.getElementById('deposito-arriba-node').onclick = () => window.location.href = 'deposito-arriba.html';

window.onload = () => {
    renderAisles();
    setTimeout(drawConnections, 100);
    const saved = localStorage.getItem('cecosesolaUser');
    if (saved) setUserName(saved);
};

window.onresize = drawConnections;