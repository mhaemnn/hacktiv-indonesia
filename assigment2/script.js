let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu");

btnMenu.onclick = () => {
  btnMenu.classList.toggle("fa-times");
  menu.classList.toggle("active");
};
toggleSwitch.addEventListener("change", switchTheme, false);

// addEvenLisner
function toggleForm() {
  var form = document.getElementById("form");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
