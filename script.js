// La configuración se manejará dentro del DOMContentLoaded para asegurar que Firebase esté listo
let database;

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Firebase con seguridad
    try {
        const firebaseConfig = {
            databaseURL: "https://cecosesola-inventario-default-rtdb.firebaseio.com/"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        database = firebase.database();
        console.log("✅ Firebase conectado en Inicio");
    } catch (error) {
        console.error("❌ Error al iniciar Firebase:", error);
    }

    // --- EFECTO DE FONDO INTERACTIVO (Glow que sigue al mouse) ---
    const bgGlow = document.querySelector('.background-glow');
    if (bgGlow) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;

            // 1. Inyectar variables para animaciones CSS
            bgGlow.style.setProperty('--x', `${x}%`);
            bgGlow.style.setProperty('--y', `${y}%`);

            // 2. Aplicar degradado premium directo
            bgGlow.style.background = `
                radial-gradient(circle at ${x}% ${y}%, rgba(255, 109, 0, 0.4) 0%, transparent 60%),
                radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(0, 210, 255, 0.2) 0%, transparent 60%)
            `;
        });
    }

    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');
    const assignedAisleSelect = document.getElementById('assignedAisle');

    // Función para abrir el modal y capturar el nombre del compañero que hará el inventario
    function abrirModalNombre(aisle, defaultName = '') {
        const modal = document.getElementById('partnerModal');
        const input = document.getElementById('partnerInput');
        const confirmBtn = document.getElementById('confirmPartnerBtn');
        const cancelBtn = document.getElementById('cancelPartnerBtn');

        if (!modal || !input) return;

        modal.style.display = 'flex';
        
        // Sugerir el nombre predeterminado o el último guardado
        const savedResponsable = localStorage.getItem('responsableDirecto') || '';
        input.value = (defaultName && defaultName !== "---") ? defaultName.trim() : savedResponsable;
        
        input.focus();

        confirmBtn.onclick = () => {
            const name = input.value.trim();
            if (name) {
                const upperName = name.toUpperCase();
                
                // Guardar en localStorage
                localStorage.setItem('responsableDirecto', upperName);
                localStorage.setItem('userName', upperName);
                localStorage.setItem('cecosesolaUser', upperName);
                localStorage.setItem('companero', '---');
                localStorage.setItem('userLastName', '---');
                localStorage.setItem('assignedAisle', aisle);
                
                if (upperName === "JAVIER CAMERO") {
                    localStorage.setItem('isAdmin', 'true');
                } else {
                    localStorage.setItem('isAdmin', 'false');
                }

                // Deshabilitar botón temporalmente para dar retroalimentación
                confirmBtn.disabled = true;
                confirmBtn.innerHTML = 'Procesando...';

                // Mapeo de pasillos a sus respectivos archivos HTML
                const aisleMap = {
                    "PASILLO 1 PASTAS": "contenedor/pasillo1/pasillo1.html",
                    "PASILLO 2 CAFE": "contenedor/pasillo2/pasillo2.html",
                    "PASILLO 3 PANES": "contenedor/pasillo3/pasillo3.html",
                    "PASILLO 4 GALLETAS": "contenedor/pasillo4/pasillo4.html",
                    "PASILLO 5 SALSA": "contenedor/pasillo5/pasillo5.html",
                    "PASILLO 6 JABON": "contenedor/pasillo6/pasillo6.html",
                    "PASILLO 7 PAPEL": "contenedor/pasillo7/pasillo7.html",
                    "PASILLO 8": "contenedor/pasillo8/pasillo8.html",
                    "PASILLO 9 GRANOS": "contenedor/pasillo9/pasillo9.html",
                    "PASILLO 10 CAVA CUARTO": "contenedor/pasillo10/pasillo10.html",
                    "PASILLO 11": "contenedor/pasillo11/pasillo11.html",
                    "PASILLO 12": "contenedor/pasillo12/pasillo12.html",
                    "PASILLO 13": "contenedor/pasillo13/pasillo13.html",
                    "PASILLO 14": "contenedor/pasillo14/pasillo14.html",
                    "PASILLO 15": "contenedor/pasillo15/pasillo15.html",
                    "PASILLO 16": "contenedor/pasillo16/pasillo16.html",
                    "PASILLO 17": "contenedor/pasillo17/pasillo17.html",
                    "PASILLO 18 DEPOSITO ABAJO": "contenedor/pasillo18/pasillo18.html",
                    "PASILLO 19 DEPOSITO ARRIBA": "contenedor/pasillo19/pasillo19.html",
                    "COORDINACIÓN": "contenedor/coordinacion/coordinacion.html"
                };

                const targetUrl = aisleMap[aisle] || 'index.html';

                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 800);
            } else {
                alert("ERROR: Por favor, ingresa tu nombre y apellido para continuar.");
            }
        };

        cancelBtn.onclick = () => {
            modal.style.display = 'none';
            // Restaurar el botón de confirmación
            confirmBtn.disabled = false;
            confirmBtn.innerHTML = 'ACEPTAR';
            // Reiniciar el select del pasillo para que vuelva a seleccionar
            if (assignedAisleSelect) {
                assignedAisleSelect.value = '';
            }
        };
    }

    // Escuchar el cambio en el selector de pasillos
    if (assignedAisleSelect) {
        assignedAisleSelect.addEventListener('change', (e) => {
            const selectedVal = e.target.value;
            if (selectedVal) {
                abrirModalNombre(selectedVal);
            }
        });
    }

    // Enviar el formulario (clic en "Entrar")
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const selectedVal = assignedAisleSelect ? assignedAisleSelect.value : '';
            if (selectedVal) {
                abrirModalNombre(selectedVal);
            } else {
                alert('Por favor, selecciona un pasillo.');
            }
        });
    }


    // --- API DE ASIGNACIONES LOCALES (FOOTPRINT) ---
    const DEFAULT_ASSIGNMENTS = {
        "PASILLO 1 PASTAS": "---",
        "PASILLO 2 CAFE": "---",
        "PASILLO 3 PANES": "---",
        "PASILLO 4 GALLETAS": "---",
        "PASILLO 5 SALSA": "---",
        "PASILLO 6 JABON": "---",
        "PASILLO 7 PAPEL": "---",
        "PASILLO 8": "---",
        "PASILLO 9 GRANOS": "---",
        "PASILLO 10 CAVA CUARTO": "---",
        "PASILLO 11": "---",
        "PASILLO 12": "---",
        "PASILLO 13": "---",
        "PASILLO 14": "---",
        "PASILLO 15": "---",
        "PASILLO 16": "---",
        "PASILLO 17": "---",
        "PASILLO 18 DEPOSITO ABAJO": "---",
        "PASILLO 19 DEPOSITO ARRIBA": "---",
        "COORDINACIÓN": "---"
    };

    // --- LÓGICA DE ASIGNACIONES (ICONO DE PERSONAS) ---
    const assignmentsBtn = document.getElementById('teamAssignmentsBtn');
    const assignmentsModal = document.getElementById('assignmentsModal');
    const assignmentsList = document.getElementById('assignmentsList');
    const closeAssignmentsBtn = document.getElementById('closeAssignmentsBtn');

    // Estado de sincronización
    let publishedStaffData = JSON.parse(localStorage.getItem('cachedPublishedStaff')) || {};
    let isSyncing = true;

    renderAssignments();

    // Escuchar cambios en tiempo real
    if (database) {
        // --- SALIDA DE EMERGENCIA PARA OFFLINE ---
        const syncTimeout = setTimeout(() => {
            if (isSyncing) {
                console.warn("⚠️ Tiempo de espera agotado, usando memoria local.");
                isSyncing = false;
                renderAssignments();
            }
        }, 3000);

        database.ref('publishedStaff').on('value', (snapshot) => {
            clearTimeout(syncTimeout);
            isSyncing = false;
            const cloudData = snapshot.val();
            console.log("📥 DATOS RECIBIDOS:", cloudData); // <--- DEBUG PARA TI

            if (cloudData && typeof cloudData === 'object') {
                publishedStaffData = cloudData;
                localStorage.setItem('cachedPublishedStaff', JSON.stringify(publishedStaffData));
            } else {
                console.warn("⚠️ La nube está vacía.");
                publishedStaffData = {};
            }
            renderAssignments();
        }, (error) => {
            clearTimeout(syncTimeout);
            console.error("❌ Error Firebase:", error);
            isSyncing = false;
            renderAssignments();
        });
    } else {
        // Si no hay base de datos (offline total), desbloquear de inmediato
        isSyncing = false;
        renderAssignments();
    }

    function renderAssignments() {
        if (!assignmentsList) return;
        assignmentsList.innerHTML = '';

        // Estructura base completa
        const displayData = { ...DEFAULT_ASSIGNMENTS };

        // Normalización para comparación (ULTRA SENCILLA PARA EVITAR ERRORES)
        const normalize = s => s ? s.toString().toUpperCase().replace(/[^A-Z0-9]/g, "").replace(/S$/g, "").replace(/\s/g, "") : "";

        // Mapear datos de la nube
        const cloudKeys = Object.keys(publishedStaffData);

        cloudKeys.forEach(cloudKey => {
            const cleanCloud = normalize(cloudKey);
            const namesFromCloud = publishedStaffData[cloudKey];

            let matched = false;
            for (const localArea in displayData) {
                const cleanLocal = normalize(localArea);

                // Si coinciden exactamente o por aproximación
                if (cleanLocal === cleanCloud || cleanLocal.includes(cleanCloud) || cleanCloud.includes(cleanLocal)) {
                    displayData[localArea] = namesFromCloud;
                    matched = true;
                    break;
                }
            }
            // Si el área no existe en el mapa predeterminado, se agrega al final
            if (!matched && cleanCloud !== "") {
                displayData[cloudKey] = namesFromCloud;
            }
        });

        // Título o estado de carga
        const statusHeader = document.createElement('div');
        statusHeader.style.cssText = 'display:flex; justify-content:space-between; align-items:center; font-size:0.7rem; opacity:0.8; margin-bottom:12px; color:var(--accent); background:rgba(255,255,255,0.05); padding:8px 12px; border-radius:10px; border:1px solid rgba(255,255,255,0.1);';

        const count = cloudKeys.length;
        statusHeader.innerHTML = `
            <span>${isSyncing ? '⌛ Sincronizando...' : (count > 0 ? `✅ ${count} áreas cargadas` : '🛑 Sin datos en nube')}</span>
            <button id="hardResetBtn" style="background:#ff4757; color:white; border:none; padding:4px 8px; border-radius:5px; cursor:pointer; font-size:0.6rem; font-weight:bold;">RESETEAR</button>
        `;
        assignmentsList.appendChild(statusHeader);

        const resetBtn = document.getElementById('hardResetBtn');
        if (resetBtn) {
            resetBtn.onclick = (e) => {
                e.stopPropagation();
                if (confirm("¿Limpiar memoria del sistema y reintentar? Esto borrará todos los datos guardados localmente.")) {
                    localStorage.clear();
                    location.reload();
                }
            };
        }

        const areas = Object.keys(displayData);
        areas.sort().forEach(area => {
            const names = displayData[area] || "---";
            const item = document.createElement('div');
            item.className = 'assignment-item';
            // Hacerlo cliqueable para auto-rellenar
            item.style.cursor = 'pointer';
            item.title = "Haz clic para seleccionar este pasillo";

            item.innerHTML = `
                <div class="assignment-info">
                    <span class="assignment-aisle">${area}</span>
                    <span class="assignment-names">${names.toLowerCase()}</span>
                </div>
                <span class="select-indicator">➡️</span>
            `;

            item.onclick = () => {
                // 1. Seleccionar el pasillo en el dropdown
                const aisleSelect = document.getElementById('assignedAisle');
                if (aisleSelect) {
                    for (let i = 0; i < aisleSelect.options.length; i++) {
                        if (normalize(aisleSelect.options[i].value) === normalize(area)) {
                            aisleSelect.selectedIndex = i;
                            break;
                        }
                    }
                }

                // 2. Extraer el primer nombre para sugerir en el modal
                let firstName = "";
                if (names && names !== "---") {
                    firstName = names.split('/')[0].trim();
                }

                // 3. Cerrar el modal de asignaciones
                assignmentsModal.style.display = 'none';

                // 4. Abrir el modal de nombre con el pasillo y el nombre sugerido
                abrirModalNombre(area, firstName);
            };

            assignmentsList.appendChild(item);
        });
    }

    if (assignmentsBtn) {
        assignmentsBtn.onclick = () => {
            assignmentsModal.style.display = 'flex';
        };
    }

    if (closeAssignmentsBtn) {
        closeAssignmentsBtn.onclick = () => {
            assignmentsModal.style.display = 'none';
        };
    }

    // --- LÓGICA DE REINICIO DE DATOS (LIMPIAR TODO) ---
    const cycleBtn = document.getElementById('cycleResetBtn');
    const cycleText = document.getElementById('cycleStatusText');

    if (cycleBtn) {
        cycleBtn.addEventListener('click', () => {
            const resetModal = document.getElementById('resetCycleModal');
            const resetMsg = document.getElementById('resetModalMessage');
            const confirmBtn = document.getElementById('confirmResetBtn');
            const cancelBtn = document.getElementById('cancelResetBtn');

            let message = `
                <div style="text-align: center; line-height: 1.6;">
                    <span style="color:#ff4757; font-weight:bold; font-size: 1.2rem; display: block; margin-bottom: 12px;">⚠️ LEER ATENTAMENTE ⚠️</span>
                    <p style="margin-bottom: 10px;"><strong>ESTA ACCIÓN BORRARÁ SOLO DATOS GUARDADOS EN ESTA PÁGINA:</strong></p>
                    <div style="display: inline-block; text-align: left; margin-bottom: 15px;">
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li>1. Historial viejo de la página</li>
                            <li>2. Inventarios ya realizados</li>
                        </ul>
                    </div>
                    <p>¿Estás SEGURO de que deseas continuar?</p>
                </div>
            `;

            resetMsg.innerHTML = message;
            resetModal.style.display = 'flex';

            confirmBtn.onclick = () => {
                // Guardar datos de identidad para que no se borren
                const savedResp = localStorage.getItem('responsableDirecto');
                const savedUser = localStorage.getItem('userName');
                const savedSeco = localStorage.getItem('cecosesolaUser');
                const savedAdmin = localStorage.getItem('isAdmin');
                const savedPublishedStaff = localStorage.getItem('cachedPublishedStaff');

                // Limpiar todo lo demás (datos del inventario anterior, etc.)
                localStorage.clear();

                // Restaurar identidad
                if (savedResp) localStorage.setItem('responsableDirecto', savedResp);
                if (savedUser) localStorage.setItem('userName', savedUser);
                if (savedSeco) localStorage.setItem('cecosesolaUser', savedSeco);
                if (savedAdmin) localStorage.setItem('isAdmin', savedAdmin);
                if (savedPublishedStaff) localStorage.setItem('cachedPublishedStaff', savedPublishedStaff);

                resetModal.style.display = 'none';

                // Mostrar modal de éxito personalizado
                const successModal = document.getElementById('successResetModal');
                const closeSuccessBtn = document.getElementById('closeSuccessBtn');

                if (successModal) {
                    successModal.style.display = 'flex';
                    
                    // Solo recargamos automáticamente ya que el botón no existe
                    setTimeout(() => {
                        location.reload();
                    }, 1500); // 1.5 segundos para que de tiempo a ver el mensaje
                } else {
                    alert("¡Sistema limpiado con éxito!");
                    location.reload();
                }
            };

            cancelBtn.onclick = () => {
                resetModal.style.display = 'none';
            };
        });
    }
});
