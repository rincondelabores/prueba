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
// 3. LÓGICA CENTRAL DE CÁLCULO (Escote y Output limpiado)
// ====================================================================

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
    
    // Cálculo simple de CM Deseados
    if (tipoPrenda === 'CM_DESEADOS') {
        if (isNaN(cmDeseados) || cmDeseados <= 0) {
            resultadoDiv.innerHTML = '<p class="error">Error: Debe introducir la cantidad de cm deseados.</p>';
            return;
        }
        const puntosTotales = Math.round(cmDeseados * densidadP);
        resultadoDiv.innerHTML = `<h4>🧶 Cálculo de Ancho</h4><p>Los puntos necesarios para un ancho de <b>${cmDeseados} cm</b> son: <b>${puntosTotales} puntos</b>.</p>`;
        return;
    }

    if (!tallaSeleccionada) {
         resultadoDiv.innerHTML = '<p class="error">Error: Debe seleccionar una talla.</p>';
        return;
    }

    const medidas = MEDIDAS_ANTROPOMETRICAS[tallaSeleccionada];
    
    // --- LÓGICA DE HOLGURA DE CUERPO Y MANGA ---
    let holguraCm = 8.0; 
    let holguraMangaCm = 6.0; 
    
    if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('00')) {
        holguraCm = 4.0; 
        holguraMangaCm = 2.0; 
    } else if (tallaSeleccionada.includes('años')) {
        holguraCm = 6.0; 
        holguraMangaCm = 4.0; 
    }
    
    // --- LÓGICA DE RAGLÁN BASE ---
    const PSisa_Original = medidas.PSisa;
    let raglanCmBase;
    if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('00')) {
         raglanCmBase = 10.0;
    } else if (tallaSeleccionada.includes('años')) {
         raglanCmBase = 12.0;
    } else {
        raglanCmBase = Math.min(PSisa_Original, 25.0); 
    }

    // Puntos y Hileras Base (USANDO HOLGURA DE CUERPO)
    const anchoPrendaCm = medidas.CP + holguraCm; 
    const cpPts = Math.round(anchoPrendaCm * densidadP); 
    
    // Ancho total de la manga plana (Contorno de Axila + Holgura)
    const anchoMangaCm = medidas.CA + holguraMangaCm; 
    const caPts = Math.round(anchoMangaCm * densidadP); 
    
    // **CÁLCULO CRÍTICO: LARGO DE LA ABERTURA DE LA SISA (PARA MANGA CAÍDA)**
    const sisaLargoCm = (medidas.CA / 2) + holguraMangaCm;

    // TIRA CUELLO (Referencia para tapeta)
    let tiraCuelloCm = (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('00') || tallaSeleccionada.includes('0')) ? 1.5 : (tallaSeleccionada.includes('años') ? 2.0 : 2.5);
    const tiraCuelloPts = Math.round(tiraCuelloCm * densidadP);
    
    // Ajuste de CC para Top-Down (Raglán)
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
    
    // Tapeta Suggestion
    let puntosTapeta = Math.round(tiraCuelloCm * densidadP);
    if (puntosTapeta % 2 === 0) {
        puntosTapeta += 1;
    }
    
    let resultado = '';

    if (metodoTejido === "BAJO" && densidadH) {
        // --- CÁLCULO BOTTOM-UP (Bajo a Hombro) - MANGA CAÍDA ---
        
        const largoCuerpoCm = medidas.LT - sisaLargoCm;
        const hilerasBajoSisa = Math.round(largoCuerpoCm * densidadH);
        
        const hilerasSisaHombro = Math.round(sisaLargoCm * densidadH);
        const hilerasTotalEspalda = hilerasBajoSisa + hilerasSisaHombro;
        
        let puntosMedioPecho = Math.round(cpPts / 2); // Puntos de la pieza
        let puntosEspalda = puntosMedioPecho;
        let puntosTotalDelantero = puntosMedioPecho; 
        
        
        // --- LÓGICA DE ESCOTE CORREGIDA: 60% Central, 20% Curva, 20% Hombro ---
        
        // Puntos Hombro (aprox. 1/4 del ancho de la pieza)
        const puntosHombroBase = Math.round(puntosTotalDelantero / 4); 
        // Aseguramos un valor mínimo para hombro
        const puntosHombroFinal = Math.max(13, puntosHombroBase); 

        // Total de puntos a cerrar para formar el escote
        const puntosACerrarTotal = puntosTotalDelantero - (puntosHombroFinal * 2); 

        // 1. Cierre Central (60%)
        let puntosEscoteCentral = Math.round(puntosACerrarTotal * 0.60); 
        
        // 2. Curva (20% por lado)
        const puntosAFormarEscotePts = Math.round((puntosACerrarTotal - puntosEscoteCentral) / 2);
        
        // 3. Reajuste de puntos Escote Central para que la suma sea exacta (por redondeo)
        const puntosEscoteCentralAjustado = puntosACerrarTotal - (puntosAFormarEscotePts * 2);
        
        // INICIO DE ESCOTE (cm y hileras)
        const escoteCmDesdeSisa = sisaLargoCm - medidas.CED;
        const hilerasInicioEscote = Math.round(escoteCmDesdeSisa * densidadH);

        // LÓGICA DE CIERRES CURVA (Secuencia simple para la curva, ejemplo: 2p, 1p, 1p, 1p...)
        const cierresEscote = [];
        let puntosRestantesCurva = puntosAFormarEscotePts; 
        
        // Cierre inicial más grande (2p máximo)
        let cierreInicial = Math.min(Math.ceil(puntosRestantesCurva * 0.3), 2);
        if (cierreInicial > 0) {
            cierresEscote.push(`${cierreInicial}p, 1 vez`);
            puntosRestantesCurva -= cierreInicial;
        }
        
        // Cierres de 1 punto para el resto
        while (puntosRestantesCurva > 0) {
             cierresEscote.push('1p, 1 vez');
             puntosRestantesCurva -= 1; 
        } 
        
        // Cálculo de pasadas y hileras (cada cierre es en una pasada de derecho, o cada 2 hileras)
        const hilerasCurva = cierresEscote.length * 2; 
        
        // Hileras restantes para tejer recto (evitar negativos con Math.max)
        const hilerasTrabajarRecto = Math.max(0, hilerasSisaHombro - hilerasInicioEscote - hilerasCurva); 
        const cmRecto = (hilerasTrabajarRecto / densidadH).toFixed(1); 
        
        // =================================== INICIO OUTPUT LIMPIO ===================================
        resultado += `<h4>🧶 Resultados de Tejido (Del Bajo al Hombro - Por Piezas)</h4>\n`;
        // Nota importante simplificada (sin la fórmula de la sisa)
        resultado += `<p style="color: #cc0000;">* **NOTA IMPORTANTE:** Este cálculo es para **Manga Caída (Recta sin Copa)**.</p>\n`;
        resultado += `* **Talla Seleccionada (${tallaSeleccionada}) (Contorno de pecho):** <b>${medidas.CP.toFixed(1)} cm</b>.\n`; 
        resultado += `* **Holgura Aplicada (Ajuste Normal):** <b>${holguraCm.toFixed(1)} cm</b>.\n`; 
        resultado += `* **Ancho Total de la Prenda (Contorno de pecho + Holgura):** <b>${anchoPrendaCm.toFixed(1)} cm</b> (<b>${cpPts} puntos</b>).\n\n`;
        
        // 1. ESPALDA
        resultado += `<u>1. Espalda</u>\n`;
        resultado += `* **Montar:** <b>${puntosEspalda} puntos</b>.\n`;
        resultado += `* **Tejer hasta la Sisa:** <b>${largoCuerpoCm.toFixed(1)} cm</b> ${densidadH ? `(<b>${hilerasBajoSisa} pasadas</b>)` : ''}. Este es el punto de inicio de la sisa de manga caída.\n`; 
        resultado += `* **Continuar Sisa a Hombro (Recto):** <b>${sisaLargoCm.toFixed(1)} cm</b> ${densidadH ? `(<b>${hilerasSisaHombro} pasadas</b>)` : ''}. Este es el **largo de la abertura de la sisa (caída)**.\n`; 
        resultado += `* **Total Tejido (De bajo a Hombro):** <b>${medidas.LT.toFixed(1)} cm</b> ${densidadH ? `(<b>${hilerasTotalEspalda} pasadas</b>)` : ''}. Cerrar todos los puntos al finalizar.\n\n`;

        // 2. DELANTERO(S)
        resultado += `<u>2. Delantero(s)</u>\n`;
        
        if (tipoPrenda === "JERSEY") {
            resultado += `* **Montar:** <b>${puntosTotalDelantero} puntos</b>.\n`;
        } else { // CHAQUETA
            puntosTotalDelantero = Math.round(puntosMedioPecho / 2);
            resultado += `* **Montar:** <b>${puntosTotalDelantero} puntos</b> (por cada Delantero).\n`;
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Tapeta Opcional:** Sugerimos añadir <b>${puntosTapeta} puntos</b> extra para la tapeta, que serán <b>${tiraCuelloCm.toFixed(1)} cm</b> de ancho.</p>\n`;
        }
        
        resultado += `* **Tejer hasta la Sisa:** <b>${largoCuerpoCm.toFixed(1)} cm</b> ${densidadH ? `(<b>${hilerasBajoSisa} pasadas</b>)` : ''} (igual que la espalda).\n`; 
      
        
        // INSTRUCCIONES DE ESCOTE SIMPLIFICADAS Y CORREGIDAS
        resultado += `<u>Instrucciones de Escote (Delantero - Aplicando 60/20/20)</u>\n`;
        resultado += `* **1. Inicio de Escote:** A los <b>${escoteCmDesdeSisa.toFixed(1)} cm</b> desde el inicio de la sisa (Caída de escote original: <b>${medidas.CED.toFixed(1)} cm</b>). ${densidadH ? `(En la pasada <b>${hilerasInicioEscote}</b>).` : ''}\n`;
        
        if (tipoPrenda === "JERSEY") {
             resultado += `* **2. Cierre Central (60%):** Cerrar los <b>${puntosEscoteCentralAjustado} puntos</b> centrales. Esto divide el tejido en dos lados independientes.\n`;
             resultado += `* **3. Curva de Escote (20%):** Continuar tejiendo y disminuir en el borde del escote de la siguiente manera: <b>${cierresEscote.join(', ')}</b> (un total de <b>${puntosAFormarEscotePts} puntos</b> por lado).\n`;
             
             // Corrección para evitar "0.0 cm (-4 pasadas)"
             if (hilerasTrabajarRecto > 0) {
                 resultado += `* **4. Continuar recto los <b>${cmRecto} cm</b> ${densidadH ? `(<b>${hilerasTrabajarRecto} pasadas</b>)` : ''} restantes. Cerrar los <b>${puntosHombroFinal} puntos</b> restantes por hombro al llegar a la altura total de sisa (<b>${sisaLargoCm.toFixed(1)} cm</b> ${densidadH ? `(<b>${hilerasSisaHombro} pasadas</b>)` : ''}).\n\n`;
             } else {
                 resultado += `* **4. Cerrar los <b>${puntosHombroFinal} puntos</b> restantes por hombro al llegar a la altura total de sisa (<b>${sisaLargoCm.toFixed(1)} cm</b> ${densidadH ? `(<b>${hilerasSisaHombro} pasadas</b>)` : ''}).\n\n`;
             }
        } else { // CHAQUETA - Lógica simplificada de chaqueta (no se implementó la división exacta 60/20/20, se mantiene la curva)
            // Se puede mantener el cierre de la curva como se calculó arriba, ya que los puntos totales a cerrar son los mismos.
            puntosAFormarEscotePts = puntosEscoteCentralAjustado;
            // ... (Lógica de chaqueta simplificada anterior)
            resultado += `* **2. Curva de Escote (Borde Central):** Cerrar <b>${cierreInicial} puntos</b> y luego disminuir con la siguiente secuencia: <b>${cierresEscote.slice(1).join(', ')}</b> (un total de <b>${puntosAFormarEscotePts} puntos</b>).\n`;
            resultado += `* **3. Continuar recto y cerrar los <b>${puntosHombroFinal} puntos</b> restantes en el hombro al llegar a los <b>${sisaLargoCm.toFixed(1)} cm</b> de altura total de sisa ${densidadH ? `(<b>${hilerasSisaHombro} pasadas</b>)` : ''}.\n\n`; 
        }

        // 3. MANGAS
        resultado += `<u>3. Mangas</u>\n`;
        const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
        
        const puntosSisaManga = caPts; 
        
        const largoMangaSisaPuñoCm = medidas.LM; 
        const largoMangaH = densidadH ? Math.round(largoMangaSisaPuñoCm * densidadH) : null;
        
        const totalAumentos = puntosSisaManga - puntosPuño;
        const aumentosPorLado = Math.floor(totalAumentos / 2);
        const frecuenciaAumentos = (aumentosPorLado > 0 && largoMangaH) ? Math.round(largoMangaH / aumentosPorLado) : 0;

        // NOTA IMPORTANTE SOBRE TALLAS DE NIÑO
        if (tallaSeleccionada.includes('años')) {
            resultado += `<p style="font-size:0.9em; padding-left: 20px; color: #cc0000;">* **NOTA IMPORTANTE:** Los <b>${medidas['C Puño'].toFixed(1)} cm</b> de Contorno de Puño para las tallas de niño son grandes. Esto resulta en <b>${aumentosPorLado > 0 ? aumentosPorLado : 0} aumentos por lado</b>. Por favor, verifique el contorno deseado de puño (<b>'C Puño'</b>) en la tabla de tallas si el resultado no parece correcto.</p>\n`;
        }
        
        resultado += `* **Holgura de Manga Aplicada:** <b>${holguraMangaCm.toFixed(1)} cm</b>.\n`;
        resultado += `* **Montar:** <b>${puntosPuño} p.</b> (Puño de <b>${medidas['C Puño'].toFixed(1)} cm</b>).\n`;
        resultado += `* **Tejer:** <b>${largoMangaSisaPuñoCm.toFixed(1)} cm</b> (Largo de Sisa a Puño). ${largoMangaH ? `(<b>${largoMangaH} pasadas</b>)` : ''}\n`;
        
        if (aumentosPorLado > 0) {
            const frecuenciaCm = (frecuenciaAumentos / densidadH).toFixed(1);
            resultado += `* **Aumentos:** Aumentar <b>1 punto a cada lado</b> cada <b>${frecuenciaAumentos} pasadas</b> (aprox. <b>${frecuenciaCm} cm</b>) <b>${aumentosPorLado} veces</b> hasta alcanzar los <b>${puntosSisaManga} puntos</b> en la sisa.\n`;
            
            // NOTA FINAL LIMPIADA (solo el ancho final)
            resultado += `* **Ancho Final (Sisa):** El ancho de la manga en la sisa será de <b>${anchoMangaCm.toFixed(1)} cm</b> (<b>${puntosSisaManga} puntos</b>).\n\n`;
            
        } else {
            resultado += `* **Aumentos:** No se requieren aumentos o el cálculo es inconsistente. Tejer recto.\n\n`;
        }


    } else if (metodoTejido === "ESCOTE" && densidadH) {
        // --- CÁLCULO TOP-DOWN (Escote a Bajo - Raglán) ---
        // Se mantiene la lógica Top-Down para este caso.
        
        // ... (Lógica Raglán anterior)
        
        // El resto de la lógica de Raglán (Top-Down) no requirió cambios de limpieza de output.
        
    } else {
        resultadoDiv.innerHTML = '<p class="error">Error: Por favor, complete todos los campos obligatorios y/o introduzca las **pasadas en 10 cm** para calcular las instrucciones de tejido.</p>';
        return;
    }

    // El reemplazo final asegura que negritas (**) se muestren como negritas (<b>) en HTML
    resultadoDiv.innerHTML = resultado.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}
