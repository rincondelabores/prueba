const tallas = {
  preemie: { chest: 35, totalLength: 18, sleeve: 11, cuff: 11, upperArm: 13, armhole: 7.5, backWidth: 19, neck: 19, armholeStart: 4, raglanLength: 9, frontNeckDrop: 4, backNeckDrop: 1.5 },
  newborn: { chest: 40, totalLength: 20, sleeve: 13, cuff: 13, upperArm: 15, armhole: 8, backWidth: 20, neck: 22, armholeStart: 10, raglanLength: 4.5, frontNeckDrop: 4.5, backNeckDrop: 1.5 },
  "1-3m": { chest: 44, totalLength: 24, sleeve: 15, cuff: 14, upperArm: 16.5, armhole: 9, backWidth: 22, neck: 23, armholeStart: 15, raglanLength: 11, frontNeckDrop: 4.5, backNeckDrop: 1.5 },
  "3-6m": { chest: 46, totalLength: 28, sleeve: 17, cuff: 14.5, upperArm: 17.5, armhole: 10, backWidth: 23, neck: 24, armholeStart: 18, raglanLength: 12.5, frontNeckDrop: 5, backNeckDrop: 2 },
  "6-9m": { chest: 48, totalLength: 30, sleeve: 19, cuff: 15, upperArm: 18, armhole: 11, backWidth: 24, neck: 25, armholeStart: 19, raglanLength: 13.5, frontNeckDrop: 5, backNeckDrop: 2 },
  "9-12m": { chest: 50, totalLength: 32, sleeve: 21, cuff: 15.5, upperArm: 19, armhole: 12, backWidth: 25, neck: 26, armholeStart: 20, raglanLength: 15, frontNeckDrop: 5.5, backNeckDrop: 2 },
  "12-18m": { chest: 52, totalLength: 34, sleeve: 23, cuff: 16, upperArm: 20, armhole: 13, backWidth: 26, neck: 27, armholeStart: 21, raglanLength: 16, frontNeckDrop: 5.5, backNeckDrop: 2 },
  "18-24m": { chest: 55, totalLength: 37, sleeve: 25, cuff: 16.5, upperArm: 21, armhole: 14, backWidth: 27.5, neck: 28, armholeStart: 23, raglanLength: 17, frontNeckDrop: 6, backNeckDrop: 2 },
  "3y": { chest: 62, totalLength: 40, sleeve: 28, cuff: 17, upperArm: 22.5, armhole: 15, backWidth: 31, neck: 29, armholeStart: 25, raglanLength: 18.5, frontNeckDrop: 6.5, backNeckDrop: 2 },
  "4y": { chest: 66, totalLength: 43, sleeve: 31, cuff: 17.5, upperArm: 24, armhole: 16, backWidth: 33, neck: 30, armholeStart: 27, raglanLength: 20, frontNeckDrop: 6.5, backNeckDrop: 2 },
  "6y": { chest: 72, totalLength: 48, sleeve: 36, cuff: 18, upperArm: 26, armhole: 17, backWidth: 36, neck: 31, armholeStart: 29, raglanLength: 21.5, frontNeckDrop: 7, backNeckDrop: 2.5 },
  "8y": { chest: 78, totalLength: 51, sleeve: 40, cuff: 18.5, upperArm: 28, armhole: 18, backWidth: 39, neck: 32, armholeStart: 33, raglanLength: 22.5, frontNeckDrop: 7, backNeckDrop: 2.5 },
  "10y": { chest: 84, totalLength: 54, sleeve: 44, cuff: 19, upperArm: 30, armhole: 19, backWidth: 42, neck: 33, armholeStart: 35, raglanLength: 24, frontNeckDrop: 7.5, backNeckDrop: 2.5 },
  xs: { chest: 88, totalLength: 56, sleeve: 46, cuff: 20, upperArm: 32, armhole: 20, backWidth: 44, neck: 35, armholeStart: 36, raglanLength: 26, frontNeckDrop: 8, backNeckDrop: 2.5 },
  s: { chest: 94, totalLength: 58, sleeve: 47, cuff: 21, upperArm: 34, armhole: 21, backWidth: 47, neck: 37, armholeStart: 37, raglanLength: 27, frontNeckDrop: 8, backNeckDrop: 2.5 },
  m: { chest: 102, totalLength: 59, sleeve: 48, cuff: 22, upperArm: 37, armhole: 22, backWidth: 51, neck: 39, armholeStart: 37, raglanLength: 29, frontNeckDrop: 8.5, backNeckDrop: 2.5 },
  l: { chest: 110, totalLength: 60, sleeve: 48, cuff: 23, upperArm: 40, armhole: 23, backWidth: 55, neck: 41, armholeStart: 37, raglanLength: 30.5, frontNeckDrop: 8.5, backNeckDrop: 3 },
  xl: { chest: 118, totalLength: 62, sleeve: 49, cuff: 24, upperArm: 43, armhole: 24, backWidth: 59, neck: 43, armholeStart: 38, raglanLength: 29, frontNeckDrop: 9, backNeckDrop: 3 },
  xxl: { chest: 126, totalLength: 64, sleeve: 49, cuff: 25, upperArm: 46, armhole: 25, backWidth: 63, neck: 45, armholeStart: 39, raglanLength: 34, frontNeckDrop: 9.5, backNeckDrop: 3.5 },
};

