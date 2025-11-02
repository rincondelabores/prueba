// ====================================================================
// 1. DATOS Y MEDIDAS ANTROPOMÉTRICAS (ACTUALIZADAS POR INFERENCIA)
// ====================================================================

const MEDIDAS_ANTROPOMETRICAS = {
    // Tallas de Bebé (Según progresión interna y correcciones)
    '00 (Prematuro)': { CP: 37.0, CC: 20.0, CA: 12.0, 'C Puño': 10.0, LT: 18.0, LM: 10.0, PSisa: 8.0, AE: 14.0, CED: 3.0 },
    '0 meses': { CP: 39.0, CC: 21.0, CA: 13.0, 'C Puño': 10.0, LT: 20.0, LM: 12.0, PSisa: 8.0, AE: 16.0, CED: 3.5 },
    '1-3 meses': { CP: 40.0, CC: 22.0, CA: 14.0, 'C Puño': 11.0, LT: 22.0, LM: 15.0, PSisa: 9.0, AE: 18.0, CED: 4.0 },
    '3-6 meses': { CP: 44.0, CC: 23.0, CA: 16.0, 'C Puño': 12.0, LT: 24.0, LM: 16.0, PSisa: 10.0, AE: 20.0, CED: 4.5 },
    '6-9 meses': { CP: 48.0, CC: 27.0, CA: 17.0, 'C Puño': 13.0, LT: 26.0, LM: 18.0, PSisa: 11.0, AE: 22.0, CED: 5.0 },
    '9-12 meses': { CP: 52.0, CC: 25.0, CA: 18.0, 'C Puño': 15.0, LT: 28.0, LM: 20.0, PSisa: 12.0, AE: 24.0, CED: 5.5 },
    '12-15 meses': { CP: 56.0, CC: 25.0, CA: 19.0, 'C Puño': 17.0, LT: 30.0, LM: 23.0, PSisa: 13.0, AE: 26.0, CED: 6.0 },
    '15-18 meses': { CP: 60.0, CC: 26.0, CA: 20.0, 'C Puño': 19.0, LT: 32.0, LM: 26.0, PSisa: 14.0, AE: 28.0, CED: 6.5 },
    '18-24 meses': { CP: 62.0, CC: 26.0, CA: 22.0, 'C Puño': 21.0, LT: 34.0, LM: 29.0, PSisa: 15.0, AE: 30.0, CED: 7.0 },

    // Tallas de Niños (Según progresión interna)
    '3 años': { CP: 63.0, CC: 26.5, CA: 23.0, 'C Puño': 21.5, LT: 35.0, LM: 30.5, PSisa: 15.5, AE: 31.0, CED: 7.3 }, 
    '4 años': { CP: 64.0, CC: 27.0, CA: 24.0, 'C Puño': 22.0, LT: 36.0, LM: 32.0, PSisa: 16.0, AE: 32.0, CED: 7.5 },
    '6 años': { CP: 68.0, CC: 28.0, CA: 26.0, 'C Puño': 23.0, LT: 38.0, LM: 35.5, PSisa: 17.0, AE: 34.0, CED: 8.0 },
    '8 años': { CP: 72.0, CC: 29.0, CA: 28.0, 'C Puño': 24.0, LT: 40.0, LM: 38.5, PSisa: 18.0, AE: 36.0, CED: 8.5 },
    '10 años': { CP: 76.0, CC: 30.0, CA: 30.0, 'C Puño': 25.0, LT: 42.0, LM: 41.0, PSisa: 19.0, AE: 38.0, CED: 9.0 },
    
    // Tallas de Mujer (Adulto) - Extrapoladas
    '36': { CP: 84.0, CC: 34.0, CA: 34.0, 'C Puño': 28.0, LT: 58.0, LM: 59.0, PSisa: 22.0, AE: 42.0, CED: 10.0 },
    '38': { CP: 88.0, CC: 35.0, CA: 35.5, 'C Puño': 29.0, LT: 59.0, LM: 59.5, PSisa: 23.0, AE: 43.0, CED: 10.3 },
    '40': { CP: 92.0, CC: 36.0, CA: 37.0, 'C Puño': 30.0, LT: 60.0, LM: 60.0, PSisa: 24.0, AE: 44.0, CED: 10.5 },
    '42': { CP: 98.0, CC: 37.5, CA: 39.0, 'C Puño': 31.0, LT: 61.0, LM: 60.5, PSisa: 25.5, AE: 45.5, CED: 10.8 },
    '44': { CP: 104.0, CC: 39.0, CA: 41.0, 'C Puño': 32.0, LT: 62.0, LM: 61.0, PSisa: 27.0, AE: 47.0, CED: 11.0 },
    '46': { CP: 110.0, CC: 40.5, CA: 43.0, 'C Puño': 33.0, LT: 63.0, LM: 61.5, PSisa: 28.5, AE: 48.5, CED: 11.3 },
    '48': { CP: 116.0, CC: 42.0, CA: 45.0, 'C Puño': 34.0, LT: 64.0, LM: 62.0, PSisa: 30.0, AE: 50.0, CED: 11.5 },
    '50': { CP: 120.0, CC: 44.0, CA: 47.0, 'C Puño': 35.0, LT: 65.0, LM: 63.0, PSisa: 31.0, AE: 52.0, CED: 12.0 }
};

