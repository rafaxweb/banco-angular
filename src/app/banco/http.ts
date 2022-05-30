export function ajax(opciones: any, callback: any) {

    // crea el objeto XMLHttpRequest
    const xhttp = new XMLHttpRequest();

    // establece una función a invocar cuando el atributo readyState cambia
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) { // Importante saber qué respuesta da el servidor, no siempre es 200
            callback(this.responseText);
        }
    };

    // establece la configuración de la petición (tipo, url y asincronismo)
    xhttp.open(opciones.method, opciones.url, true);

    // Mandar cabeceras
    for (let key in opciones.headers) {
        xhttp.setRequestHeader(key, opciones.headers[key])
    }

    // envía la petición al servidor, el body (un JSON normalmente)
    xhttp.send(opciones.body);
}
