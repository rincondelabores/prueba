/**
 * Lógica para la Calculadora de Puntos de Rincón de Labores
 * Incluye la Base de Datos de Tallas y la Lógica Específica para Raglán
 */

// --- 1. BASE DE DATOS DE TALLAS CON AJUSTES DE HOLGURA ---
// NOTA: Los valores se basan en las tablas proporcionadas, aplicando la holgura de comodidad al ancho del pecho.

const SIZES_DATA = {
    // --- TALLAS DE ADULTO (Holgura de 10 cm aplicada al Contorno de Tórax) ---
    adult: {
        type: 'adult',
        holguraContorno: 10,
        dropEscote: 2.5, // Ajuste para compensar tira de cuello (2.5 cm)
        holguraRaglan: 3, // Ajuste vertical para Raglan (3 cm)
        xs: { label: 'XS (32-34)', contornoFinal: 84 + 10, cuello: 33, largoSisa: 20, contornoBrazo: 27, contornoPuno: 16, largoMangaSisa: 45, largoSisaCadera: 38 },
        s: { label: 'S (36-38)', contornoFinal: 89 + 10, cuello: 34, largoSisa: 21, contornoBrazo: 29, contornoPuno: 17, largoMangaSisa: 46, largoSisaCadera: 39 },
        m: { label: 'M (40-42)', contornoFinal: 95 + 10, cuello: 35, largoSisa: 22, contornoBrazo: 31, contornoPuno: 18, largoMangaSisa: 47, largoSisaCadera: 40 },
        l: { label: 'L (42-44)', contornoFinal: 103 + 10, cuello: 36, largoSisa: 23, contornoBrazo: 33, contornoPuno: 19, largoMangaSisa: 48, largoSisaCadera: 41 },
        xl: { label: 'XL (46-48)', contornoFinal: 111 + 10, cuello: 37, largoSisa: 24, contornoBrazo: 35, contornoPuno: 20, largoMangaSisa: 49, largoSisaCadera: 42 },
        xxl: { label: 'XXL (50-52)', contornoFinal: 119 + 10, cuello: 38, largoSisa: 25, contornoBrazo: 37, contornoPuno: 21, largoMangaSisa: 49, largoSisaCadera: 43 }
    },
    // --- TALLAS DE NIÑO (Holgura promedio de 6 cm aplicada al Contorno de Tórax) ---
    child: {
        type: 'child',
        holguraContorno: 6,
        dropEscote: 2.0, // Ajuste para compensar tira de cuello (2.0 cm)
        holguraRaglan: 3, // Ajuste vertical para Raglan (3 cm)
        '2y': { label: '2 Años', contornoFinal: 58 + 6, cuello: 28, largoSisa: 13, contornoBrazo: 21, contornoPuno: 14, largoMangaSisa: 25, largoSisaCadera: 22 },
        '4y': { label: '4 Años', contornoFinal: 64 + 6, cuello: 30, largoSisa: 14, contornoBrazo: 23, contornoPuno: 15, largoMangaSisa: 29, largoSisaCadera: 26 },
        '6y': { label: '6 Años', contornoFinal: 68 + 6, cuello: 31, largoSisa: 15, contornoBrazo: 25, contornoPuno: 16, largoMangaSisa: 33, largoSisaCadera: 30 },
        '8y': { label: '8 Años', contornoFinal: 72 + 6, cuello: 32, largoSisa: 16, contornoBrazo: 27, contornoPuno: 17, largoMangaSisa: 37, largoSisaCadera: 34 },
        '10y': { label: '10 Años', contornoFinal: 76 + 6, cuello: 33, largoSisa: 17, contornoBrazo: 28, contornoPuno: 18, largoMangaSisa: 41, largoSisaCadera: 38 }
    }
};

// --- 2. SELECTORES DE ELEMENTOS DEL DOM ---
const $ = (id) => document.getElementById(id);
const $stitches = $('stitches');
const $rows = $('rows');
const $garmentType = $('garmentType');
const $customCm = $('customCm');
const $constructionMethod = $('constructionMethod');
const $size = $('size');
const $garmentPiece = $('garmentPiece');
const $calculateBtn = $('calculate-btn');
const $resetBtn = $('reset-btn');
const $errorContainer = $('error-container');
const $resultsContainer = $('results-container');

// Contenedores
const $customCmContainer = $('custom-cm-container');
const $constructionMethodContainer = $('construction-method-container');
const $sizeContainer = $('size-container');
const $garmentPieceContainer = $('garment-piece-container');

// --- 3. FUNCIONES DE UTILIDAD Y LÓGICA PRINCIPAL ---

/** Muestra un mensaje de error y oculta los resultados */
function displayError(message) {
    $errorContainer.textContent = message;
    $errorContainer.classList.remove('hidden');
    $resultsContainer.innerHTML = '';
}