const ORDEN_TALLAS = {
    // Orden de tallas ajustado
    'Bebé (Prematuro a 24m)': ['00 (Prematuro)', '0 meses', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses', '12-15 meses', '15-18 meses', '18-24 meses'],
    'Niños (3 a 10 años)': ['3 años', '4 años', '6 años', '8 años', '10 años'],
    'Adulto (36 a 50)': ['36', '38', '40', '42', '44', '46', '48', '50']
};


// ====================================================================
// 2. FUNCIONES DE UTILIDAD Y LÓGICA DE INTERFAZ
// ====================================================================

/**
 * Rellena el select de tallas. 
 */
function poblarTallas() {
    const select = document.getElementById('talla_seleccionada');
    if (!select) return; 

    // Limpia el select antes de poblar
    select.innerHTML = '<option value="">Selecciona una Talla...</option>';
    
    for (const [label, tallas] of Object.entries(ORDEN_TALLAS)) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = label;
        
        tallas.forEach(tallaKey => {
            if (tallaKey in MEDIDAS_ANTROPOMETRICAS) { 
                const option = document.createElement('option');
                option.value = tallaKey;
                option.textContent = `Talla ${tallaKey}`;
                optgroup.appendChild(option);
            }
        });
        
        select.appendChild(optgroup);
    }
}

/**
 * Muestra u oculta los campos condicionales.
 */
function manejarVisibilidadCampos() {
    const tipoPrenda = document.getElementById('tipo_prenda').value;
    const metodoGroup = document.getElementById('metodo-group');
    const cmGroup = document.getElementById('cm-group');
    
    if (tipoPrenda === 'CM_DESEADOS') {
        metodoGroup.style.display = 'none';
        cmGroup.style.display = 'block';
        document.getElementById('talla_seleccionada').removeAttribute('required');
    } else if (tipoPrenda === 'JERSEY' || tipoPrenda === 'CHAQUETA') {
        metodoGroup.style.display = 'block';
        cmGroup.style.display = 'none';
        document.getElementById('talla_seleccionada').setAttribute('required', 'required');
    } else {
        metodoGroup.style.display = 'none';
        cmGroup.style.display = 'none';
        document.getElementById('talla_seleccionada').setAttribute('required', 'required');
    }
}

// Inicialización de funciones al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    poblarTallas();
    const tipoPrendaSelect = document.getElementById('tipo_prenda');
    if (tipoPrendaSelect) {
        tipoPrendaSelect.addEventListener('change', manejarVisibilidadCampos);
    }
    manejarVisibilidadCampos();
    
    // Añade el evento de cálculo al botón/formulario
    const botonCalcular = document.getElementById('calcular_patron');
    if (botonCalcular) {
        botonCalcular.addEventListener('click', calcularPatron);
    }
});

