import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";

const PAGES = {
  home: 0,
  menu: 1,
  about: 2,
};

const content = document.querySelector("#content");

function handleChangePage(page) {
  switch (true) {
    case page === PAGES.menu:
      content.innerHTML = "";
      new Menu().render(content);
      return true;
    //     case page === PAGES.about:
    //       content.innerHTML = ""
    // new About().render(content);
    //       return true;
    default:
      content.innerHTML = "";
      new Home().render(content);
      return true;
  }
}

new Menu().render(content);

const buttons = document.querySelectorAll("button");
const homeButton = buttons[0];
const menuButton = buttons[1];
const aboutbutton = buttons[2];

for (const page in PAGES) {
  const index = PAGES[page];
  buttons[index].addEventListener("click", () => {
    handleChangePage(index);
  });
}
