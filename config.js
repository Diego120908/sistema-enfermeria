// =============================================
// CONFIGURACIÓN DE GOOGLE SHEETS API
// SOLO ATENCIONES
// =============================================

const CONFIG = {
    API_URL: 'https://script.google.com/macros/s/AKfycbw7UgMMHbjumdMAd5selhphawktx3anHCnm4X4eBOAsGp-5FPdusGaHXtXk8X8MdA/exec',
    TIEMPO_SINCRONIZACION: 30000,
};

// =============================================
// FUNCIONES PARA CONECTAR CON GOOGLE SHEETS
// =============================================

async function guardarAtencionCloud(datos) {
    try {
        const response = await fetch(CONFIG.API_URL + '?accion=guardarAtencion&datos=' + encodeURIComponent(JSON.stringify(datos)));
        const resultado = await response.json();
        return resultado;
    } catch (error) {
        console.error('Error guardando atención:', error);
        return { success: false, error: error.toString() };
    }
}

async function obtenerAtencionesCloud() {
    try {
        const response = await fetch(CONFIG.API_URL + '?accion=obtenerAtenciones');
        const resultado = await response.json();
        return resultado;
    } catch (error) {
        console.error('Error obteniendo atenciones:', error);
        return [];
    }
}
