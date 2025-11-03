// ====================================================================
// 1. DATOS Y MEDIDAS ANTROPOMÉTRICAS (Adulto CORREGIDO y CONSOLIDADO)
//    CP DE TALLAS 36, 38, 40 MODIFICADOS.
// ====================================================================

const MEDIDAS_ANTROPOMETRICAS = {
    // Tallas de Bebé (Se mantienen los datos anteriores)
    '00 (Prematuro)': { CP: 37.0, CC: 20.0, CA: 12.0, 'C Puño': 10.0, LT: 18.0, LM: 10.0, PSisa: 8.0, AE: 14.0, CED: 3.0 },
    '0 meses': { CP: 39.0, CC: 21.0, CA: 13.0, 'C Puño': 10.0, LT: 20.0, LM: 12.0, PSisa: 8.0, AE: 16.0, CED: 3.5 },
    '1-3 meses': { CP: 40.0, CC: 22.0, CA: 14.0, 'C Puño': 11.0, LT: 22.0, LM: 14.0, PSisa: 9.0, AE: 18.0, CED: 4.0 },
    '3-6 meses': { CP: 44.0, CC: 23.0, CA: 16.0, 'C Puño': 12.0, LT: 24.0, LM: 16.0, PSisa: 10.0, AE: 20.0, CED: 4.5 },
    '6-9 meses': { CP: 48.0, CC: 27.0, CA: 17.0, 'C Puño': 13.0, LT: 26.0, LM: 18.0, PSisa: 11.0, AE: 22.0, CED: 5.0 },
    '9-12 meses': { CP: 52.0, CC: 25.0, CA: 18.0, 'C Puño': 15.0, LT: 28.0, LM: 20.0, PSisa: 12.0, AE: 24.0, CED: 5.5 },
    '12-15 meses': { CP: 56.0, CC: 25.0, CA: 19.0, 'C Puño': 17.0, LT: 30.0, LM: 22.0, PSisa: 13.0, AE: 26.0, CED: 6.0 },
    '15-18 meses': { CP: 60.0, CC: 26.0, CA: 20.0, 'C Puño': 19.0, LT: 32.0, LM: 25.0, PSisa: 14.0, AE: 28.0, CED: 6.5 },
    '18-24 meses': { CP: 62.0, CC: 26.0, CA: 22.0, 'C Puño': 21.0, LT: 34.0, LM: 27.0, PSisa: 15.0, AE: 30.0, CED: 7.0 },

    // Tallas de Niños (Se mantienen los datos anteriores)
    '3 años': { CP: 63.0, CC: 26.5, CA: 23.0, 'C Puño': 21.5, LT: 38.0, LM: 30.5, PSisa: 15.5, AE: 31.0, CED: 7.3 }, 
    '4 años': { CP: 64.0, CC: 27.0, CA: 24.0, 'C Puño': 22.0, LT: 42.0, LM: 32.0, PSisa: 16.0, AE: 32.0, CED: 7.5 },
    '6 años': { CP: 68.0, CC: 28.0, CA: 26.0, 'C Puño': 23.0, LT: 34.0, LM: 35.5, PSisa: 17.0, AE: 34.0, CED: 8.0 },
    '8 años': { CP: 72.0, CC: 29.0, CA: 28.0, 'C Puño': 24.0, LT: 46.0, LM: 38.5, PSisa: 18.0, AE: 36.0, CED: 8.5 },
    '10 años': { CP: 76.0, CC: 30.0, CA: 30.0, 'C Puño': 25.0, LT: 48.0, LM: 41.0, PSisa: 19.0, AE: 38.0, CED: 9.0 },
    
    // Tallas de Mujer (Adulto) - CP MODIFICADO.
    '36': { CP: 82.0, CC: 35.0, CA: 25.0, 'C Puño': 15.2, LT: 58.0, LM: 47.0, PSisa: 22.0, AE: 35.0, CED: 7.3 }, 
    '38': { CP: 86.0, CC: 36.0, CA: 28.0, 'C Puño': 15.4, LT: 60.0, LM: 48.0, PSisa: 22.0, AE: 36.0, CED: 7.5 }, 
    '40': { CP: 92.0, CC: 37.0, CA: 30.0, 'C Puño': 15.6, LT: 61.0, LM: 48.5, PSisa: 22.5, AE: 36.8, CED: 7.7 }, 
    '42': { CP: 100.0, CC: 38.0, CA: 33.0, 'C Puño': 15.8, LT: 62.0, LM: 49.0, PSisa: 23.0, AE: 37.6, CED: 7.9 }, 
    '44': { CP: 104.0, CC: 40.0, CA: 36.0, 'C Puño': 16.0, LT: 63.0, LM: 50.0, PSisa: 23.3, AE: 38.6, CED: 8.1 }, 
    '46': { CP: 108.0, CC: 39.0, CA: 38.0, 'C Puño': 16.2, LT: 64.0, LM: 51.0, PSisa: 23.5, AE: 39.6, CED: 8.3 }, 
    '48': { CP: 112.0, CC: 40.0, CA: 40.0, 'C Puño': 16.4, LT: 66.0, LM: 52.0, PSisa: 24.0, AE: 40.6, CED: 8.5 }, 
    '50': { CP: 116.0, CC: 41.0, CA: 43.0, 'C Puño': 16.6, LT: 68.0, LM: 54.0, PSisa: 24.3, AE: 41.6, CED: 8.7 } 
};

