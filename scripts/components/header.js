import { loadOver } from "../index.js"
loadOver("../../html/header.html", document.querySelector('script[src="../scripts/components/header.js"]'))
setTimeout(function() {
    var script = document.createElement('script');
    script.src = '../scripts/hamburger.js';
    document.body.appendChild(script);
}, 10); /* SI NO ESPERAS UN POCO NO HAY MANERA DE QUE CARGUE BIEN EL SCRIPT. DESCONOZCO EL MOTIVO. */