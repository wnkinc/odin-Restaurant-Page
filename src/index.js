import "./menuPage.css";
import "./homePage.css";
import { loadMenuPage } from "./menuPage";
import { loadHomePage } from "./homePage.js";

alert("Hello, World!");

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");

const contentDiv = document.querySelector("#content");

homeButton.addEventListener('click', () => {
    document.body.className = "home-page";
    contentDiv.textContent = "";
    loadHomePage()
});
menuButton.addEventListener('click', () => {
    document.body.className = "menu-page";
    contentDiv.textContent = "";
    loadMenuPage()
});

document.body.className = "home-page";
loadHomePage();