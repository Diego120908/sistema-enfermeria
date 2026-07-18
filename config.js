// =============================================
// CONFIGURACIÓN DE GOOGLE SHEETS API
// SOLO ATENCIONES (CON RANGO DE TEMPERATURA)
// =============================================

const CONFIG = {
    API_URL: 'https://script.google.com/macros/s/AKfycbzkq88sk_XLvecYNLDGBjIJS2f0c8Y2eZ2zZkUm98EcloiAmA-6GnqGp7vO_Cvipve22Q/exec',
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
