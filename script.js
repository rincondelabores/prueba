// ====================================================================
// 1. DATOS Y MEDIDAS ANTROPOMÉTRICAS (AJUSTADAS)
// ====================================================================

const MEDIDAS_ANTROPOMETRICAS = {
    // Tallas de Bebé (LM y LT Ajustados)
    '00 (Prematuro)': { CP: 37, CC: 20.0, CA: 10.5, 'C Puño': 9.0, LT: 26, LM: 17, PSisa: 8.0, AE: 15.5, CED: 3.0 },
    '0 meses': { CP: 39, CC: 21.0, CA: 11.5, 'C Puño': 9.5, LT: 27, LM: 18, PSisa: 9.0, AE: 16.5, CED: 3.5 }, 
    '1-3 meses': { CP: 41, CC: 22.0, CA: 12.5, 'C Puño': 10.0, LT: 28, LM: 20, PSisa: 9.5, AE: 17.5, CED: 3.5 },
    '3-6 meses': { CP: 44, CC: 23.0, CA: 13.5, 'C Puño': 10.5, LT: 29, LM: 23, PSisa: 10.0, AE: 18.5, CED: 4.0 },
    '6-12 meses': { CP: 47, CC: 24.0, CA: 14.5, 'C Puño': 11.0, LT: 33, LM: 26, PSisa: 10.5, AE: 19.5, CED: 4.5 },
    '12-18 meses': { CP: 50, CC: 25.0, CA: 15.5, 'C Puño': 11.5, LT: 36, LM: 29, PSisa: 11.0, AE: 20.5, CED: 5.0 },
    '18-24 meses': { CP: 53, CC: 26.0, CA: 16.5, 'C Puño': 12.0, LT: 39, LM: 31, PSisa: 11.5, AE: 21.5, CED: 5.5 },
    
    // Tallas de Niños
    '3 años': { CP: 56, CC: 27.0, CA: 17.5, 'C Puño': 13.0, LT: 40, LM: 33, PSisa: 12.0, AE: 24.0, CED: 6.0 },
    '4 años': { CP: 60, CC: 28.0, CA: 18.5, 'C Puño': 13.5, LT: 42, LM: 36, PSisa: 12.5, AE: 25.0, CED: 6.2 },
    '6 años': { CP: 64, CC: 29.5, CA: 19.5, 'C Puño': 14.0, LT: 46, LM: 40, PSisa: 13.5, AE: 27.0, CED: 6.5 },
    '8 años': { CP: 70, CC: 31.0, CA: 21.0, 'C Puño': 14.5, LT: 50, LM: 45, PSisa: 14.5, AE: 29.0, CED: 6.8 },
    '10 años': { CP: 76, CC: 32.5, CA: 22.5, 'C Puño': 15.0, LT: 54, LM: 49, PSisa: 15.5, AE: 31.0, CED: 7.0 },
    
    // Tallas de Mujer (Adulto)
    '36': { CP: 84, CC: 36.0, CA: 26.0, 'C Puño': 20.0, LT: 58, LM: 58.5, PSisa: 19.0, AE: 33.0, CED: 7.5 },
    '38': { CP: 88, CC: 37.0, CA: 27.5, 'C Puño': 20.5, LT: 59, LM: 59.0, PSisa: 19.8, AE: 34.0, CED: 7.8 },
    '40': { CP: 92, CC: 38.0, CA: 29.0, 'C Puño': 21.0, LT: 60, LM: 60.0, PSisa: 20.6, AE: 35.0, CED: 8.0 },
    '42': { CP: 98, CC: 39.5, CA: 31.0, 'C Puño': 22.0, LT: 61, LM: 60.5, PSisa: 21.9, AE: 36.5, CED: 8.3 },
    '44': { CP: 104, CC: 41.0, CA: 33.0, 'C Puño': 23.0, LT: 62, LM: 61.0, PSisa: 23.2, AE: 38.0, CED: 8.6 },
    '46': { CP: 110, CC: 42.5, CA: 36.0, 'C Puño': 24.0, LT: 63, LM: 61.5, PSisa: 24.5, AE: 39.5, CED: 9.0 },
    '48': { CP: 118, CC: 44.5, CA: 38.0, 'C Puño': 25.5, LT: 64, LM: 62.0, PSisa: 26.0, AE: 41.5, CED: 9.3 },
    '50': { CP: 126, CC: 46.5, CA: 40.0, 'C Puño': 27.0, LT: 65, LM: 62.0, PSisa: 27.5, AE: 43.5, CED: 9.6 }
};