/** Oculta el mensaje de error */
function clearError() {
    $errorContainer.classList.add('hidden');
    $errorContainer.textContent = '';
}

/** Limpia los resultados */
function clearResults() {
    $resultsContainer.innerHTML = '';
}

/** Genera la estructura HTML de un resultado */
function renderResult(title, content, notes = '') {
    return `
        <div class="bg-purple-50 p-6 rounded-lg shadow-xl border-t-4 border-purple-500 mb-6">
            <h3 class="text-xl font-bold text-purple-800 mb-3">${title}</h3>
            <div class="text-3xl font-extrabold text-pink-600">${content}</div>
            ${notes ? `<p class="mt-4 text-sm text-gray-600 border-l-2 border-gray-400 pl-3">${notes}</p>` : ''}
        </div>
    `;
}

/** Genera el CTA de Rincón de labores */
function renderCTA() {
    return `
        <div class="text-center mt-6 p-4 bg-pink-100 rounded-lg border-2 border-pink-300">
            <p class="text-lg text-pink-700 font-bold">
                ¡Comparte tu creación!
            </p>
            <p class="text-gray-600 mt-1">
                Nos encantaría ver tu proyecto terminado. Sube una foto a Instagram y etiquétanos 
                <a href="https://www.instagram.com/rincondlabores/" target="_blank" rel="noopener noreferrer" class="text-purple-600 font-semibold hover:underline">
                    @rincondlabores
                </a>.
            </p>
        </div>
    `;
}

/** Lógica de Cálculo Principal */
function calculate() {
    clearError();
    clearResults();

    const stitches = parseFloat($stitches.value);
    const rows = parseFloat($rows.value) || 0; // rows es opcional
    const garmentType = $garmentType.value;
    const constructionMethod = $constructionMethod.value;
    const sizeKey = $size.value;
    const garmentPiece = $garmentPiece.value;
    const customCm = parseFloat($customCm.value);

    // Validación inicial de la muestra
    if (isNaN(stitches) || stitches <= 0) {
        displayError('🚨 Por favor, introduce un valor válido para "Puntos en 10 cm" (Muestra de Tensión).');
        return;
    }

    const stitchesPerCm = stitches / 10;
    const rowsPerCm = rows / 10;

    let htmlOutput = '';

    // --- CÁLCULO PERSONALIZADO (Medida en cm deseados) ---
    if (garmentType === 'custom') {
        if (isNaN(customCm) || customCm <= 0) {
            displayError('🚨 Por favor, introduce los "Centímetros Deseados" para el cálculo personalizado.');
            return;
        }

        const requiredStitches = Math.round(customCm * stitchesPerCm);
        
        htmlOutput += renderResult(
            'Resultado Personalizado',
            `${requiredStitches} puntos`,
            `Para un ancho de ${customCm} cm, necesitas montar ${requiredStitches} puntos.`
        );

        if (rows > 0) {
            const requiredRows = Math.round(customCm * rowsPerCm);
            htmlOutput += renderResult(
                'Pasadas por Centímetro (Recomendado)',
                `${requiredRows} pasadas/vueltas`,
                `Para una altura de ${customCm} cm, necesitas tejer ${requiredRows} pasadas/vueltas.`
            );
        }

        $resultsContainer.innerHTML = htmlOutput + renderCTA();
        return;
    }

    // --- CÁLCULO CON TALLAS ESTÁNDAR ---
    if (!sizeKey || !constructionMethod || !garmentPiece) {
        displayError('🚨 Por favor, completa la selección de Talla, Método y Pieza para calcular la prenda.');
        return;
    }

    // Determinar el grupo de tallas
    const sizeGroup = SIZES_DATA.adult.hasOwnProperty(sizeKey) ? SIZES_DATA.adult : SIZES_DATA.child;
    const sizeData = sizeGroup[sizeKey];
    const commonData = sizeGroup;
    const isAdult = commonData.type === 'adult';

    // --- TOP-DOWN (RAGLÁN) LÓGICA ---
    if (constructionMethod === 'top-down') {
        htmlOutput = calculateTopDown(sizeData, commonData, stitchesPerCm, rowsPerCm, garmentType, garmentPiece);
    } else {
        // La lógica de Bottom-Up Set-in puede ser añadida aquí si es requerida más tarde.
        // Por ahora, nos enfocamos en el Raglán Top-Down según la última actualización de datos.
        displayError('⚠️ El método "Tejido por piezas" (Bottom-Up) aún está en desarrollo. Por favor, selecciona el método "Empezar por el escote" (Raglán) para ver los cálculos completos basados en tus tablas.');
        return;
    }

    $resultsContainer.innerHTML = htmlOutput + renderCTA();
}

/**
 * Lógica específica para Raglán Top-Down.
 */