const ORDEN_TALLAS = {
    'Bebé (Prematuro a 24m)': ['00 (Prematuro)', '0 meses', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses', '12-15 meses', '15-18 meses', '18-24 meses'],
    'Niños (3 a 10 años)': ['3 años', '4 años', '6 años', '8 años', '10 años'],
    'Adulto (36 a 50)': ['36', '38', '40', '42', '44', '46', '48', '50']
};


// ====================================================================
// 2. FUNCIONES DE UTILIDAD Y LÓGICA DE INTERFAZ (Se mantienen sin cambios)
// ====================================================================

function poblarTallas() {
    const select = document.getElementById('talla_seleccionada');
    if (!select) return; 

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

document.addEventListener('DOMContentLoaded', () => {
    poblarTallas();
    const tipoPrendaSelect = document.getElementById('tipo_prenda');
    if (tipoPrendaSelect) {
        tipoPrendaSelect.addEventListener('change', manejarVisibilidadCampos);
    }
    manejarVisibilidadCampos();
    
    const botonCalcular = document.getElementById('calcular_patron');
    if (botonCalcular) {
        botonCalcular.addEventListener('click', calcularPatron);
    }
});

// ====================================================================
// 3. LÓGICA CENTRAL DE CÁLCULO (Ajuste para Pasadas Opcionales y Chaqueta Bottom-Up)
// ====================================================================

/**
 * Genera una secuencia de cierres progresivos (3p x 1, luego 2p, luego 1p)
 * para lograr el borde curvo del escote.
 */
function generarCierresProgresivosNuevo(puntosAFormar) {
    let puntosRestantes = puntosAFormar;
    const cierres = [];

    // 1. Cierre de 3 puntos, 1 vez (si es posible)
    if (puntosRestantes >= 3) {
        cierres.push(3);
        puntosRestantes -= 3;
    }

    // 2. Cierres de 2 puntos (prioridad: cierres mayores primero)
    while (puntosRestantes >= 2) {
        cierres.push(2);
        puntosRestantes -= 2;
    }

    // 3. Cierres de 1 punto (el resto)
    while (puntosRestantes > 0) {
        cierres.push(1);
        puntosRestantes -= 1;
    }

    // Agrupar cierres idénticos consecutivos y formatear para la salida
    const cierresAgrupados = [];
    if (cierres.length > 0) {
        let actual = cierres[0];
        let contador = 1;
        for (let i = 1; i < cierres.length; i++) {
            if (cierres[i] === actual) {
                contador++;
            } else {
                cierresAgrupados.push(`${actual}p, ${contador} vez${contador > 1 ? 'es' : ''}`);
                actual = cierres[i];
                contador = 1;
            }
        }
        cierresAgrupados.push(`${actual}p, ${contador} vez${contador > 1 ? 'es' : ''}`);
    }

    return { 
        secuencia: cierresAgrupados, 
        totalDisminuciones: cierres.length 
    };
}


/**
 * Función principal para calcular el patrón de tejido.
 */
function calcularPatron() {
    const puntosMuestra = parseFloat(document.getElementById('puntos_muestra').value);
    const hilerasMuestra = parseFloat(document.getElementById('hileras_muestra').value);
    const tallaSeleccionada = document.getElementById('talla_seleccionada').value;
    const tipoPrenda = document.getElementById('tipo_prenda').value;
    const metodoTejido = document.getElementById('metodo_tejido').value;
    const cmDeseados = parseFloat(document.getElementById('cm_deseados').value);
    const resultadoDiv = document.getElementById('resultado');

    // 1. Validaciones (solo para campos OBLIGATORIOS)
    if (isNaN(puntosMuestra) || puntosMuestra <= 0) {
        resultadoDiv.innerHTML = '<p class="error">Error: Debe introducir los **puntos de la muestra** de tensión (en 10 cm).</p>';
        return;
    }
    if (!tipoPrenda) {
        resultadoDiv.innerHTML = '<p class="error">Error: Debe seleccionar un **tipo de prenda**.</p>';
        return;
    }
    
    const densidadP = puntosMuestra / 10.0;
    // La densidadH es opcional. Si no existe o es <= 0, será null.
    const densidadH = (hilerasMuestra && hilerasMuestra > 0) ? hilerasMuestra / 10.0 : null; 
    
    // Cálculo simple de CM Deseados
    if (tipoPrenda === 'CM_DESEADOS') {
        if (isNaN(cmDeseados) || cmDeseados <= 0) {
            resultadoDiv.innerHTML = '<p class="error">Error: Debe introducir la cantidad de **cm deseados**.</p>';
            return;
        }
        const puntosTotales = Math.round(cmDeseados * densidadP);
        resultadoDiv.innerHTML = `<h4>🧶 Cálculo de Ancho</h4><p>Los puntos necesarios para un ancho de **${cmDeseados} cm** son: **${puntosTotales} puntos**.</p>`;
        return;
    }

    // El resto de lógica requiere la talla
    if (!tallaSeleccionada) {
         resultadoDiv.innerHTML = '<p class="error">Error: Debe seleccionar una **talla**.</p>';
        return;
    }

    const medidas = MEDIDAS_ANTROPOMETRICAS[tallaSeleccionada];
    
    // --- LÓGICA DE HOLGURA Y RAGLÁN (Se mantiene) ---
    let holguraCm = 8.0; 
    if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('00')) {
        holguraCm = 4.0; 
    } else if (tallaSeleccionada.includes('años')) {
        holguraCm = 6.0; 
    }
    
    let raglanCmBase;
    if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('00')) {
         raglanCmBase = 10.0;
    } else if (tallaSeleccionada.includes('años')) {
         raglanCmBase = 12.0;
    } else {
        raglanCmBase = Math.min(medidas.PSisa, 25.0); 
    }

    // Puntos y Hileras Base
    const anchoPrendaCm = medidas.CP + holguraCm; 
    const cpPts = Math.round(anchoPrendaCm * densidadP); 
    const caPts = Math.round(medidas.CA * densidadP);
    
    let tiraCuelloCm = (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('00') || tallaSeleccionada.includes('0')) ? 1.5 : (tallaSeleccionada.includes('años') ? 2.0 : 2.5);
    const tiraCuelloPts = Math.round(tiraCuelloCm * densidadP);
    
    let ccAjustadoCm = medidas.CC;
    if (metodoTejido === "ESCOTE") {
        if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('00')) {
             ccAjustadoCm = medidas.CC + 1.0; 
        } else if (tallaSeleccionada.includes('años')) {
             ccAjustadoCm = medidas.CC + 3.0; 
        } else {
             ccAjustadoCm = medidas.CC + 10.0; 
        }
    }
    const ccPts = Math.round(ccAjustadoCm * densidadP);
    
    let puntosTapeta = Math.round(tiraCuelloCm * densidadP);
    if (puntosTapeta % 2 === 0) {
        puntosTapeta += 1;
    }
    
    let resultado = '';

    // --- LÓGICA BOTTOM-UP (Del Bajo al Hombro) ---
    if (metodoTejido === "BAJO") {
        // CÁLCULOS VERTICALES CONDICIONALES A DENSIDADH
        const largoCuerpoCm = medidas.LT - medidas.PSisa;
        const hilerasBajoSisa = densidadH ? Math.round(largoCuerpoCm * densidadH) : null; 
        const hilerasSisaHombro = densidadH ? Math.round(medidas.PSisa * densidadH) : null;
        const hilerasTotalEspalda = (hilerasBajoSisa !== null && hilerasSisaHombro !== null) ? (hilerasBajoSisa + hilerasSisaHombro) : null;
        
        let puntosMedioPecho = Math.round(cpPts / 2);
        let puntosEspalda = puntosMedioPecho;
        let puntosTotalDelantero; 
        
        const escoteCmDesdeSisa = medidas.PSisa - medidas.CED;
        const hilerasInicioEscote = densidadH ? Math.round(escoteCmDesdeSisa * densidadH) : null;
        
        if (tipoPrenda === "CHAQUETA") {
            puntosTotalDelantero = Math.round(puntosMedioPecho / 2);
        } else { // JERSEY
            puntosTotalDelantero = puntosMedioPecho;
        }

        // --- LÓGICA DE ESCOTE (33/33/33 y 30/40/30) ---
        const puntosHombroBase = Math.round(puntosTotalDelantero * 0.33); 
        let puntosEscoteTotal = puntosTotalDelantero - (puntosHombroBase * 2);
        if (puntosEscoteTotal < 3) {
            puntosEscoteTotal = 3; 
            puntosHombroBase = Math.floor((puntosTotalDelantero - puntosEscoteTotal) / 2);
        }
        let puntosEscoteCentral = Math.round(puntosEscoteTotal * 0.40);
        if (tipoPrenda === "JERSEY" && puntosEscoteCentral % 2 === 0) {
             puntosEscoteCentral = Math.max(1, puntosEscoteCentral + 1);
        }
        const puntosRestantesCurvas = puntosEscoteTotal - puntosEscoteCentral;
        let puntosAFormarEscotePts = Math.floor(puntosRestantesCurvas / 2);
        const puntosHombro = puntosHombroBase + (puntosRestantesCurvas - (puntosAFormarEscotePts * 2));
        
        const escoteCalculado = generarCierresProgresivosNuevo(puntosAFormarEscotePts);
        const cierresEscote = escoteCalculado.secuencia; 
        const pasadasCurva = escoteCalculado.totalDisminuciones * 2; 
        
        // CÁLCULO DE CM RECTOS (Siempre en CM)
        let cmCurva = 0;
        if (densidadH) {
             cmCurva = pasadasCurva / densidadH;
        }
        
        const cmRectoAFormar = medidas.PSisa - escoteCmDesdeSisa - cmCurva;
        const cmRectoOutput = cmRectoAFormar > 0 ? cmRectoAFormar.toFixed(1) : (0).toFixed(1);
        
        // CÁLCULO DE PASADAS RECTAS (Solo si densidadH existe)
        let hilerasRestantesStr = '';
        if (densidadH) {
            const hilerasTrabajarRecto = hilerasSisaHombro - hilerasInicioEscote - pasadasCurva;
            if (hilerasTrabajarRecto > 0) {
                hilerasRestantesStr = `(**${hilerasTrabajarRecto} pasadas**)`
            }
        }
        
        // =================================== OUTPUT BOTTOM-UP ===================================
        resultado += `<h4>🧶 Resultados de Tejido (Del Bajo al Hombro - Por Piezas)</h4>\n`;
        resultado += `* **Talla Seleccionada (${tallaSeleccionada}) (Contorno de pecho):** **${medidas.CP.toFixed(1)} cm**.\n`; 
        resultado += `* **Ancho Total de la Prenda (Contorno de pecho + Holgura):** **${anchoPrendaCm.toFixed(1)} cm** (**${cpPts} puntos**).\n\n`;
        
        // 1. ESPALDA
        resultado += `<u>1. Espalda</u>\n`;
        resultado += `* **Montar:** **${puntosEspalda} puntos**.\n`;
        resultado += `* **Tejer hasta la Sisa:** **${largoCuerpoCm.toFixed(1)} cm** ${hilerasBajoSisa !== null ? `(**${hilerasBajoSisa} pasadas**)` : ''}.\n`; 
        resultado += `* **Continuar Sisa a Hombro (Recto):** **${medidas.PSisa.toFixed(1)} cm** ${hilerasSisaHombro !== null ? `(**${hilerasSisaHombro} pasadas**)` : ''}.\n`; 
        resultado += `* **Total Tejido (De bajo a Hombro):** **${medidas.LT.toFixed(1)} cm** ${hilerasTotalEspalda !== null ? `(**${hilerasTotalEspalda} pasadas**)` : ''}. Cerrar todos los puntos al finalizar.\n\n`;

        // 2. DELANTERO(S)
        resultado += `<u>2. Delantero(s)</u>\n`;
        if (tipoPrenda === "JERSEY") {
            resultado += `* **Montar:** **${puntosTotalDelantero} puntos**.\n`;
        } else { // CHAQUETA
            // Ya se ha calculado puntosEscoteCentral para un solo delantero (40% de 33% del total)
            resultado += `* **Montar:** **${puntosTotalDelantero} puntos** (por cada Delantero).\n`;
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tapeta Opcional:** Sugerimos añadir **${puntosTapeta} puntos** extra para la tapeta, que serán **${tiraCuelloCm.toFixed(1)} cm** de ancho.</p>\n`;
        }
        resultado += `* **Tejer hasta la Sisa:** **${largoCuerpoCm.toFixed(1)} cm** ${hilerasBajoSisa !== null ? `(**${hilerasBajoSisa} pasadas**)` : ''} (igual que la espalda).\n`; 
      
        // INSTRUCCIONES DE ESCOTE
        resultado += `<u>Instrucciones de Escote (Delantero)</u>\n`;
        resultado += `* **1. Inicio de Escote:** A los **${escoteCmDesdeSisa.toFixed(1)} cm** desde el inicio de la sisa. ${hilerasInicioEscote !== null ? `(En la pasada **${hilerasInicioEscote}**).` : ''}\n`;
        
        if (tipoPrenda === "JERSEY") {
             resultado += `* **2. Cierre Central (Recto):** Cerrar los **${puntosEscoteCentral} puntos** centrales. Esto divide el tejido en dos lados independientes.\n`;
             resultado += `* **3. Curva de Escote (Ambos lados):** Continuar tejiendo y cerrar progresivamente en el borde del escote con la siguiente secuencia: **${cierresEscote.join(', ')}** (un total de **${puntosAFormarEscotePts} puntos** a cerrar por lado).\n`;
             resultado += `* **4.  Hombro:** Continuar recto los **${cmRectoOutput} cm** ${hilerasRestantesStr} restantes. Cerrar los **${puntosHombro} puntos** restantes por hombro al llegar a la altura total de sisa (**${medidas.PSisa.toFixed(1)} cm** ${hilerasSisaHombro !== null ? `(**${hilerasSisaHombro} pasadas**)` : ''}).\n\n`; 
        } else { // CHAQUETA
            const totalCierreLateral = puntosEscoteCentral + puntosAFormarEscotePts;
            const secuenciaTotal = generarCierresProgresivosNuevo(totalCierreLateral).secuencia;
            
            const puntosCierreInicial = puntosEscoteCentral;
            const puntosCierreInicialConTapeta = puntosEscoteCentral + puntosTapeta;
            
            const avisoTapetaEnCierre = ` (Tenga en cuenta que si usó la tapeta sugerida de **${puntosTapeta} puntos**, el cierre inicial será de **${puntosCierreInicialConTapeta} puntos** en total).`;
            
            // Instrucción modificada con la advertencia
            resultado += `* **2. Borde Central (Escote):** Cerrar **${puntosCierreInicial} puntos**${avisoTapetaEnCierre} y luego continuar disminuyendo progresivamente con la siguiente secuencia: **${secuenciaTotal.join(', ')}** (un total de **${totalCierreLateral} puntos** a disminuir).\n`;
            resultado += `* **3. Hombro:** Continuar recto y cerrar los **${puntosHombro} puntos** restantes en el hombro al llegar a los **${medidas.PSisa.toFixed(1)} cm** de altura total de sisa ${hilerasSisaHombro !== null ? `(**${hilerasSisaHombro} pasadas**)` : ''}.\n\n`; 
        }

        // 3. MANGAS
        resultado += `<u>3. Mangas</u>\n`;
        const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
        const puntosSisaManga = caPts; 
        const largoMangaSisaPuñoCm = medidas.LM; 
        const largoMangaH = densidadH ? Math.round(largoMangaSisaPuñoCm * densidadH) : null;
        
        const totalAumentos = puntosSisaManga - puntosPuño;
        const aumentosPorLado = Math.floor(totalAumentos / 2);
        
        resultado += `* **Montar:** **${puntosPuño} p.** (Puño de **${medidas['C Puño'].toFixed(1)} cm**).\n`;
        resultado += `* **Tejer:** **${largoMangaSisaPuñoCm.toFixed(1)} cm** (Largo de Sisa a Puño). ${largoMangaH !== null ? `(**${largoMangaH} pasadas**)` : ''}\n`;
        
        if (aumentosPorLado > 0) {
            const frecuenciaCm = largoMangaSisaPuñoCm / aumentosPorLado;
            
            let frecuenciaStr = `cada **${frecuenciaCm.toFixed(1)} cm**`;
            if (densidadH) {
                const frecuenciaAumentos = Math.round(largoMangaH / aumentosPorLado);
                frecuenciaStr = `cada **${frecuenciaAumentos} pasadas** (aprox. **${frecuenciaCm.toFixed(1)} cm**)`
            }
            
            resultado += `* **Aumentos:** Aumentar **1 punto a cada lado** ${frecuenciaStr} **${aumentosPorLado} veces** hasta alcanzar los **${puntosSisaManga} puntos** en la sisa.\n\n`;
        } else {
            resultado += `* **Aumentos:** No se requieren aumentos o el cálculo es inconsistente. Tejer recto.\n\n`;
        }


    // --- LÓGICA TOP-DOWN (Escote al Bajo - Raglán) ---
    } else if (metodoTejido === "ESCOTE") {
        
        const hilerasRaglan = densidadH ? Math.round(raglanCmBase * densidadH) : null;
        
        resultado += `<h4>🧶 Resultados de Tejido desde el Escote (Raglán)</h4>\n`;
        resultado += `* **Talla Seleccionada (${tallaSeleccionada}) (Contorno de pecho):** **${medidas.CP.toFixed(1)} cm**.\n`; 
        resultado += `* **Ancho Total de la Prenda (Contorno de pecho + Holgura):** **${anchoPrendaCm.toFixed(1)} cm** (**${cpPts} puntos**).\n\n`;

        // 1. REPARTO INICIAL
        const puntosMontaje = ccPts; 
        const puntosBase = puntosMontaje - 4; 
        
        const pEspalda = Math.round(puntosBase * 0.33);
        const pManga = Math.round((puntosBase * 0.33) / 2); 
        let pDelanteroBase = puntosBase - pEspalda - (pManga * 2);
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
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tapeta Opcional:** Sugerimos montar **${puntosTapeta} puntos** *adicionales* a cada lado para la tapeta, que serán **${tiraCuelloCm.toFixed(1)} cm** de ancho.</p>\n`;
        }
        
        resultado += `<u>1. Tira de Cuello y Reparto Inicial</u>\n`;
        resultado += `* **Puntos Totales de Montaje (Cuello):** **${puntosMontaje} puntos** (**${ccAjustadoCm.toFixed(1)} cm** de contorno).\n`;
        resultado += `* **Instrucción de Cuello:** Tejer **${tiraCuelloPts} pasadas** (**${tiraCuelloCm.toFixed(1)} cm**) para la tira del cuello.\n`;
        resultado += `* **Reparto (4 puntos marcados para el Raglán):** ${repartoStr}\n\n`;

        // 2. AUMENTOS RAGLÁN
        const puntosMangaFinal = pManga + (raglanCmBase * densidadP * 2); 
        const puntosAnadirSisaPtsBase = Math.max(4, Math.round(puntosMangaFinal * 0.1)); 
        const puntosAnadirSisaPts = puntosAnadirSisaPtsBase % 2 === 0 ? puntosAnadirSisaPtsBase : puntosAnadirSisaPtsBase + 1; 

        resultado += `<u>2. Aumentos y Separación (Raglán)</u>\n`;
        resultado += `* **Largo de Línea Raglán:** **${raglanCmBase.toFixed(1)} cm** ${hilerasRaglan !== null ? `(**${hilerasRaglan} pasadas**)` : ''}.\n`;
        
        let instruccionRaglanStr = "Aumentar 1 punto a cada lado de los 4 marcadores (8 aumentos total) a lo largo de los **" + raglanCmBase.toFixed(1) + " cm**.";
        if (densidadH) {
             instruccionRaglanStr = `Aumentar 1 punto a cada lado de los 4 marcadores (8 aumentos total) cada **2 pasadas** hasta completar **${hilerasRaglan} pasadas**.`;
        }
        resultado += `* **Instrucción de Aumentos:** ${instruccionRaglanStr}\n`;
        resultado += `* **Puntos a Añadir en la Sisa:** Al separar las mangas, añadir **${puntosAnadirSisaPts} puntos** (montados o recogidos) bajo cada sisa. \n\n`;
        
        
        // 3. LARGOS FINALES
        const largoCuerpoCm = medidas.LT - medidas.PSisa; 
        const largoCuerpoRestanteH = densidadH ? Math.round(largoCuerpoCm * densidadH) : null;
        
        const largoMangaCm = medidas.LM; 
        const largoMangaRestanteH = densidadH ? Math.round(largoMangaCm * densidadH) : null;

        const finalLargoCuerpoCm = largoCuerpoCm > 0 ? largoCuerpoCm.toFixed(1) : (0.0).toFixed(1);
        const finalLargoMangaCm = largoMangaCm > 0 ? largoMangaCm.toFixed(1) : (0.0).toFixed(1);
        
        resultado += `<u>3. Largos Finales</u>\n`;
        resultado += `* **Largo del Cuerpo (desde Sisa a Bajo):** **${finalLargoCuerpoCm} cm** ${largoCuerpoRestanteH !== null ? `(**${largoCuerpoRestanteH} pasadas**)` : ''}.\n`;
        resultado += `* **Largo de la Manga (desde Sisa a Puño):** **${finalLargoMangaCm} cm** ${largoMangaRestanteH !== null ? `(**${largoMangaRestanteH} pasadas**)` : ''}.\n`;

    // El bloque 'else' final ahora solo captura errores de campos obligatorios *realmente* faltantes.
    } else {
        resultadoDiv.innerHTML = '<p class="error">Error: Por favor, complete todos los campos obligatorios: **Puntos de Muestra** y selección de **Talla** y **Tipo de Prenda**.</p>';
        return;
    }

    resultadoDiv.innerHTML = resultado.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}
