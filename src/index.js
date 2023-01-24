import createHeader from './header'
import createFooter from './footer'
import createNavBar from './nav'
import createHome from './home'
import createMenu from './menu'
import createContact from './contact'

import "./reset.css"
import "./TOP-header-footer.css"
import "./nav.css"
import "./home.css"
import "./menu.css"
import "./contact.css"

const content = document.getElementById('content');
content.appendChild(createHeader());
content.appendChild(createNavBar());
content.appendChild(createHome());
content.appendChild(createFooter());

const footer = document.querySelector("footer");
const navButtons = document.querySelectorAll(".nav-list__item");
const renderPage = (item) => {
  if(item.id === "home" & !item.classList.contains("nav-list__item--is-active")){
    item.classList.add("nav-list__item--is-active");
    content.removeChild(footer.previousSibling);
    content.insertBefore(createHome(), footer);
    navButtons.forEach(button => button.id !== "home" && button.classList.remove("nav-list__item--is-active"));
  } else if(item.id === "menu" & !item.classList.contains("nav-list__item--is-active")){
    item.classList.add("nav-list__item--is-active");
    content.removeChild(footer.previousSibling);
    content.insertBefore(createMenu(), footer);
    navButtons.forEach(button => button.id !== "menu" && button.classList.remove("nav-list__item--is-active"));
  } else if(item.id === "contact" & !item.classList.contains("nav-list__item--is-active")){
    item.classList.add("nav-list__item--is-active");
    content.removeChild(footer.previousSibling);
    content.insertBefore(createContact(), footer);
    navButtons.forEach(button => button.id !== "menu" && button.classList.remove("nav-list__item--is-active"));
  }
}

navButtons.forEach(button => button.addEventListener('click', () => {
  renderPage(button)
}))