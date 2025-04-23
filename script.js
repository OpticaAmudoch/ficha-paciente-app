function imprimirFormulario() {
  // Esta función usa la funcionalidad nativa del navegador para imprimir la página.
  window.print();
}

function guardarTXT() {
  // Obtener el número de sobre para el nombre del archivo
  const numeroSobre = document.getElementById("numero_sobre").value.trim();

  // Validar que se haya ingresado un número de sobre
  if (!numeroSobre) {
    alert("Por favor, ingrese un número de sobre para guardar la ficha.");
    return; // Detiene la función si no hay número de sobre
  }

  // Recolectar todos los datos del formulario
  const contenido = `Ficha de Paciente\n\n` +
    `Número de Sobre: ${numeroSobre}\n` +
    `Nombre: ${document.getElementById("nombre").value}\n` +
    `Apellido: ${document.getElementById("apellido").value}\n` +
    `DNI: ${document.getElementById("dni").value}\n` +
    `Teléfono: ${document.getElementById("telefono").value}\n` +
    `Fecha: ${document.getElementById("fecha").value}\n\n` +

    `Graduación Lejos\n` +
    `OD: Esf ${document.getElementById("lejos_od_esf").value}, Cil ${document.getElementById("lejos_od_cil").value}, Eje ${document.getElementById("lejos_od_eje").value}\n` +
    `OI: Esf ${document.getElementById("lejos_oi_esf").value}, Cil ${document.getElementById("lejos_oi_cil").value}, Eje ${document.getElementById("lejos_oi_eje").value}\n\n` +

    `Graduación Cerca\n` +
    `OD: Esf ${document.getElementById("cerca_od_esf").value}, Cil ${document.getElementById("cerca_od_cil").value}, Eje ${document.getElementById("cerca_od_eje").value}\n` +
    `OI: Esf ${document.getElementById("cerca_oi_esf").value}, Cil ${document.getElementById("cerca_oi_cil").value}, Eje ${document.getElementById("cerca_oi_eje").value}\n\n` +

    `Tipo de Cristal: ${document.getElementById("tipo_cristal").value}\n` +
    `Tipo de Armazón: ${document.getElementById("tipo_armazon").value}\n` +
    `Tipo de Montaje: ${document.getElementById("tipo_montaje").value}\n` +
    `Estado del Armazón: ${document.getElementById("estado_armazon").value}\n` +
    `Marca: ${document.getElementById("marca_armazon").value}\n` +
    `Modelo: ${document.getElementById("modelo_armazon").value}\n` +
    `Código Interno: ${document.getElementById("codigo_interno").value}`;

  // Crear un Blob con el contenido del texto
  const blob = new Blob([contenido], { type: "text/plain" });

  // Crear un enlace <a> para descargar el archivo
  const enlace = document.createElement("a");

  // Crear una URL para el Blob
  enlace.href = URL.createObjectURL(blob);

  // Asignar el nombre al archivo descargado
  enlace.download = `Ficha_Paciente_${numeroSobre}.txt`;

  // Simular un clic en el enlace para iniciar la descarga
  enlace.click();

  // Limpiar la URL del Blob (liberar memoria) después de un breve retraso
  // Esto es opcional pero buena práctica, especialmente con archivos grandes
  setTimeout(() => URL.revokeObjectURL(enlace.href), 1000);
}