const ORDEN_TALLAS = {
    'Bebé (Prematuro a 24m)': ['00 (Prematuro)', '0 meses', '1-3 meses', '3-6 meses', '6-12 meses', '12-18 meses', '18-24 meses'],
    'Niños (3 a 10 años)': ['3 años', '4 años', '6 años', '8 años', '10 años'],
    'Adulto (36 a 50)': ['36', '38', '40', '42', '44', '46', '48', '50']
};


// ====================================================================
// 2. FUNCIONES DE UTILIDAD Y LÓGICA DE INTERFAZ
// ====================================================================

/**
 * Rellena el select de tallas. (Corregido)
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
            // Usa 'in' o hasOwnProperty para verificar la clave
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

// Inicialización de funciones al cargar el DOM (Asegura que el select existe)
document.addEventListener('DOMContentLoaded', () => {
    poblarTallas();
    const tipoPrendaSelect = document.getElementById('tipo_prenda');
    if (tipoPrendaSelect) {
        tipoPrendaSelect.addEventListener('change', manejarVisibilidadCampos);
    }
    manejarVisibilidadCampos();
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
    
    // TIRA CUELLO (Referencia para tapeta)
    let tiraCuelloCm;
    if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('00') || tallaSeleccionada.includes('0')) {
        tiraCuelloCm = 1.5;
    } else if (tallaSeleccionada.includes('años')) {
        tiraCuelloCm = 2.0;
    } else {
        tiraCuelloCm = 2.5;
    }

    // Puntos y Hileras Base
    const cpPts = Math.round(medidas.CP * densidadP);
    const caPts = Math.round(medidas.CA * densidadP);
    
    // Ajuste de CC para Top-Down (Raglán) para cuello más holgado
    let ccAjustadoCm = medidas.CC;
    if (metodoTejido === "ESCOTE") {
        if (tallaSeleccionada.includes('meses') || tallaSeleccionada.includes('años')) {
             // Bebé/Niño: Margen pequeño para cabeza
             ccAjustadoCm = medidas.CC + 5; 
        } else {
             // Adulto: Margen más grande para pasar la cabeza
             ccAjustadoCm = medidas.CC + 10; 
        }
    }
    const ccPts = Math.round(ccAjustadoCm * densidadP);
    
    const tiraCuelloPts = Math.round(tiraCuelloCm * densidadP);
    
    // Tapeta Suggestion (Calculada y redondeada al siguiente impar)
    let puntosTapeta = Math.round(tiraCuelloCm * densidadP);
    if (puntosTapeta % 2 === 0) {
        puntosTapeta += 1; // Asegura que los puntos de la tapeta sean impares
    }
    
    let resultado = '';

    if (metodoTejido === "BAJO" && densidadH) {
        // --- CÁLCULO BOTTOM-UP (Bajo a Hombro) ---
        
        const largoCuerpoCm = medidas.LT - medidas.PSisa;
        const largoMangaCm = medidas.LM;
        
        // Espalda
        const hilerasBajoSisa = Math.round(largoCuerpoCm * densidadH);
        const hilerasSisaHombro = Math.round(medidas.PSisa * densidadH);
        const hilerasTotalEspalda = hilerasBajoSisa + hilerasSisaHombro;
        
        let puntosMedioPecho = Math.round(cpPts / 2);
        let puntosEspalda = puntosMedioPecho;
        let puntosTotalDelantero; // Puntos *sin* la tapeta
        
        let puntosACerrarBase = Math.round(medidas.CC * 0.75 * densidadP); // Usar CC original para el cierre de cuello
        const escoteCmDesdeSisa = medidas.PSisa - medidas.CED;
        const hilerasInicioEscote = Math.round(escoteCmDesdeSisa * densidadH);
        
        if (tipoPrenda === "CHAQUETA") {
            puntosTotalDelantero = Math.round(puntosMedioPecho / 2);
            puntosACerrarBase = Math.round(puntosACerrarBase / 2);
        } else { // JERSEY
            puntosTotalDelantero = puntosMedioPecho;
        }

        resultado += `<h4>🧶 Resultados de Tejido (Bajo a Escote - Por Piezas) ${indicacionH}</h4>\n`;
        // Referencia de Talla
        resultado += `* **Talla Seleccionada (Ancho de Busto):** **${medidas.CP} cm**.\n\n`;
        
        // 1. ESPALDA
        resultado += `<u>1. Espalda</u>\n`;
        resultado += `* **Puntos de Montaje:** **${puntosEspalda} puntos**.\n`;
        resultado += `* **Pasadas Bajo a Sisa:** **${hilerasBajoSisa} pasadas** (**${largoCuerpoCm.toFixed(1)} cm**).\n`;
        resultado += `* **Pasadas Sisa a Hombro:** **${hilerasSisaHombro} pasadas** (**${medidas.PSisa.toFixed(1)} cm**).\n`;
        resultado += `* **Total Pasadas (Bajo a Hombro):** **${hilerasTotalEspalda} pasadas** (**${medidas.LT.toFixed(1)} cm**).\n\n`;

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

        resultado += `<u>2. Delantero(s)</u>\n`;
        
        if (tipoPrenda === "JERSEY") {
            resultado += `* **Puntos de Montaje:** **${puntosTotalDelantero} puntos**.\n`;
        } else { 
            resultado += `* **Puntos de Montaje (Base):** **${puntosTotalDelantero} puntos** (por cada Delantero).\n`;
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Opción Tapeta:** Si deseas añadir una tapeta de **${tiraCuelloCm.toFixed(1)} cm** de ancho, te sugerimos añadir **${puntosTapeta} puntos** *adicionales* al inicio de cada Delantero. </p>\n`;
        }
        
        resultado += `* **Pasadas Bajo a Sisa:** **${hilerasBajoSisa} pasadas** (**${largoCuerpoCm.toFixed(1)} cm**).\n`;
        resultado += `* **Pasadas Sisa a Hombro:** **${hilerasSisaHombro} pasadas** (**${medidas.PSisa.toFixed(1)} cm**).\n`;

        resultado += `<u>Instrucciones de Escote (a partir de ${hilerasInicioEscote} pasadas de Sisa)</u>\n`;
        
        if (tipoPrenda === "JERSEY") {
            resultado += `* **Cierre Central:** En la pasada siguiente al inicio del escote, cerrar los **${puntosACerrarBase} puntos** centrales. Esto divide el tejido en dos lados independientes.\n`;
            resultado += `* **Puntos Restantes por Lado (Hombro):** **${puntosHombro} puntos**.\n\n`;
            
            resultado += `<u>Cierre de Hombros (Pendiente)</u>\n`;
            
            if (hilerasTrabajarAntesHombro > 0) {
                 resultado += `* **Trabajo Plano:** Trabajar recto (sin disminuciones) durante **${hilerasTrabajarAntesHombro} pasadas** hasta que queden ${hilerasCierreHombro} pasadas para terminar la sisa.\n`;
            } else {
                 resultado += `* **Nota:** El cierre del hombro comienza inmediatamente.\n`;
            }
            
            resultado += `* **Cierre Final:** Para dar pendiente, cerrar los **${puntosHombro} puntos** restantes en ${tramosCierreHombro} tramos iguales, en las últimas ${hilerasCierreHombro} pasadas. \n`;
            resultado += `  * **Tramo de Cierre:** Cerrar en el borde de la sisa: **${cierreHombroStr} puntos**.\n\n`;
            
        } else { // CHAQUETA
            resultado += `* **Inicio de Escote (desde Sisa):** Empezar a dar forma al escote a las **${hilerasInicioEscote} pasadas**.\n`;
            resultado += `* **Puntos a Cerrar (Escote):** **${puntosACerrarBase} puntos** (por cada delantero, para dar forma al escote).\n`;
            
            resultado += `  * **NOTA Tapeta:** Si has añadido **${puntosTapeta} puntos** para la tapeta, ciérralos *adicionalmente* al llegar al borde final del escote. (Los puntos del hombro restantes son **${puntosHombro}** por delantero).\n\n`;
        }

        // 3. MANGAS
        resultado += `<u>3. Mangas</u>\n`;
        const puntosPuño = Math.round(medidas['C Puño'] * densidadP);
        const puntosSisaManga = caPts; 
        const largoMangaH = Math.round(medidas.LM * densidadH);
        
        const totalAumentos = puntosSisaManga - puntosPuño;
        const aumentosPorLado = Math.floor(totalAumentos / 2);
        const frecuenciaAumentos = (aumentosPorLado > 0) ? Math.round(largoMangaH / aumentosPorLado) : 0;
        
        resultado += `* **Puntos de Montaje (Puño):** **${puntosPuño} puntos**.\n`;
        resultado += `* **Puntos a alcanzar en la Sisa:** **${puntosSisaManga} puntos**.\n`;
        
        resultado += `* **Pasadas Total (Puño a Hombro):** **${largoMangaH} pasadas** (**${largoMangaCm.toFixed(1)} cm**).\n`;

        if (frecuenciaAumentos > 0) {
            resultado += `* **Indicación de Aumentos:** Aumentar 1 punto a cada lado cada **${frecuenciaAumentos} pasadas** (${aumentosPorLado} veces) hasta alcanzar los puntos de sisa.\n\n`;
        } else {
            resultado += `* **Indicación de Aumentos:** No se requieren aumentos (la medida inicial es suficiente).\n\n`;
        }

        // 4. TIRA DE CUELLO
        resultado += `<u>4. Tira de Cuello</u>\n`;
        resultado += `* **Puntos a Recoger/Montar (aprox.):** **${Math.round(medidas.CC * 0.9 * densidadP)} puntos** (90% del contorno cuello original).\n`;
        resultado += `* **Ancho de la Tira de Cuello:** ${tiraCuelloCm} cm, lo que equivale a **${tiraCuelloPts} puntos** (tejer y coser/recoger).\n`;

    } else if (metodoTejido === "ESCOTE" && densidadH) {
        // --- CÁLCULO TOP-DOWN (Escote a Bajo - Raglán) ---
        const profundidadSisaH = Math.round(medidas.PSisa * densidadH);
        const largoTotalH = Math.round(medidas.LT * densidadH);
        const largoMangaH = Math.round(medidas.LM * densidadH);
        
        resultado += `<h4>🧶 Resultados de Tejido desde el Escote ${indicacionH}</h4>\n`;
        // Referencia de Talla
        resultado += `* **Talla Seleccionada (Ancho de Busto):** **${medidas.CP} cm**.\n\n`;

        // 1. REPARTO INICIAL
        // Usamos el CC AJUSTADO (que ya incluye margen de holgura)
        const puntosMontaje = Math.round(ccPts * 0.95); 
        const puntosBase = puntosMontaje - 4; 
        
        const pEspalda = Math.round(puntosBase * 0.33);
        const pManga = Math.round((puntosBase * 0.33) / 2); 
        let pDelanteroBase = puntosBase - pEspalda - (pManga * 2);
        
        let repartoStr;
        if (tipoPrenda === "JERSEY") {
            repartoStr = `**${pEspalda} p** (Espalda), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pDelanteroBase} p** (Delantero), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador).`;
        } else { // CHAQUETA
            const pDelanteroParte = Math.round(pDelanteroBase / 2);
            
            repartoStr = `**${pDelanteroParte} p** (Del. 1), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pEspalda} p** (Espalda), **1 p** (Marcador), **${pManga} p** (Manga), **1 p** (Marcador), **${pDelanteroParte} p** (Del. 2).`;
            
            resultado += `<p style="font-size:0.9em; padding-left: 20px;">* **Opción Tapeta:** Si deseas añadir una tapeta de **${tiraCuelloCm.toFixed(1)} cm** de ancho, te sugerimos montar **${puntosTapeta} puntos** *adicionales* a cada lado antes de comenzar el reparto, o tejerla después.</p>\n`;
        }
        
        resultado += `<u>1. Tira de Cuello y Reparto Inicial</u>\n`;
        resultado += `* **Puntos Totales de Montaje:** **${puntosMontaje} puntos**.\n`;
        resultado += `* **Instrucción de Cuello:** Tejer **${tiraCuelloPts} pasadas** (**${tiraCuelloCm.toFixed(1)} cm**) con los puntos de montaje para formar la tira del cuello.\n`;
        resultado += `* **Reparto (4 puntos marcados para el Raglán):** ${repartoStr}\n\n`;

        // 2. AUMENTOS RAGLÁN
        const puntosAAumentarManga = Math.round(caPts * 1.15) - pManga; 
        const hilerasRaglan = Math.round((puntosAAumentarManga / 2) * 2); 
        const raglanCmFinal = (densidadH > 0) ? (hilerasRaglan / densidadH).toFixed(1) : (medidas.PSisa * 1.1).toFixed(1);
        
        const puntosAnadirSisaPts = Math.round((medidas.PSisa / 2) * densidadP);

        resultado += `<u>2. Aumentos y Separación</u>\n`;
        resultado += `* **Largo de Línea Raglán Deseado:** Aprox. **${raglanCmFinal} cm** (**${hilerasRaglan} pasadas**).\n`;
        resultado += `* **Instrucción de Aumentos:** Aumentar 1 punto a cada lado de los 4 marcadores (8 aumentos total) cada **2 pasadas** hasta completar **${hilerasRaglan} pasadas**.\n`;
        resultado += `* **Puntos a Añadir en la Sisa:** Al separar las mangas, añadir **${puntosAnadirSisaPts} puntos** (montados o recogidos) bajo cada sisa.\n\n`;
        
        // 3. LARGOS FINALES
        const largoCuerpoCm = medidas.LT - medidas.PSisa;
        const largoCuerpoRestanteH = Math.round(largoCuerpoCm * densidadH);
        
        const largoMangaCm = medidas.LM - parseFloat(raglanCmFinal); 
        const largoMangaRestanteH = Math.round(largoMangaCm * densidadH);

        const finalLargoCuerpoCm = largoCuerpoCm > 0 ? largoCuerpoCm.toFixed(1) : 0;
        const finalLargoMangaCm = largoMangaCm > 0 ? largoMangaCm.toFixed(1) : 0;
        
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
