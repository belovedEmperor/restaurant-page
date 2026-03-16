import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";

const content = document.querySelector("#content");
new Menu().render(content);
