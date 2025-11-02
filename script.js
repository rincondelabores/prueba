document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS Y CONSTANTES ---
    const SIZES = [
      // Bebés (SIN CAMBIOS)
      { id: 'preemie', label: 'Prematuro (00)', chestContour: 35, totalLength: 18, sleeveLength: 11, cuffContour: 11, upperArmContour: 13, armholeDepth: 7, backWidth: 17.5, neckContour: 19, armholeStartHeight: 11, raglanLength: 9, finalFrontNeckDrop: 4, backNeckDrop: 1.5 },
      { id: 'newborn', label: 'Recién Nacido (0 meses)', chestContour: 40, totalLength: 20, sleeveLength: 13, cuffContour: 13, upperArmContour: 15, armholeDepth: 8, backWidth: 20, neckContour: 22, armholeStartHeight: 12, raglanLength: 10, finalFrontNeckDrop: 4.5, backNeckDrop: 1.5 },
      { id: '1-3m', label: '1-3 Meses', chestContour: 44, totalLength: 24, sleeveLength: 15, cuffContour: 14, upperArmContour: 16.5, armholeDepth: 9, backWidth: 22, neckContour: 23, armholeStartHeight: 15, raglanLength: 11, finalFrontNeckDrop: 4.5, backNeckDrop: 1.5 },
      { id: '3-6m', label: '3-6 Meses', chestContour: 46, totalLength: 28, sleeveLength: 17, cuffContour: 14.5, upperArmContour: 17.5, armholeDepth: 10, backWidth: 23, neckContour: 24, armholeStartHeight: 18, raglanLength: 12.5, finalFrontNeckDrop: 5, backNeckDrop: 2 },
      { id: '6-9m', label: '6-9 Meses', chestContour: 48, totalLength: 30, sleeveLength: 19, cuffContour: 15, upperArmContour: 18, armholeDepth: 11, backWidth: 24, neckContour: 25, armholeStartHeight: 19, raglanLength: 13.5, finalFrontNeckDrop: 5, backNeckDrop: 2 },
      { id: '9-12m', label: '9-12 Meses', chestContour: 50, totalLength: 32, sleeveLength: 21, cuffContour: 15.5, upperArmContour: 19, armholeDepth: 12, backWidth: 25, neckContour: 26, armholeStartHeight: 20, raglanLength: 15, finalFrontNeckDrop: 5.5, backNeckDrop: 2 },
      { id: '12-18m', label: '12-18 Meses', chestContour: 52, totalLength: 34, sleeveLength: 23, cuffContour: 16, upperArmContour: 20, armholeDepth: 13, backWidth: 26, neckContour: 27, armholeStartHeight: 21, raglanLength: 16, finalFrontNeckDrop: 5.5, backNeckDrop: 2 },
      
      // Niños (ACTUALIZADO con medidas de 2, 4, 6, 8, 10 años)
      // 18-24m (2 años)
      { id: '18-24m', label: '18-24 Meses (2 años)', chestContour: 56.5, totalLength: 35, sleeveLength: 25, cuffContour: 14, upperArmContour: 21, armholeDepth: 13, backWidth: 28.25, neckContour: 28, armholeStartHeight: 22, raglanLength: 16.5, finalFrontNeckDrop: 6, backNeckDrop: 2 },
      
      // 3y (Se mantienen los valores originales al no haber sido proporcionados)
      { id: '3y', label: '3 Años', chestContour: 62, totalLength: 40, sleeveLength: 28, cuffContour: 17, upperArmContour: 22.5, armholeDepth: 15, backWidth: 31, neckContour: 29, armholeStartHeight: 25, raglanLength: 18.5, finalFrontNeckDrop: 6.5, backNeckDrop: 2 },
      
      // 4y
      { id: '4y', label: '4 Años', chestContour: 62, totalLength: 40, sleeveLength: 29, cuffContour: 15, upperArmContour: 23, armholeDepth: 14, backWidth: 31, neckContour: 30, armholeStartHeight: 26, raglanLength: 18.0, finalFrontNeckDrop: 6.5, backNeckDrop: 2 },
      
      // 6y
      { id: '6y', label: '6 Años', chestContour: 66, totalLength: 45, sleeveLength: 33, cuffContour: 16, upperArmContour: 25, armholeDepth: 15, backWidth: 33, neckContour: 31, armholeStartHeight: 30, raglanLength: 19.5, finalFrontNeckDrop: 7, backNeckDrop: 2.5 },
      
      // 8y
      { id: '8y', label: '8 Años', chestContour: 69.5, totalLength: 50, sleeveLength: 37, cuffContour: 17, upperArmContour: 27, armholeDepth: 16, backWidth: 34.75, neckContour: 32, armholeStartHeight: 34, raglanLength: 21.0, finalFrontNeckDrop: 7, backNeckDrop: 2.5 },
      
      // 10y
      { id: '10y', label: '10 Años', chestContour: 73, totalLength: 55, sleeveLength: 41, cuffContour: 18, upperArmContour: 28, armholeDepth: 17, backWidth: 36.5, neckContour: 33, armholeStartHeight: 38, raglanLength: 22.5, finalFrontNeckDrop: 7.5, backNeckDrop: 2.5 },

      // Adultos (ACTUALIZADO con nuevos datos)
      // XS
      { id: 'xs', label: 'XS (32-34)', chestContour: 82, totalLength: 58, sleeveLength: 45, cuffContour: 16, upperArmContour: 27, armholeDepth: 20, backWidth: 41, neckContour: 33, armholeStartHeight: 38, raglanLength: 20, finalFrontNeckDrop: 8, backNeckDrop: 2.5 },
      
      // S
      { id: 's', label: 'S (36-38)', chestContour: 87, totalLength: 60, sleeveLength: 46, cuffContour: 17, upperArmContour: 29, armholeDepth: 21, backWidth: 43.5, neckContour: 34, armholeStartHeight: 39, raglanLength: 21, finalFrontNeckDrop: 8, backNeckDrop: 2.5 },
      
      // M
      { id: 'm', label: 'M (40-42)', chestContour: 93, totalLength: 62, sleeveLength: 47, cuffContour: 18, upperArmContour: 31, armholeDepth: 22, backWidth: 46.5, neckContour: 35, armholeStartHeight: 40, raglanLength: 22, finalFrontNeckDrop: 8.5, backNeckDrop: 2.5 },
      
      // L
      { id: 'l', label: 'L (42-44)', chestContour: 100, totalLength: 64, sleeveLength: 48, cuffContour: 19, upperArmContour: 33, armholeDepth: 23, backWidth: 50, neckContour: 36, armholeStartHeight: 41, raglanLength: 23, finalFrontNeckDrop: 8.5, backNeckDrop: 3 },
      
      // XL
      { id: 'xl', label: 'XL (46-48)', chestContour: 108, totalLength: 66, sleeveLength: 49, cuffContour: 20, upperArmContour: 35, armholeDepth: 24, backWidth: 54, neckContour: 37, armholeStartHeight: 42, raglanLength: 24, finalFrontNeckDrop: 9, backNeckDrop: 3 },
      
      // XXL
      { id: 'xxl', label: 'XXL (50-52)', chestContour: 116, totalLength: 68, sleeveLength: 49, cuffContour: 21, upperArmContour: 37, armholeDepth: 25, backWidth: 58, neckContour: 38, armholeStartHeight: 43, raglanLength: 25, finalFrontNeckDrop: 9.5, backNeckDrop: 3 },
    ];

    // --- ELEMENTOS DEL DOM ---
    const stitchesInput = document.getElementById('stitches');
    const rowsInput = document.getElementById('rows');
    const garmentTypeSelect = document.getElementById('garmentType');
    const customCmContainer = document.getElementById('custom-cm-container');
    const customCmInput = document.getElementById('customCm');
    const constructionMethodContainer = document.getElementById('construction-method-container');
    const constructionMethodSelect = document.getElementById('constructionMethod');
    const sizeContainer = document.getElementById('size-container');
    const sizeSelect = document.getElementById('size');
    const garmentPieceContainer = document.getElementById('garment-piece-container');
    const garmentPieceSelect = document.getElementById('garmentPiece');
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const errorContainer = document.getElementById('error-container');
    const resultsContainer = document.getElementById('results-container');
    
    // --- LÓGICA DE LA INTERFAZ ---

    function populateSizes() {
        sizeSelect.innerHTML = '<option value="" disabled selected>Elige una talla...</option>';
        const babySizes = SIZES.slice(0, 7);
        const kidSizes = SIZES.slice(7, 13);
        const adultSizes = SIZES.slice(13);

        const createOptgroup = (label, sizes) => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = label;
            sizes.forEach(size => {
                const option = document.createElement('option');
                option.value = size.id;
                option.textContent = size.label;
                optgroup.appendChild(option);
            });
            return optgroup;
        };

        sizeSelect.appendChild(createOptgroup('Bebé', babySizes));
        sizeSelect.appendChild(createOptgroup('Niño/a', kidSizes));
        sizeSelect.appendChild(createOptgroup('Adulto', adultSizes));
    }

    function updateFormVisibility() {
        const garmentType = garmentTypeSelect.value;
        const constructionMethod = constructionMethodSelect.value;

        // Reset visibility
        customCmContainer.classList.add('hidden');
        constructionMethodContainer.classList.add('hidden');
        sizeContainer.classList.add('hidden');
        garmentPieceContainer.classList.add('hidden');

        if (garmentType === 'custom') {
            customCmContainer.classList.remove('hidden');
        } else if (garmentType) {
            constructionMethodContainer.classList.remove('hidden');
            if(constructionMethod) {
              sizeContainer.classList.remove('hidden');
            }
            if (constructionMethod === 'bottom-up') {
                garmentPieceContainer.classList.remove('hidden');
            }
        }
    }
    
    garmentTypeSelect.addEventListener('change', updateFormVisibility);
    constructionMethodSelect.addEventListener('change', updateFormVisibility);

    function showError(message) {
        errorContainer.textContent = message;
        errorContainer.classList.remove('hidden');
    }

    function clearError() {
        errorContainer.classList.add('hidden');
    }

    function resetForm() {
        stitchesInput.value = '';
        rowsInput.value = '';
        garmentTypeSelect.value = '';
        customCmInput.value = '';
        constructionMethodSelect.value = '';
        sizeSelect.value = '';
        garmentPieceSelect.value = '';
        resultsContainer.innerHTML = '';
        clearError();
        updateFormVisibility();
    }
    
    // --- LÓGICA DE CÁLCULO AUXILIAR PARA ESCOTE REDONDO (JERSEY Y CHAQUETA) ---
    function calculateFrontNecklineShaping(size, stitchesPerCm, rowsPerCm, notes, isJacket) {
        const sizeIndex = SIZES.findIndex(s => s.id === size.id);
        let neckbandWidthCm = 2.5; // Adulto por defecto
        if (sizeIndex !== -1) {
            if (sizeIndex < 7) neckbandWidthCm = 1.5; // Bebé
            else if (sizeIndex < 13) neckbandWidthCm = 2.0; // Niño
        }
        
        const knittedNeckDropCm = size.finalFrontNeckDrop + neckbandWidthCm;
        const necklineStartCmOverride = size.totalLength - knittedNeckDropCm;
        const necklineStartRowsOverride = rowsPerCm ? Math.round(necklineStartCmOverride * rowsPerCm) : null;

        // --- CÁLCULO DE PUNTOS PARA EL ESCOTE COMPLETO (JERSEY) ---
        const fullFrontWidthStitches = Math.round(size.backWidth * stitchesPerCm);
        const frontNeckWidthStitches = Math.round((size.neckContour * 0.45) * stitchesPerCm);
        // Asegurar paridad correcta para la distribución
        const adjustedFrontNeckWidthStitches = (fullFrontWidthStitches % 2 === frontNeckWidthStitches % 2) ? frontNeckWidthStitches : frontNeckWidthStitches + 1;
        
        // Puntos centrales y laterales del escote de un JERSEY COMPLETO
        const centralCastOff = Math.round(adjustedFrontNeckWidthStitches / 3);
        const adjustedCentralCastOff = ((adjustedFrontNeckWidthStitches - centralCastOff) % 2 === 0) ? centralCastOff : centralCastOff + 1;
        const remainingToDecrease = adjustedFrontNeckWidthStitches - adjustedCentralCastOff;
        const decreasesPerSide = remainingToDecrease / 2; // Gradual decreases for one side of a JERSEY

        let initialCastOff = 0; // El primer bloque de puntos a cerrar
        let stitchesToShape = 0; // Los puntos restantes para la curva gradual (3s, 2s, 1s)

        if (isJacket) {
            // --- LÓGICA PARA DELANTERO DE CHAQUETA ---
            const neckStitchesPerFront = Math.round(adjustedFrontNeckWidthStitches / 2);

            // 1. Cierre Inicial (El bloque grande al principio de la sisa. Máx 6. Min 2. Aprox. 20-30% de los puntos totales)
            initialCastOff = Math.min(6, Math.floor(neckStitchesPerFront * 0.3 / 2) * 2);
            if (initialCastOff === 0 && neckStitchesPerFront > 0) initialCastOff = 2; // Mínimo 2.
            
            // 2. Puntos restantes para la curva gradual
            stitchesToShape = neckStitchesPerFront - initialCastOff;

        } else { // Jersey
            // --- LÓGICA PARA DELANTERO DE JERSEY ---
            initialCastOff = adjustedCentralCastOff; // For the jersey, this variable is used for the *center* cast off
            stitchesToShape = decreasesPerSide; // The stitches for the gradual curve on *one side*
        }
        
        // --- LÓGICA DE CONFORMACIÓN DE LA CURVA (Aplicable a Jersey (lateral) y Chaqueta (gradual)) ---
        const shapingInstructions = [];
        let remaining = isJacket ? stitchesToShape : decreasesPerSide; // Use decreasesPerSide for Jersey shaping
        
        if (remaining >= 0) {
            // Cierre de 3 puntos (Máximo 1 vez)
            if (remaining >= 3) {
                shapingInstructions.push(`  - Cerrar **3** puntos (1 vez)`);
                remaining -= 3;
            }

            // Cierre de 2 puntos
            const numTwos = Math.floor(remaining / 2);
            if (numTwos > 0) shapingInstructions.push(`  - Cerrar **2** puntos (${numTwos} ${numTwos > 1 ? 'veces' : 'vez'})`);
            remaining -= numTwos * 2;

            // Cierre de 1 punto
            if (remaining > 0) shapingInstructions.push(`  - Cerrar **1** punto (${remaining} ${remaining > 1 ? 'veces' : 'vez'})`);
        }


        notes.push('**Guía para el Escote Delantero (Redondo)**');
        notes.push(`Para que el escote final tenga la profundidad perfecta después de añadir la tira del cuello, empezamos a tejerlo **${neckbandWidthCm} cm más abajo** de lo normal. Este espacio será ocupado por la tira.`);

        if (isJacket) {
             // Instrucciones para CHAQUETA (Delantero, lado de la tapeta)
             notes.push(`**Paso 1: Empezar el escote.** Cuando tu tejido mida **${necklineStartCmOverride.toFixed(1)} cm** ${necklineStartRowsOverride ? `(aprox. en la pasada ${necklineStartRowsOverride})` : ''}, cierra el escote de la siguiente manera: (siempre al principio de la pasada)`);
             notes.push(`  - Cerrar **${initialCastOff}** puntos en el borde (en el lado de la tapeta).`);
             notes.push(...shapingInstructions);
             notes.push(`  - Una vez hechas todas las disminuciones del escote, continúa teje recto hasta que la pieza alcance su largo total.`);
             // Nota de Tapeta SOLICITADA
             notes.push('**¡ATENCIÓN! PUNTOS DE TAPETA:** Las instrucciones anteriores son para la forma del escote. **NO** incluyen los puntos que hayas añadido para la tapeta de botones. Debes tener en cuenta esos puntos adicionales y cerrarlos o tejerlos hasta el final separadamente.');

        } else { // Jersey
            // Instrucciones para JERSEY (Paso 1: Cierre Central, Paso 2: Forma a los lados)
            notes.push(`**Paso 1: Empezar el escote.** Cuando tu tejido mida **${necklineStartCmOverride.toFixed(1)} cm** ${necklineStartRowsOverride ? `(aprox. en la pasada ${necklineStartRowsOverride})` : ''}, cierra los **${adjustedCentralCastOff}** puntos centrales.`);
            if (shapingInstructions.length > 0) {
                notes.push(`**Paso 2: Dar forma a los lados.** Teje cada lado por separado, cerrando puntos en el borde del escote (al principio de cada pasada del derecho) así:`);
                notes.push(...shapingInstructions);
            }
            notes.push(`**Paso 3: Terminar.** Una vez hechas todas las disminuciones del escote, continúa teje recto hasta que la pieza alcance su largo total.`);
        }

        return { necklineStartCmOverride, necklineStartRowsOverride };
    }
    
    // --- LÓGICA DE CÁLCULO PRINCIPAL ---
    function handleCalculate() {
        clearError();
        resultsContainer.innerHTML = '';

        const stitches = parseFloat(stitchesInput.value);
        if (!stitches || stitches <= 0) {
            showError('Por favor, introduce un número válido de puntos en la muestra.');
            return;
        }

        const rows = parseFloat(rowsInput.value) || null;
        const stitchesPerCm = stitches / 10;
        const rowsPerCm = rows ? rows / 10 : null;

        const garmentType = garmentTypeSelect.value;
        if (garmentType === 'custom') {
            const customCm = parseFloat(customCmInput.value);
            if (!customCm || customCm <= 0) {
                showError('Por favor, introduce una medida válida en cm.');
                return;
            }
            const resultStitches = Math.round(customCm * stitchesPerCm);
            const resultRows = rowsPerCm ? Math.round(customCm * rowsPerCm) : null;
            renderCustomResults(resultStitches, resultRows);
            return;
        }
        
        const constructionMethod = constructionMethodSelect.value;
        const selectedSizeId = sizeSelect.value;

        if (!garmentType) {
            showError('Por favor, elige un tipo de prenda.');
            return;
        }
        if (!constructionMethod) {
            showError('Por favor, elige un método de construcción.');
            return;
        }
        if (!selectedSizeId) {
            showError('Por favor, elige una talla.');
            return;
        }
        
        const size = SIZES.find(s => s.id === selectedSizeId);
        if (!size) {
            showError('Talla no encontrada. Por favor, selecciona una de la lista.');
            return;
        }

        if (constructionMethod === 'bottom-up') {
            calculateBottomUp(size, stitchesPerCm, rowsPerCm);
        } else if (constructionMethod === 'top-down') {
            calculateTopDown(size, stitchesPerCm, rowsPerCm);
        }
    }

    function calculateBottomUp(size, stitchesPerCm, rowsPerCm) {
        const garmentPiece = garmentPieceSelect.value;
        if (!garmentPiece) {
            showError('Por favor, elige una pieza de la prenda.');
            return;
        }

        let width = 0;
        let notes = [];
        let measurements = [];
        let sleeveEndStitches;
        let necklineStartCmOverride = null;
        let necklineStartRowsOverride = null;
        const garmentType = garmentTypeSelect.value;

        switch(garmentPiece) {
            case 'espalda':
                width = size.backWidth;
                measurements.push({label: 'Ancho de espalda', value: `${size.backWidth} cm`});
                break;
            case 'delantero':
                if (garmentType === 'chaqueta') {
                    // CÁLCULO PARA UNA PIEZA DELANTERA (mitad del ancho)
                    width = size.backWidth / 2;
                    measurements.push({label: 'Ancho de un delantero', value: `${width.toFixed(1)} cm`});
                    notes.push('¡Atención! Este es el cálculo para UNA de las dos piezas delanteras. A los puntos calculados, debes sumar los necesarios para la tapeta de los botones.');
                    
                    // Lógica de Escote Redondo para Chaqueta (Delantero)
                    const neckInstructions = calculateFrontNecklineShaping(size, stitchesPerCm, rowsPerCm, notes, true);
                    necklineStartCmOverride = neckInstructions.necklineStartCmOverride;
                    necklineStartRowsOverride = neckInstructions.necklineStartRowsOverride;

                } else { // Jersey
                    // CÁLCULO PARA EL DELANTERO COMPLETO (escote redondo)
                    width = size.backWidth;
                    measurements.push({label: 'Ancho de delantero', value: `${size.backWidth} cm`});

                    // Lógica de Escote Redondo para Jersey (Delantero)
                    const neckInstructions = calculateFrontNecklineShaping(size, stitchesPerCm, rowsPerCm, notes, false);
                    necklineStartCmOverride = neckInstructions.necklineStartCmOverride;
                    necklineStartRowsOverride = neckInstructions.necklineStartRowsOverride;
                }
                break;
            case 'mangas':
                width = size.cuffContour;
                measurements.push({label: 'Contorno de puño', value: `${size.cuffContour} cm`});
                measurements.push({label: 'Ancho de sisa (brazo)', value: `${size.upperArmContour} cm`});
                const startStitches = Math.round(size.cuffContour * stitchesPerCm);
                const endStitches = Math.round(size.upperArmContour * stitchesPerCm);
                sleeveEndStitches = endStitches;
                const totalIncreaseStitches = endStitches - startStitches;
                if (totalIncreaseStitches > 0) {
                    let increaseNote = `Para dar forma a la manga, deberás aumentar un total de ${totalIncreaseStitches} puntos.`;
                    if (rowsPerCm) {
                        const totalRowsForSleeve = Math.round(size.sleeveLength * rowsPerCm);
                        const numberOfIncreaseEvents = totalIncreaseStitches / 2;
                        if (numberOfIncreaseEvents > 0) {
                            const increaseFrequencyInRows = Math.floor(totalRowsForSleeve / numberOfIncreaseEvents);
                            increaseNote += ` Esto se consigue haciendo 1 aumento a cada lado (${Math.ceil(numberOfIncreaseEvents)} veces) aproximadamente cada ${increaseFrequencyInRows} pasadas, repartidos uniformemente a lo largo de la manga.`;
                        }
                    } else {
                        increaseNote += ` Estos aumentos deben repartirse de manera uniforme a lo largo de los ${size.sleeveLength} cm de la manga hasta alcanzar la anchura necesaria.`;
                    }
                    notes.push(increaseNote);
                } else {
                    notes.push("No se necesitan aumentos para la manga. Tejer recto hasta la sisa.");
                }
                break;
        }

        if (garmentPiece === 'mangas') {
            measurements.push({label: 'Largo total de manga', value: `${size.sleeveLength} cm`});
        } else {
            measurements.push({label: 'Largo total', value: `${size.totalLength} cm`});
            measurements.push({label: 'Largo hasta sisa', value: `${size.armholeStartHeight} cm`});
        }
        measurements.push({label: 'Alto de sisa', value: `${size.armholeDepth} cm`});

        let necklineStartCm = necklineStartCmOverride !== null ? necklineStartCmOverride : (size.totalLength - (garmentPiece === 'delantero' ? size.finalFrontNeckDrop : size.backNeckDrop));
        let necklineStartRows = necklineStartRowsOverride !== null ? necklineStartRowsOverride : (rowsPerCm ? Math.round(necklineStartCm * rowsPerCm) : null);

        const results = {
            castOnStitches: Math.round(width * stitchesPerCm),
            sleeveEndStitches,
            totalLengthCm: garmentPiece === 'mangas' ? size.sleeveLength : size.totalLength,
            totalLengthRows: rowsPerCm ? Math.round((garmentPiece === 'mangas' ? size.sleeveLength : size.totalLength) * rowsPerCm) : null,
            armholeStartCm: size.armholeStartHeight,
            armholeStartRows: rowsPerCm ? Math.round(size.armholeStartHeight * rowsPerCm) : null,
            necklineStartCm: parseFloat(necklineStartCm.toFixed(1)),
            necklineStartRows: necklineStartRows,
            notes,
            measurements,
            garmentPiece,
        };
        renderBottomUpResults(results);
    }

    function calculateTopDown(size, stitchesPerCm, rowsPerCm) {
        const totalStitches = Math.round(size.neckContour * stitchesPerCm);
        const raglanStitches = 8;
        const remainingStitches = totalStitches - raglanStitches;
        const backStitches = Math.round(remainingStitches / 3);
        const frontStitches = Math.round(remainingStitches / 3);
        const sleevesStitches = remainingStitches - backStitches - frontStitches;
        
        let notes = ['Se sugiere tejer unas pasadas para el cuello (elástico o punto deseado) antes de empezar las vueltas de aumentos del ranglan.'];
        const garmentType = garmentTypeSelect.value;
        if (garmentType === 'chaqueta') {
            notes.push('¡Atención! Has elegido chaqueta. Los puntos del delantero se dividen en dos (para delantero izquierdo y derecho). A cada lado, debes añadir los puntos que necesites para la tapeta.');
        }

        const sleeveStartStitches = Math.round(size.upperArmContour * stitchesPerCm);
        const sleeveEndStitches = Math.round(size.cuffContour * stitchesPerCm);
        const totalDecreaseStitches = sleeveStartStitches - sleeveEndStitches;
        if (totalDecreaseStitches > 0) {
            let decreaseNote = `FORMA DE LA MANGA: Una vez separadas las mangas, para darles forma, deberás disminuir un total de ${totalDecreaseStitches} puntos hasta el puño.`;
            if (rowsPerCm) {
                const totalRowsForSleeve = Math.round(size.sleeveLength * rowsPerCm);
                const numberOfDecreaseEvents = totalDecreaseStitches / 2;
                if (numberOfDecreaseEvents > 0) {
                    const decreaseFrequencyInRows = Math.floor(totalRowsForSleeve / numberOfDecreaseEvents);
                    decreaseNote += ` Esto se consigue haciendo 1 disminución a cada lado (${Math.ceil(numberOfDecreaseEvents)} veces) aproximadamente cada ${decreaseFrequencyInRows} pasadas, repartidas uniformemente.`;
                }
            } else {
                decreaseNote += ` Estas disminuciones deben repartirse de manera uniforme a lo largo de los ${size.sleeveLength} cm de la manga.`;
            }
            notes.push(decreaseNote);
        } else {
             notes.push("FORMA DE LA MANGA: No se necesitan disminuciones. Tejer recto desde la sisa hasta el puño.");
        }
        
        const results = {
            castOnStitches: totalStitches,
            distribution: { back: backStitches, front: frontStitches, sleeves: sleevesStitches, raglan: raglanStitches },
            raglanLengthCm: size.raglanLength,
            raglanLengthRows: rowsPerCm ? Math.round(size.raglanLength * rowsPerCm) : null,
            sleeveLengthCm: size.sleeveLength,
            sleeveLengthRows: rowsPerCm ? Math.round(size.sleeveLength * rowsPerCm) : null,
            bodyLengthCm: size.armholeStartHeight,
            bodyLengthRows: rowsPerCm ? Math.round(size.armholeStartHeight * rowsPerCm) : null,
            notes,
            garmentType
        };
        renderTopDownResults(results);
    }
    
    // --- LÓGICA DE RENDERIZADO ---
    function formatNote(note) {
        // Usa una expresión más robusta para reemplazar **...** con <strong>...</strong>
        return note.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }
    
    // Texto de la CTA personalizado con el nombre de tu tienda y la tipografía manuscrita que te gusta
    const communityCTA_HTML = `
        <div class="mt-6 bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 rounded-md">
            <h4 class="font-bold">¡Comparte tu creación!</h4>
            <p style="font-family: 'Dancing Script', cursive;">Desde Rincón de labores nos encantaría ver tu proyecto terminado. Sube una foto a Instagram y etiquétanos <a href="https://www.instagram.com/rincondlabores/" target="_blank" rel="noopener noreferrer" class="font-bold underline">@rincondlabores</a>.</p>
        </div>`;


    function renderCustomResults(stitches, rows) {
        resultsContainer.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
                <h3 class="text-xl font-bold text-pink-700 mb-4">Resultado para Medida Personalizada</h3>
                <p class="text-lg">Puntos a montar: <span class="font-bold text-2xl text-purple-700">${stitches}</span></p>
                ${rows ? `<p class="text-lg">Largo total: <span class="font-bold text-2xl text-purple-700">${rows} pasadas</span></p>` : ''}
                ${communityCTA_HTML}
            </div>`;
    }

    function renderBottomUpResults(results) {
        const castOnLabel = results.garmentPiece === 'mangas' ? 'Puntos a montar (puño):' : 'Puntos a montar:';
        const renderRows = (rows) => rows ? `(${rows} pasadas)` : '';
        
        resultsContainer.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
                <h3 class="text-xl font-bold text-pink-700 mb-4">Cálculo para Construcción desde Abajo</h3>
                <div class="space-y-3 text-gray-700">
                    <p class="text-lg"><strong>${castOnLabel}</strong> <span class="font-bold text-2xl text-purple-700">${results.castOnStitches}</span></p>
                    ${results.garmentPiece === 'mangas' && results.sleeveEndStitches ? `<p class="text-lg"><strong>Puntos finales (sisa):</strong> <span class="font-bold text-2xl text-purple-700">${results.sleeveEndStitches}</span></p>` : ''}
                    <p><strong>Largo total de la pieza:</strong> ${results.totalLengthCm} cm ${renderRows(results.totalLengthRows)}</p>
                    ${results.garmentPiece !== 'mangas' ? `<p><strong>Empezar sisa a los:</strong> ${results.armholeStartCm} cm ${renderRows(results.armholeStartRows)} desde el inicio.</p>` : ''}
                    ${(results.garmentPiece === 'delantero' || results.garmentPiece === 'espalda') ? `<p><strong>Empezar escote a los:</strong> ${results.necklineStartCm} cm ${renderRows(results.necklineStartRows)} desde el inicio.</p>` : ''}
                </div>
                ${results.measurements.length > 0 ? `
                <div class="mt-6 border-t pt-4">
                    <h4 class="font-bold text-pink-600">Medidas de referencia usadas:</h4>
                    <ul class="list-disc list-inside text-sm text-gray-600">
                        ${results.measurements.map(m => `<li>${m.label}: <strong>${m.value}</strong></li>`).join('')}
                    </ul>
                </div>` : ''}
                ${results.notes.length > 0 ? `
                <div class="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
                    <h4 class="font-bold">Notas Importantes</h4>
                    <ul class="list-disc list-inside space-y-1">
                        ${results.notes.map(note => `<li>${formatNote(note)}</li>`).join('')}
                    </ul>
                </div>` : ''}
                ${communityCTA_HTML}
            </div>`;
    }

    function renderTopDownResults(results) {
        const renderRows = (rows) => rows ? `(${rows} pasadas)` : '';

        resultsContainer.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
                <h3 class="text-xl font-bold text-pink-700 mb-4">Cálculo para Construcción Top-Down (Ranglan)</h3>
                <div class="space-y-3 text-gray-700">
                    <p><strong>Puntos a montar para el cuello:</strong> <span class="font-bold text-2xl text-purple-700">${results.castOnStitches}</span></p>
                    <div class="bg-purple-50 p-4 rounded-md">
                        <h4 class="font-bold mb-2">Reparto de puntos:</h4>
                        <p><strong>Espalda:</strong> ${results.distribution.back} puntos</p>
                        <p><strong>Delantero:</strong> ${results.distribution.front} puntos ${results.garmentType === 'chaqueta' ? `(a dividir en ${Math.round(results.distribution.front/2)} por lado)` : ''}</p>
                        <p><strong>Mangas:</strong> ${results.distribution.sleeves} puntos (a dividir en ${Math.round(results.distribution.sleeves/2)} por manga)</p>
                        <p><strong>Puntos de Ranglan:</strong> ${results.distribution.raglan} puntos (normalmente 2 por cada una de las 4 líneas de ranglan)</p>
                    </div>
                    <p><strong>Largo del ranglan:</strong> ${results.raglanLengthCm} cm ${renderRows(results.raglanLengthRows)}</p>
                    <p><strong>Largo de manga (desde sisa):</strong> ${results.sleeveLengthCm} cm ${renderRows(results.sleeveLengthRows)}</p>
                    <p><strong>Largo del cuerpo (desde sisa):</strong> ${results.bodyLengthCm} cm ${renderRows(results.bodyLengthRows)}</p>
                </div>
                ${results.notes.length > 0 ? `
                <div class="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
                    <h4 class="font-bold">Notas y Sugerencias</h4>
                    <ul class="list-disc list-inside">
                        ${results.notes.map(note => `<li>${note.replace('FORMA DE LA MANGA:', '<strong>FORMA DE LA MANGA:</strong>')}</li>`).join('')}
                    </ul>
                </div>` : ''}
                ${communityCTA_HTML}
            </div>`;
    }

    // --- INICIALIZACIÓN ---
    populateSizes();
    updateFormVisibility();
    calculateBtn.addEventListener('click', handleCalculate);
    resetBtn.addEventListener('click', resetForm);
});
