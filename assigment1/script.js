let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu");

btnMenu.onclick = () => {
  btnMenu.classList.toggle("fa-times");
  menu.classList.toggle("active");
};
toggleSwitch.addEventListener("change", switchTheme, false);