function calculateTopDown(sizeData, commonData, stitchesPerCm, rowsPerCm, garmentType, garmentPiece) {
    let output = '';

    // 1. CÁLCULO DE PUNTOS A MONTAR (CUERPO COMPLETO)
    const puntosCuello = Math.round(sizeData.cuello * stitchesPerCm);
    output += renderResult(
        '1. Puntos a Montar (Cuello)',
        `${puntosCuello} puntos`,
        `Esta es la cantidad de puntos que debes montar inicialmente para el contorno de tu cuello.`
    );

    // 2. DISTRIBUCIÓN INICIAL DE PUNTOS
    const puntosRaglanFijos = 8; // 2 puntos por línea de raglán x 4 líneas
    const restantes = puntosCuello - puntosRaglanFijos;
    let puntosEspalda = Math.round(restantes / 3);
    let puntosDelanteroTotal = restantes - puntosEspalda; // Delantero + 2 Mangas

    // El resto se divide entre Delantero y Mangas. Para Raglán, la distribución suele ser: 1/3 Espalda, 1/3 Delantero, 1/6 cada manga)
    
    // Reparto Clásico (1/3, 1/3, 1/6, 1/6)
    puntosEspalda = Math.round(restantes / 3);
    let puntosDelantero = puntosEspalda; // 1/3
    const puntosRestantesParaMangas = restantes - puntosEspalda - puntosDelantero;
    let puntosManga = Math.round(puntosRestantesParaMangas / 2); // 1/6 cada manga
    
    // Ajuste final por si el redondeo dejó puntos sobrantes (los asignamos a la espalda)
    const totalRepartido = puntosEspalda + puntosDelantero + (puntosManga * 2) + puntosRaglanFijos;
    puntosEspalda += puntosCuello - totalRepartido; 

    // Adaptación para Chaqueta (Cárdigan)
    if (garmentType === 'chaqueta') {
        puntosDelantero = Math.round(puntosDelantero / 2); // Dividido en dos frentes
    }

    let distribucionNota = `
        **Espalda:** ${puntosEspalda} puntos<br>
        **Línea Raglán (x4):** ${puntosRaglanFijos / 4} puntos cada una<br>
        **Mangas (x2):** ${puntosManga} puntos cada una<br>
        ${garmentType === 'jersey' 
            ? `**Delantero:** ${puntosDelantero} puntos` 
            : `**Delantero (x2):** ${puntosDelantero} puntos (Cada lado)`
        }
    `;

    if (garmentType === 'chaqueta') {
        distribucionNota += `<br><span class="font-bold text-red-700">¡ATENCIÓN CHAQUETA!</span> Recuerda añadir los puntos necesarios para la tapeta de botones a cada lado del Delantero (Generalmente unos 5-8 puntos extra).`;
    }

    output += renderResult(
        '2. Distribución Inicial de Puntos',
        `Total ${puntosCuello} puntos repartidos`,
        distribucionNota
    );

    // 3. CÁLCULO DE LA LÍNEA RAGLÁN Y AUMENTOS
    const raglanCmFinal = sizeData.largoSisa + commonData.holguraRaglan; // Largo de Sisa + 3 cm de holgura vertical
    const raglanRowsFinal = (rows > 0) ? Math.round(raglanCmFinal * rowsPerCm) : 'N/A';
    
    // Puntos finales del cuerpo y mangas en la sisa
    const contornoTotalCuerpo = sizeData.contornoFinal - (sizeData.contornoBrazo * 2); // Pecho - Ambos Brazos
    const anchoFinalEspaldaDelantero = Math.round(contornoTotalCuerpo * stitchesPerCm);
    const puntosFinalBrazo = Math.round(sizeData.contornoBrazo * stitchesPerCm);

    // Aumentos necesarios para llegar al ancho final de la sisa (ej: Espalda)
    const aumentosNecesariosPorLado = Math.round((anchoFinalEspaldaDelantero / 2 - puntosEspalda) / 2); // Aumentos por línea de raglán

    output += renderResult(
        '3. Guía para Aumentos Raglán',
        `Altura final de Raglán: ${raglanCmFinal} cm${rows > 0 ? ` (${raglanRowsFinal} hileras)` : ''}`,
        `
            Debes aumentar **${aumentosNecesariosPorLado} puntos en cada lado** de la espalda y delantero, y un total de **${puntosFinalBrazo - puntosManga} puntos en cada manga**.<br>
            ${rows > 0 
                ? `Sugerencia: Reparte los aumentos para realizar 1 aumento doble (antes y después de las líneas Raglán) aproximadamente cada **${Math.floor(raglanRowsFinal / aumentosNecesariosPorLado)} hileras** hasta alcanzar los ${raglanCmFinal} cm de altura.`
                : 'TIP: Realiza aumentos en las vueltas del derecho hasta que la línea Raglán mida un total de aproximadamente ' + raglanCmFinal + ' cm.'
            }
        `
    );

    // 4. GUÍA DE DISMINUCIONES DE MANGA (Si se selecciona Mangas)
    if (garmentPiece === 'mangas') {
        const totalDisminuciones = puntosFinalBrazo - Math.round(sizeData.contornoPuno * stitchesPerCm);
        const largoMangaRows = (rows > 0) ? Math.round(sizeData.largoMangaSisa * rowsPerCm) : 'N/A';
        const frecuencia = (rows > 0 && totalDisminuciones > 0) ? Math.floor(largoMangaRows / (totalDisminuciones)) : 'N/A';

        output += renderResult(
            '4. Disminuciones en la Manga',
            `Total: ${totalDisminuciones} disminuciones por manga`,
            `
                Para ir desde la sisa hasta el puño necesitas disminuir **${totalDisminuciones} puntos** en total en el largo de ${sizeData.largoMangaSisa} cm.<br>
                ${rows > 0 
                    ? `Sugerencia: Haz 1 disminución a cada lado de la manga aproximadamente cada **${frecuencia * 2} hileras** para repartir los puntos de forma uniforme.`
                    : 'TIP: Realiza las disminuciones distribuidas uniformemente en la longitud de la manga, especialmente al inicio y justo antes del puño.'
                }
            `
        );
    }

    // 5. NOTA CLAVE DE ALTURA DEL ESCOTE
    const alturaSisaCaderaRows = (rows > 0) ? Math.round(sizeData.largoSisaCadera * rowsPerCm) : 'N/A';
    const alturaEscoteFinal = sizeData.largoSisaCadera + commonData.dropEscote;

    output += renderResult(
        '5. Altura de Cuerpo y Escote',
        `Altura de Sisa a Cadera: ${sizeData.largoSisaCadera} cm${rows > 0 ? ` (${alturaSisaCaderaRows} hileras)` : ''}`,
        `
            Una vez separados el cuerpo y las mangas, teje el cuerpo hasta la altura deseada.<br>
            **AJUSTE DE ESCOTE:** La altura del escote delantero debe ser **${commonData.dropEscote} cm más baja** que el escote trasero para compensar la tira del cuello y el ajuste.
        `
    );
    return output;
}

