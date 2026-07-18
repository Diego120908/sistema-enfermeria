const CONFIG = {
    API_URL: 'https://script.google.com/macros/s/AKfycbyDI52Ns_10KZ5O1nmRXgeZHQUWQW_SNHpMw-dICraRSEWCTqMwFZdV4fjgZCfTtWGZuw/exec',
    TIEMPO_SINCRONIZACION: 30000,
};

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

async function guardarPacienteCloud(datos) {
    try {
        const response = await fetch(CONFIG.API_URL + '?accion=guardarPaciente&datos=' + encodeURIComponent(JSON.stringify(datos)));
        const resultado = await response.json();
        return resultado;
    } catch (error) {
        console.error('Error guardando paciente:', error);
        return { success: false, error: error.toString() };
    }
}

async function guardarAccesoCloud(datos) {
    try {
        const response = await fetch(CONFIG.API_URL + '?accion=guardarAcceso&datos=' + encodeURIComponent(JSON.stringify(datos)));
        const resultado = await response.json();
        return resultado;
    } catch (error) {
        console.error('Error guardando acceso:', error);
        return { success: false, error: error.toString() };
    }
}

async function obtenerPacientesCloud() {
    try {
        const response = await fetch(CONFIG.API_URL + '?accion=obtenerPacientes');
        const resultado = await response.json();
        return resultado;
    } catch (error) {
        console.error('Error obteniendo pacientes:', error);
        return [];
    }
}

async function obtenerAccesosCloud() {
    try {
        const response = await fetch(CONFIG.API_URL + '?accion=obtenerAccesos');
        const resultado = await response.json();
        return resultado;
    } catch (error) {
        console.error('Error obteniendo accesos:', error);
        return [];
    }
}

async function actualizarEstadoCloud(datos) {
    try {
        const response = await fetch(CONFIG.API_URL + '?accion=actualizarEstado&datos=' + encodeURIComponent(JSON.stringify(datos)));
        const resultado = await response.json();
        return resultado;
    } catch (error) {
        console.error('Error actualizando estado:', error);
        return { success: false, error: error.toString() };
    }
}
