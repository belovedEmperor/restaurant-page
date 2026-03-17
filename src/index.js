import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";

const PAGES = {
  home: 0,
  menu: 1,
  about: 2,
};
let previousPage = PAGES.home;

const content = document.querySelector("#content");

function handleChangePage(page) {
  content.innerHTML = "";
  let newContent;
  switch (true) {
    case page === PAGES.menu:
      newContent = new Menu().render();
      break;
    case page === PAGES.about:
      newContent = new About().render();
      break;
    default:
      newContent = new Home().render();
      break;
  }
  changeCurrentPage(page);
  content.append(newContent);
}

function changeCurrentPage(currentPage) {
  buttons[previousPage].classList.remove("currentPage");
  buttons[currentPage].classList.add("currentPage");
  previousPage = currentPage;
}

const buttons = document.querySelectorAll("button");

for (const page in PAGES) {
  const index = PAGES[page];
  buttons[index].addEventListener("click", () => {
    handleChangePage(index);
  });
}

handleChangePage(PAGES.home);
