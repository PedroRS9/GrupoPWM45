import { loadOver } from "../index.js"
loadOver("header.html", document.querySelector('script[src="../scripts/components/header.js"]'))
document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = '../scripts/hamburger.js';
    document.body.appendChild(script);
});
