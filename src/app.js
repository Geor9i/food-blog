import '../styles/site.scss';
import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";

if (module.hot) {
  module.hot.accept();
}

const main = document.querySelector("main");
const nav = document.querySelector("header");

const router = {
  navigate: page.show,
  redirect: page.redirect,
};
//Render Functions
const renderNav = (template) => render(template, nav);
const renderBody = (template) => render(template, main);

// page(services.authService.confirmUser);
// page(navComponent.showView);
// page("/index.html", "/");

page.start();