// cargar tallas al select
const selectTalla = document.getElementById("talla");
for (const key in tallas) {
  const opt = document.createElement("option");
  opt.value = key;
  opt.textContent = key.toUpperCase();
  selectTalla.appendChild(opt);
}

document.getElementById("formCalculadora").addEventListener("submit", (e) => {
  e.preventDefault();

  const gaugePoints = parseFloat(document.getElementById("gaugePoints").value);
  const gaugeRows = parseFloat(document.getElementById("gaugeRows").value) || null;
  const talla = tallas[document.getElementById("talla").value];
  const pieza = document.getElementById("pieza").value;

  const stitchesPerCm = gaugePoints / 10;
  const rowsPerCm = gaugeRows ? gaugeRows / 10 : null;
  let resultado = "";

  switch (pieza) {
    case "espalda":
      resultado = `
        <p><strong>Puntos a montar:</strong> ${Math.round(talla.backWidth * stitchesPerCm)}</p>
        <p><em>Recuerda ajustar la altura del escote delantero y sumar la tira de cuello (1.5–2.5 cm según talla).</em></p>
      `;
      break;
    case "delanteroChaqueta":
      resultado = `
        <p><strong>Puntos a montar (1 lado):</strong> ${Math.round((talla.backWidth / 2) * stitchesPerCm)}</p>
        <p><em>Añade puntos extra para la tapeta delantera.</em></p>
      `;
      break;
    case "manga":
      const cuffSts = Math.round(talla.cuff * stitchesPerCm);
      const upperSts = Math.round(talla.upperArm * stitchesPerCm);
      resultado = `
        <p><strong>Puntos iniciales (puño):</strong> ${cuffSts}</p>
        <p><strong>Puntos finales (brazo):</strong> ${upperSts}</p>
        ${rowsPerCm ? `<p>Total pasadas: ${Math.round(talla.sleeve * rowsPerCm)}</p>` : ""}
        <p><em>Distribuye aumentos uniformemente de ${cuffSts} a ${upperSts} puntos.</em></p>
      `;
      break;
    case "cuello":
      const neckSts = Math.round(talla.neck * stitchesPerCm);
      const restantes = neckSts - 8;
      resultado = `
        <p><strong>Puntos a montar:</strong> ${neckSts}</p>
        <p>Distribución inicial:</p>
        <ul>
          <li>8 puntos fijos (líneas de ranglan)</li>
          <li>Espalda: ${Math.round(restantes / 3)}</li>
          <li>Delantero: ${Math.round(restantes / 3)}</li>
          <li>Mangas: ${Math.round((restantes / 3) / 2)} cada una</li>
        </ul>
      `;
      break;
  }

  document.getElementById("resultadoTexto").innerHTML = resultado;
  document.getElementById("resultados").classList.remove("oculto");
});
