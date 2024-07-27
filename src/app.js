import '../styles/site.scss';
import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import NavComponent from './components/navComponent/nav.js';

if (module.hot) {
  module.hot.accept();
}

const main = document.querySelector("main");
const nav = document.querySelector("header");

//Render Functions
const renderNav = (template) => render(template, nav);
const renderBody = (template) => render(template, main);

const navComponent = new NavComponent(renderNav);

// page(services.authService.confirmUser);
page(navComponent.showView);
// page("/index.html", "/");

page.start();
