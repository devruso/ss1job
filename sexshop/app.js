import error404Screen from './screens/error404Screen.js';
import homeScreen from './screens/homeScreen.js';
import productScreen from './screens/productScreen.js';
import { parseRequestUrl } from './screens/utils.js';
const routes = {
    '/': homeScreen,
    '/product/id': productScreen,
};
const router = () =>{
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + 
    (request.id ? '/:id': '') +
    (request.verb ? `/${request.verb}`: '');
    
    const screen = routes[parseUrl] ? routes[parseUrl]: error404Screen;
    const main = document.getElementById("main-container");
    main.innerHTML =screen.render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange',router);