// ====================================================================
// 3. LÓGICA CENTRAL DE CÁLCULO
// ====================================================================

function calcularPatron() {
    const puntosMuestra = parseFloat(document.getElementById('puntos_muestra').value);
    const hilerasMuestra = parseFloat(document.getElementById('hileras_muestra').value);
    const tallaSeleccionada = document.getElementById('talla_seleccionada').value;
    const tipoPrenda = document.getElementById('tipo_prenda').value;
    const metodoTejido = document.getElementById('metodo_tejido').value;
    const cmDeseados = parseFloat(document.getElementById('cm_deseados').value);
    const resultadoDiv = document.getElementById('resultado');

    // 1. Validaciones
    if (isNaN(puntosMuestra) || puntosMuestra <= 0) {
        resultadoDiv.innerHTML = '<p class="error">Error: Debe introducir los puntos de la muestra de tensión (en 10 cm).</p>';
        return;
    }
    if (!tipoPrenda) {
        resultadoDiv.innerHTML = '<p class="error">Error: Debe seleccionar un tipo de prenda.</p>';
        return;
    }
    
    const densidadP = puntosMuestra / 10.0;
    const densidadH = (hilerasMuestra && hilerasMuestra > 0) ? hilerasMuestra / 10.0 : null;
    const indicacionH = densidadH ? '' : ' (Nota: Las pasadas son aproximadas. Debe usar sus propias hileras/cm.)';

    // Cálculo simple de CM Deseados
    if (tipoPrenda === 'CM_DESEADOS') {
        if (isNaN(cmDeseados) || cmDeseados <= 0) {
            resultadoDiv.innerHTML = '<p class="error">Error: Debe introducir la cantidad de cm deseados.</p>';
            return;
        }
        const puntosTotales = Math.round(cmDeseados * densidadP);
        resultadoDiv.innerHTML = `<h4>🧶 Cálculo de Ancho</h4><p>Los puntos necesarios para un ancho de **${cmDeseados} cm** son: **${puntosTotales} puntos**.</p>`;
        return;
    }

    if (!tallaSeleccionada) {
         resultadoDiv.innerHTML = '<p class="error">Error: Debe seleccionar una talla.</p>';
        return;
    }

    const medidas = MEDIDAS_ANTROPOMETRICAS[tallaSeleccionada];
    
    // --- LÓGICA DE HOLGURA (Holgura Normal/Estándar) ---
    // Holgura base de 10 cm para adulto y 6 cm para niño para un ajuste cómodo
    let holguraCm = 10.0; 
    if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('años')) {
        holguraCm = 6.0; 
    }
    
    // --- LÓGICA DE RAGLÁN BASE (Para ambas direcciones) ---
    // Se calcula aquí para ser usada en ambos métodos (BAJO y ESCOTE)
    let raglanCmBase;
    if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('00')) {
         raglanCmBase = 10.0;
    } else if (tallaSeleccionada.includes('años')) {
         raglanCmBase = 12.0;
    } else {
        // CORRECCIÓN RAGLÁN: Tope máximo de 25 cm para adultos.
        raglanCmBase = Math.min(medidas.PSisa, 25.0); 
    }

    // Puntos y Hileras Base (USANDO HOLGURA)
    const anchoPrendaCm = medidas.CP + holguraCm; // APLICA HOLGURA
    const cpPts = Math.round(anchoPrendaCm * densidadP); // Puntos totales del contorno final (Prenda)
    
    const caPts = Math.round(medidas.CA * densidadP);
    
    // TIRA CUELLO (Referencia para tapeta)
    let tiraCuelloCm;
    if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('00') || tallaSeleccionada.includes('0')) {
        tiraCuelloCm = 1.5;
    } else if (tallaSeleccionada.includes('años')) {
        tiraCuelloCm = 2.0;
    } else {
        tiraCuelloCm = 2.5;
    }

    // Ajuste de CC para Top-Down (Raglán) para cuello más holgado
    let ccAjustadoCm = medidas.CC;
    if (metodoTejido === "ESCOTE") {
        if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('años')) {
             ccAjustadoCm = medidas.CC + 3; 
        } else {
             ccAjustadoCm = medidas.CC + 10; 
        }
    }
    const ccPts = Math.round(ccAjustadoCm * densidadP);
    
    const tiraCuelloPts = Math.round(tiraCuelloCm * densidadP);
    
    // Tapeta Suggestion (Calculada y redondeada al siguiente impar)
    let puntosTapeta = Math.round(tiraCuelloCm * densidadP);
    if (puntosTapeta % 2 === 0) {
        puntosTapeta += 1;
    }
    
    let resultado = '';

    if (metodoTejido === "BAJO" && densidadH) {
        // --- CÁLCULO BOTTOM-UP (Bajo a Hombro) ---
        
        const largoCuerpoCm = medidas.LT - medidas.PSisa;
        
        // Espalda
        const hilerasBajoSisa = Math.round(largoCuerpoCm * densidadH);
        const hilerasSisaHombro = Math.round(medidas.PSisa * densidadH);
        const hilerasTotalEspalda = hilerasBajoSisa + hilerasSisaHombro;
        
        let puntosMedioPecho = Math.round(cpPts / 2);
        let puntosEspalda = puntosMedioPecho;
        let puntosTotalDelantero; 
        
        let puntosACerrarBase = Math.round(medidas.CC * 0.75 * densidadP);
        const escoteCmDesdeSisa = medidas.PSisa - medidas.CED;
        const hilerasInicioEscote = Math.round(escoteCmDesdeSisa * densidadH);
        
        if (tipoPrenda === "CHAQUETA") {
            puntosTotalDelantero = Math.round(puntosMedioPecho / 2);
            puntosACerrarBase = Math.round(puntosACerrarBase / 2);
        } else { // JERSEY
            puntosTotalDelantero = puntosMedioPecho;
        }

        resultado += `<h4>🧶 Resultados de Tejido (Bajo a Escote - Por Piezas) ${indicacionH}</h4>\n`;
        resultado += `* **Talla Seleccionada (${tallaSeleccionada}) (Contorno de pecho del cuerpo):** **${medidas.CP.toFixed(1)} cm**.\n`;
        resultado += `* **Ancho Total de la Prenda (Contorno de pecho + Holgura):** **${anchoPrendaCm.toFixed(1)} cm** (**${cpPts} puntos**).\n\n`;
        
        // 1. ESPALDA
        resultado += `<u>1. Espalda</u>\n`;
        resultado += `* **Montar:** **${puntosEspalda} puntos**.\n`;
        resultado += `* **Tejer Bajo a Sisa:** **${hilerasBajoSisa} pasadas** (**${largoCuerpoCm.toFixed(1)} cm**).\n`;
        resultado += `* **Continuar Sisa a Hombro:** **${hilerasSisaHombro} pasadas** (**${medidas.PSisa.toFixed(1)} cm**).\n`;
        resultado += `* **Total Tejido:** **${hilerasTotalEspalda} pasadas** (**${medidas.LT.toFixed(1)} cm**).\n\n`;

        // 2. DELANTERO(S)
        
        const puntosHombro = Math.round((puntosTotalDelantero - puntosACerrarBase));
        const hilerasCurva = hilerasSisaHombro - hilerasInicioEscote;
        const tramosCierreHombro = 3;
        const hilerasCierreHombro = 6; 
        const hilerasTrabajarAntesHombro = hilerasCurva - hilerasCierreHombro;

        const cierreHombroTramos = [];
        const baseCierre = Math.floor(puntosHombro / tramosCierreHombro);
        const restoCierre = puntosHombro % tramosCierreHombro;

        for (let i = 0; i < tramosCierreHombro; i++) {
            cierreHombroTramos.push(baseCierre + (i < restoCierre ? 1 : 0));
        }
        const cierreHombroStr = cierreHombroTramos.join(', ');
        const pasadaInicioEscoteDesdeSisa = Math.max(0, hilerasInicioEscote);


        resultado += `<u>2. Delantero(s)</u>\n`;
        
        if (tipoPrenda === "JERSEY") {
            resultado += `* **Montar:** **${puntosTotalDelantero} puntos**.\n`;
        } else { // CHAQUETA
            resultado += `* **Montar (Base):** **${puntosTotalDelantero} puntos** (por cada Delantero).\n`;
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Opción Tapeta:** Si deseas añadir una tapeta de **${tiraCuelloCm.toFixed(1)} cm** de ancho, te sugerimos añadir **${puntosTapeta} puntos** *adicionales* al inicio de cada Delantero. </p>\n`;
        }
        
        resultado += `* **Tejer Bajo a Sisa:** **${hilerasBajoSisa} pasadas** (**${largoCuerpoCm.toFixed(1)} cm**).\n`;
        resultado += `* **Continuar Sisa a Hombro:** **${hilerasSisaHombro} pasadas** (**${medidas.PSisa.toFixed(1)} cm**).\n`;
        
        // 💡 Instrucciones de Escote (Formato claro)
        resultado += `<u>Instrucciones de Escote (Jersey)</u>\n`;

        if (tipoPrenda === "JERSEY") {
            resultado += `* **Inicio de Escote (desde Sisa):** En la pasada **${pasadaInicioEscoteDesdeSisa}** desde el inicio de la sisa, empezar a dar forma al escote.\n`;
            resultado += `* **Cierre Central:** Cerrar los **${puntosACerrarBase} puntos** centrales. Esto divide el tejido en dos lados independientes.\n`;
            resultado += `* **Puntos Restantes por Lado (Hombro):** **${puntosHombro} puntos**.\n\n`;
            
            resultado += `<u>Forma de Escote y Hombros</u>\n`;
            
            // Cierres de escote (ej. 3, 2, 1) - Estimación simple
            const puntosEscoteLado = puntosACerrarBase / 2;
            const cierresEscoteTramos = Math.min(3, Math.floor(puntosEscoteLado / 3));
            const baseCierreEscote = Math.floor(puntosEscoteLado / cierresEscoteTramos);
            const restoCierreEscote = puntosEscoteLado % cierresEscoteTramos;
            
            let cierresLadoEscote = [];
            for (let i = 0; i < cierresEscoteTramos; i++) {
                cierresLadoEscote.push(baseCierreEscote + (i < restoCierreEscote ? 1 : 0));
            }
            
            resultado += `* **Escote (Por Separado):** Disminuir o cerrar puntos en el borde del escote para dar la curva. Por ejemplo, cerrando por lado en varias pasadas: **${cierresLadoEscote.reverse().join(', ')} puntos**.\n`;
            
            
            if (hilerasTrabajarAntesHombro > 0) {
                 resultado += `* **Trabajo Plano:** Trabajar recto (sin disminuciones) durante **${hilerasTrabajarAntesHombro} pasadas** hasta que queden ${hilerasCierreHombro} pasadas para terminar la sisa.\n`;
            } else {
                 resultado += `* **Nota:** El cierre del hombro comienza inmediatamente.\n`;
            }
            
            resultado += `* **Cierre de Hombro (Pendiente):** Para dar pendiente, cerrar los **${puntosHombro} puntos** restantes en ${tramosCierreHombro} tramos iguales, en las últimas ${hilerasCierreHombro} pasadas. \n`;
            resultado += `  * **Tramos:** Cerrar en el borde de la sisa: **${cierreHombroStr} puntos**.\n\n`;
            
        } else { // CHAQUETA
            resultado += `* **Inicio de Escote (desde Sisa):** Empezar a dar forma al escote a las **${pasadaInicioEscoteDesdeSisa} pasadas**.\n`;
            resultado += `* **Puntos a Cerrar (Escote):** **${puntosACerrarBase} puntos** (por cada delantero, para dar forma al escote).\n`;
            resultado += `* **Puntos Restantes (Hombro):** **${puntosHombro} puntos** por delantero.\n\n`;
        }

        // 3. MANGAS
        resultado += `<u>3. Mangas</u>\n`;
        const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
        const puntosSisaManga = caPts; 
        
        // CORRECCIÓN LARGO MANGA: Largo de Puño a Sisa (LM Total - Altura Raglán)
        const largoMangaSisaPuñoCm = medidas.LM - raglanCmBase; 
        const largoMangaH = Math.round(largoMangaSisaPuñoCm * densidadH);
        
        const totalAumentos = puntosSisaManga - puntosPuño;
        const aumentosPorLado = Math.floor(totalAumentos / 2);
        const frecuenciaAumentos = (aumentosPorLado > 0) ? Math.round(largoMangaH / aumentosPorLado) : 0;
        
        resultado += `* **Montar:** **${puntosPuño} p.** (Puño de **${medidas['C Puño'].toFixed(1)} cm**).\n`;
        resultado += `* **Tejer:** **${largoMangaH} pasadas** (**${largoMangaSisaPuñoCm.toFixed(1)} cm**) hasta la sisa.\n`;
        
        if (frecuenciaAumentos > 0) {
            resultado += `* **Aumentos:** Aumentar **1 punto a cada lado** cada **${frecuenciaAumentos} pasadas** (**${aumentosPorLado} veces**) hasta alcanzar los **${puntosSisaManga} puntos** en la sisa.\n\n`;
        } else {
            resultado += `* **Aumentos:** No se requieren aumentos.\n\n`;
        }


        // 4. TIRA DE CUELLO
        resultado += `<u>4. Tira de Cuello</u>\n`;
        resultado += `* **Puntos a Recoger/Montar (aprox.):** **${Math.round(medidas.CC * 0.9 * densidadP)} puntos** (**${medidas.CC.toFixed(1)} cm**).\n`;
        resultado += `* **Tejer la Tira:** Tejer **${tiraCuelloPts} pasadas** (**${tiraCuelloCm.toFixed(1)} cm**) y cerrar.\n`;

    } else if (metodoTejido === "ESCOTE" && densidadH) {
        // --- CÁLCULO TOP-DOWN (Escote a Bajo - Raglán) ---
        
        const hilerasRaglan = Math.round(raglanCmBase * densidadH);
        const aumentosPorLado = Math.floor(hilerasRaglan / 2);
        
        resultado += `<h4>🧶 Resultados de Tejido desde el Escote (Raglán) ${indicacionH}</h4>\n`;
        resultado += `* **Talla Seleccionada (${tallaSeleccionada}) (Contorno de pecho del cuerpo):** **${medidas.CP.toFixed(1)} cm**.\n`;
        resultado += `* **Ancho Total de la Prenda (Contorno de pecho + Holgura):** **${anchoPrendaCm.toFixed(1)} cm** (**${cpPts} puntos**).\n\n`;

        // 1. REPARTO INICIAL
        const puntosMontaje = ccPts; 
        const puntosBase = puntosMontaje - 4; 
        
        const pEspalda = Math.round(puntosBase * 0.33);
        const pManga = Math.round((puntosBase * 0.33) / 2); 
        let pDelanteroBase = puntosBase - pEspalda - (pManga * 2);
        
        // Ajuste fino para repartir los puntos restantes
        const puntosRestantes = puntosBase - pEspalda - (pManga * 2) - pDelanteroBase;
        pDelanteroBase += puntosRestantes;
        
        let repartoStr;
        if (tipoPrenda === "JERSEY") {
            const pDelanteroFinal = pDelanteroBase;
            repartoStr = `**${pEspalda} p** (Espalda), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pDelanteroFinal} p** (Delantero), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador).`;
        } else { // CHAQUETA
            const pDelanteroParte1 = Math.floor(pDelanteroBase / 2);
            const pDelanteroParte2 = pDelanteroBase - pDelanteroParte1;
            
            repartoStr = `**${pDelanteroParte1} p** (Del. 1), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pEspalda} p** (Espalda), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pDelanteroParte2} p** (Del. 2).`;
            
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Opción Tapeta:** Si deseas añadir una tapeta de **${tiraCuelloCm.toFixed(1)} cm** de ancho, te sugerimos montar **${puntosTapeta} puntos** *adicionales* a cada lado antes de comenzar el reparto, o tejerla después.</p>\n`;
        }
        
        resultado += `<u>1. Tira de Cuello y Reparto Inicial</u>\n`;
        resultado += `* **Puntos Totales de Montaje (Cuello):** **${puntosMontaje} puntos**.\n`;
        resultado += `* **Instrucción de Cuello:** Tejer **${tiraCuelloPts} pasadas** (**${tiraCuelloCm.toFixed(1)} cm**) con los puntos de montaje para formar la tira del cuello.\n`;
        resultado += `* **Reparto (4 puntos marcados para el Raglán):** ${repartoStr}\n\n`;

        // 2. AUMENTOS RAGLÁN
        
        const puntosMangaFinal = pManga + aumentosPorLado; 
        const puntosAnadirSisaPts = Math.max(4, Math.round(puntosMangaFinal * 0.1)); 

        resultado += `<u>2. Aumentos y Separación (Raglán)</u>\n`;
        resultado += `* **Largo de Línea Raglán Deseado:** Aprox. **${raglanCmBase.toFixed(1)} cm** (**${hilerasRaglan} pasadas**).\n`;
        resultado += `* **Instrucción de Aumentos:** Aumentar 1 punto a cada lado de los 4 marcadores (8 aumentos total) cada **2 pasadas** hasta completar **${hilerasRaglan} pasadas**.\n`;
        resultado += `* **Puntos a Añadir en la Sisa:** Al separar las mangas, añadir **${puntosAnadirSisaPts} puntos** (montados o recogidos) bajo cada sisa. \n\n`;
        
        
        // 3. LARGOS FINALES
        const largoCuerpoCm = medidas.LT - raglanCmBase;
        const largoCuerpoRestanteH = Math.round(largoCuerpoCm * densidadH);
        
        // CORRECCIÓN LARGO MANGA: Largo de Sisa a Puño (LM Total - Altura Raglán)
        const largoMangaCm = medidas.LM - raglanCmBase; 
        const largoMangaRestanteH = Math.round(largoMangaCm * densidadH);

        const finalLargoCuerpoCm = largoCuerpoCm > 0 ? largoCuerpoCm.toFixed(1) : (0.0).toFixed(1);
        const finalLargoMangaCm = largoMangaCm > 0 ? largoMangaCm.toFixed(1) : (0.0).toFixed(1);
        
        resultado += `<u>3. Largos Finales</u>\n`;
        resultado += `* **Largo del Cuerpo (desde Sisa a Bajo):** **${finalLargoCuerpoCm} cm** (**${largoCuerpoRestanteH} pasadas**).\n`;
        resultado += `* **Largo de la Manga (desde Sisa a Puño):** **${finalLargoMangaCm} cm** (**${largoMangaRestanteH} pasadas**).\n`;

    } else {
        resultadoDiv.innerHTML = '<p class="error">Error: Por favor, complete todos los campos obligatorios y/o introduzca las **pasadas en 10 cm** para calcular las instrucciones de tejido.</p>';
        return;
    }

    // El reemplazo final asegura que negritas (**) se muestren como negritas (<b>) en HTML
    resultadoDiv.innerHTML = resultado.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}
