import Home from "./pages/home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Admin from "./pages/admin.js";
import "./style.css";

const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/admin": Admin
};

function render() {
  const path = location.hash.slice(1) || "/";
  const page = routes[path] || Home;

  document.querySelector("#app").innerHTML = `
    <nav>
      <h2>My Website</h2>
      <div>
        <a href="#/">Home</a>
        <a href="#/about">About</a>
        <a href="#/contact">Contact</a>
        <a href="#/admin">Admin</a>
      </div>
    </nav>

    ${page()}

    <footer>© 2026 My Website</footer>
  `;
}

window.addEventListener("hashchange", render);
render();