// --- 4. GESTIÓN DE EVENTOS Y LÓGICA DE INTERFAZ ---

/** Llena el select de tallas en función del tipo de prenda */
function populateSizeOptions() {
    const options = [
        '<option value="" disabled selected>Elige una talla...</option>',
        `<optgroup label="Adultos (Recomendado)"></optgroup>`
    ];
    
    // Adult sizes
    for (const key in SIZES_DATA.adult) {
        if (key !== 'type' && key !== 'holguraContorno' && key !== 'dropEscote' && key !== 'holguraRaglan') {
            options.push(`<option value="${key}">${SIZES_DATA.adult[key].label}</option>`);
        }
    }

    options.push(`<optgroup label="Niños"></optgroup>`);
    // Child sizes
    for (const key in SIZES_DATA.child) {
        if (key !== 'type' && key !== 'holguraContorno' && key !== 'dropEscote' && key !== 'holguraRaglan') {
            options.push(`<option value="${key}">${SIZES_DATA.child[key].label}</option>`);
        }
    }

    $size.innerHTML = options.join('');
}

/** Gestiona la visibilidad de los campos en el Paso 2 */
function handleGarmentTypeChange() {
    const type = $garmentType.value;
    clearResults();
    clearError();

    // Resetear valores
    $customCm.value = '';
    $constructionMethod.value = '';
    $size.value = '';
    $garmentPiece.value = '';
    
    // Ocultar todos los campos de talla
    $customCmContainer.classList.add('hidden');
    $constructionMethodContainer.classList.add('hidden');
    $sizeContainer.classList.add('hidden');
    $garmentPieceContainer.classList.add('hidden');

    if (type === 'custom') {
        $customCmContainer.classList.remove('hidden');
    } else if (type === 'jersey' || type === 'chaqueta') {
        populateSizeOptions();
        $constructionMethodContainer.classList.remove('hidden');
        $sizeContainer.classList.remove('hidden');
        $garmentPieceContainer.classList.remove('hidden');
    }
}

/** Inicializa la aplicación */
document.addEventListener('DOMContentLoaded', () => {
    $garmentType.addEventListener('change', handleGarmentTypeChange);
    $calculateBtn.addEventListener('click', calculate);
    $resetBtn.addEventListener('click', () => {
        document.querySelector('form')?.reset();
        $stitches.value = '';
        $rows.value = '';
        $garmentType.value = '';
        handleGarmentTypeChange();
        clearResults();
        clearError();
    });
});
