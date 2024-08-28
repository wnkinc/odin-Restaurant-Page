import "./menuPage.css";
import "./homePage.css";
import "./contactPage.css";
import { loadContactPage } from "./contactPage";
import { loadMenuPage } from "./menuPage";
import { loadHomePage } from "./homePage.js";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
} 

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector('.contact');

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
contactButton.addEventListener('click', () => {
    document.body.className = "contact-page";
    contentDiv.textContent = "";
    loadContactPage()
});

document.body.className = "home-page";
loadHomePage();