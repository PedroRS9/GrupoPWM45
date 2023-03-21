import { loadOver } from "../index.js"
import Users from '../../model/Users.js'

loadOver("./header.html", document.querySelector('script[src="../scripts/components/header.js"]'))
document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    script.src = '../scripts/hamburger.js';
    document.body.appendChild(script);
});

// TODO: Esto son tests
Users.findByEmail("algo").then(data => console.log(data.name()))
Users.findByEmail("root@root.com").then(data => console.log(data.name()))
Users.findByEmail("algo").then(data => console.log(data?.name()))
